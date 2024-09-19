import { GetStaticProps } from 'next';
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

export const getStaticPaths = async (ctx) => {
  console.log(ctx, " Context");

  return {
    paths: [
      { params: { id: "ctx.id" } },
    ],
    fallback: true
  }
}

export const getStaticProps = (async (context) => {
  console.log(context, " Context static props");

  return { props: { repo: "fdfs" } }
})

// export async function getStaticProps(query: GetStaticProps) {
//   console.log(query);

//   // const { data, error } = await supaDb
//   //   .from("products")
//   //   .select("*")
//   //   .limit(1)
//   //   .match({ id: query.id })

//   return {
//     props: {
//       data: 'data'
//     }
//   }
// }

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

export default categorie