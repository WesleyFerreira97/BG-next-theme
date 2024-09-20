import { Container } from '@nextui-org/react';
import { Grid } from '@theme/Layout/Container';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { CardOutsideInfo } from 'src/components/Cards/CardOutsideInfo';
import { GridProductWrap } from 'src/components/widgets/GridProducts/styles';
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

  return (
    <div>
      <GridProductWrap>
        <Container sm>
          {/* <HeaderGridProducts /> */}
          <Grid columns={{ xs: 2, sm: 3 }} gap={{ xs: 1, sm: 2 }}>
            {props.currentProducts &&
              props.currentProducts.map((product, index) => (
                <Link
                  href={`/single?productId=${product.id}`}
                  key={index}
                >
                  <Grid.Item>
                    <CardOutsideInfo
                      cardInfo={{
                        ...product,
                      }}
                      cardStyle={{
                        aspectRatio: "3/4",
                      }}
                    />
                  </Grid.Item>
                </Link>
              ))}
          </Grid>
        </Container>
      </GridProductWrap>
    </div>
  )
}

export default categorie

async function getAllCategories() {
  const data = await supaDb
    .from('categories')
    .select();
  return data;
}

export const getStaticPaths: GetStaticPaths = async () => {
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
  const allCategories = await getAllCategories();

  const { data, error } = await supaDb
    .from("products")
    .select("*")
    .match({ product_categories: params.slug })

  return {
    props: {
      currentProducts: data,
      allCategories: allCategories.data
    },
    revalidate: 10
  }
}