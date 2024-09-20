import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supaDb } from "../services/supadb";

type CategoriesProps = {
    id: string,
    created_at: Date,
    title: string,
    slug: string,
}

type CategoriesHookProps = {
    allCategories: CategoriesProps[] | null,
    categoriesError: PostgrestError | null,
}

export function useCategories() {
    const [categoriesResponse, setCategoriesResponse] = useState<CategoriesHookProps>();

    useEffect(() => {
        async function getAllCategories() {
            const data = await supaDb
                .from('categories')
                .select();
            return data;
        }

        getAllCategories().then(res => {

            setCategoriesResponse({
                allCategories: res.data,
                categoriesError: res.error
            });
        });
    }, [])

    return { ...categoriesResponse };
}