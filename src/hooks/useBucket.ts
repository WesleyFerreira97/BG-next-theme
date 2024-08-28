import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supaDb } from "../services/supadb";
import { FileObject } from '@supabase/storage-js'
// import { SectionColorsNames } from "../screens/AddProduct/AddImages/sectionColors";

type UseSelectProps = {
    bucketPath: string;
    selectInsideFolders: boolean;
}

export type FilesStrucutreProps = {
    images: FileObject[];
    // slug: SectionColorsNames;
    slug: string;
    bucketPath: string;
}

export function useBucket<T>({ bucketPath, ...props }: UseSelectProps) {
    const [selectResponse, setSelectResponse] = useState<FileObject[] | null>(null);
    const [selectResponseError, setSelectResponseError] = useState<PostgrestError>(null);
    const [filesStructure, setFilesStructure] = useState<FilesStrucutreProps[]>();

    useEffect(() => {
        if (!bucketPath) return;

        async function useSelect() {
            const { data, error } = await supaDb
                .storage
                .from("photo")
                .list(`${bucketPath}`, {
                    limit: 20,
                    offset: 0,
                    sortBy: { column: 'name', order: 'asc' },
                });

            if (error) {
                setSelectResponseError(error as unknown as PostgrestError);
                return;
            }

            setSelectResponse(data);

            if (props.selectInsideFolders) {
                selectFolders(data);
            }
        }

        useSelect();
    }, []);

    async function selectFolders(data) {
        let out: FilesStrucutreProps[] = [];

        async function useSelect(item) {
            try {
                const { data, error } = await supaDb
                    .storage
                    .from("photo")
                    .list(`${bucketPath}/${item.name}`, {
                        limit: 20,
                        offset: 0,
                        sortBy: { column: 'name', order: 'asc' },
                    });

                out.push({
                    slug: item.name,
                    images: data,
                    bucketPath: bucketPath
                })
            } catch (err) {
                console.error('Erro ao buscar dados:', err);
            }
        }

        await Promise.all(data.map(useSelect));

        setFilesStructure(out);
    }

    return { selectResponse, selectResponseError, filesStructure };
}

