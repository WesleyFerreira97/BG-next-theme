import { useSearchParams } from 'next/navigation';
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
  const idParams = useSearchParams()
  const id = idParams.get('id')
  console.log(props, 'props');

  const { selectResponse, selectResponseError } = useSelect<ProductProps | any>({
    select: ["*"],
    tableName: "products",
    match: { product_categories: id }
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

export const getStaticProps = async (pqp) => {
  console.log(pqp, "pqp");

  return {
    props: {
      data: "swdfs"
    }
  }
}

export default categorie