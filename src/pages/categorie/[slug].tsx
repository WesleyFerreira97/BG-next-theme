import { GetStaticPaths, GetStaticProps } from 'next';
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

type CategoriesProps = {
  id: string;
  created_at: Date;
  title: string;
  slug: string;
}

// Single page query url props
function categorie(props: ScreenCategorieProps) {
  console.log(props, "props");

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



export const getStaticPaths: GetStaticPaths = async () => {
  async function getAllCategories() {
    const data = await supaDb
      .from('categories')
      .select();
    return data;
  }
  const res = await getAllCategories();

  const paths = res.data.map((item: CategoriesProps) => {
    return { params: { slug: item.slug } }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params, " query static props");

  const { data, error } = await supaDb
    .from("products")
    .select("*")
    .match({ product_categories: params.slug })

  return {
    props: {
      data: data
    },
    revalidate: 10
  }
}