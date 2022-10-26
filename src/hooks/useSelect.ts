import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supaDb } from "../services/supadb";

type UseSelectProps<T> = {
    select: T[];
    match?: T[];
}

export function useSelect<T>({ select, match }: UseSelectProps<T>) {
    const [selectResponse, setSelectResponse] = useState<T | null>(null);
    const [selectResponseError, setSelectResponseError] = useState<PostgrestError>();

    const selectedColumns = Array.isArray(select) ? select.join(",") : select;

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