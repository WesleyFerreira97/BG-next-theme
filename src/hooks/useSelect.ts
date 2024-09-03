import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supaDb } from "../services/supadb";

type UseSelectProps<T> = {
    select?: (keyof T)[] | "*";
    tableName: string;
    match?: Partial<T>;
}

export function useSelect<T>({ select, tableName, match }: UseSelectProps<T>) {
    const [selectResponse, setSelectResponse] = useState<T[] | null>(null);
    const [selectResponseError, setSelectResponseError] = useState<PostgrestError>();

    const selectedColumns = Array.isArray(select) ? select.join(",") : select;

    useEffect(() => {
        async function selectData() {
            const { data, error } = await supaDb
                .from(tableName)
                .select(selectedColumns)
                .limit(12)
                .match({ ...match });

            setSelectResponse(data as T[]);
            setSelectResponseError(error as PostgrestError);
        }

        selectData();
    }, []);

    return { selectResponse, selectResponseError };
}