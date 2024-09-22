import { useEffect, useState } from "react";
import { supaDb } from "../services/supadb";


type UrlProps = {
    bucketPath: string;
    fileName: string;
}

export const usePublicUrl = () => {
    const [imageData, setImageData] = useState<UrlProps>({
        bucketPath: "",
        fileName: ""
    });
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        const getFinalUrl = async () => {
            const { data } = supaDb
                .storage
                .from("photo")
                .getPublicUrl(`${imageData.bucketPath}/${imageData.fileName}`);

            setImageUrl(data.publicUrl);
        };

        getFinalUrl();

    }, [imageData]);

    return { imageUrl, setImageData };
};