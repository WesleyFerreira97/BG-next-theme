import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelect } from 'src/hooks/useSelect'
import { supaDb } from 'src/services/supadb';
import { ProductProps } from 'src/types/product';

type ScreenCategorieProps = {
  query: {
    id: string
  }
}

// Single page query url props
function categorie(props: ScreenCategorieProps) {
  console.log(props);

  // const { selectResponse: categoriesResponse, selectResponseError: categoriesError } = useSelect<any>({
  //   select: ["title", "slug"],
  //   tableName: "categories",
  // })
  // console.log(props);

  return (
    <div>categorie
      {/* 
      {selectResponse &&
        selectResponse.map((item, index) => (
          <h1>
            {item.title}
          </h1>
        ))} */}
    </div>
  )
}
// getStaticProps
// export const getInitialProps = async (pqp) => {
categorie.getInitialProps = async ({ query }: any) => {

  const { data, error } = await supaDb
    .from("products")
    .select("*")
    .limit(1)
    .match({ id: query.id })

  if (!data) return;
  console.log(data, "data");

  return {
    props: {
      data: data
    }
  }
}

export default categorie