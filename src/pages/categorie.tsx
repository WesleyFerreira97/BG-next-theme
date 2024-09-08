import React, { useEffect } from 'react'
import { useSelect } from 'src/hooks/useSelect'
import { ProductProps } from 'src/types/product';

type ScreenCategorieProps = {
  categorieName?: string
}

// Single page query url props
export default function categorie(props: ScreenCategorieProps) {
  const { selectResponse, selectResponseError } = useSelect<ProductProps>({
    select: ["*"],
    tableName: "products",
    match: { product_categories: props.categorieName || "shorts" }
  })
  const { selectResponse: categoriesResponse, selectResponseError: categoriesError } = useSelect<any>({
    select: ["title", "slug"],
    tableName: "categories",
  })

  useEffect(() => {
    console.log(categoriesResponse, "categoriesResponse");
    console.log(categoriesError, "categoriesError");

  }, [categoriesResponse, categoriesError])
  return (
    <div>categorie

      {selectResponse &&
        selectResponse.map((item, index) => (
          <h1>
            {item.title}
          </h1>
        ))}
    </div>
  )
}