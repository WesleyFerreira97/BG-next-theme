import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supaDb } from "../services/supadb";

type UseSelectProps = {
    select: string[];
    match?: string;
}

export function useSelect<T>({ select, match }: UseSelectProps) {
    const [selectResponse, setSelectResponse] = useState<T | null>(null);
    const [selectResponseError, setSelectResponseError] = useState<PostgrestError>();

    const selectedColumns = select.join(",");

    useEffect(() => {
        async function selectData() {
            const { data, error } = await supaDb
                .from("products")
                .select(selectedColumns);
            // .match(match);

            setSelectResponse(data as T);
            setSelectResponseError(error as PostgrestError);
        }

        selectData();
    }, [match, selectedColumns]);

    return { selectResponse, selectResponseError };
}