import React, { useEffect } from 'react'
import { useSelect } from 'src/hooks/useSelect'
import { ProductProps } from 'src/types/product';

type ScreenCategorieProps = {
  query: {
    id: string
  }
}

// Single page query url props
function categorie(props: ScreenCategorieProps) {
  console.log(props.query?.id, " dentro do componente props");

  const { selectResponse, selectResponseError } = useSelect<ProductProps>({
    select: ["*"],
    tableName: "products",
    // match: { product_categories: id || "shorts" }
  })
  const { selectResponse: categoriesResponse, selectResponseError: categoriesError } = useSelect<any>({
    select: ["title", "slug"],
    tableName: "categories",
  })

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

categorie.getStaticProps = ({ query }: ScreenCategorieProps) => {
  const { id } = query;

  if (!id) return;

  return {
    id: id
  }
}

export default categorie