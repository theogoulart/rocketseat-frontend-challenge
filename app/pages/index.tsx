import { gql } from "@apollo/client";
import client from "../apollo-client";
import Link from 'next/link'

import Head from 'next/head'
import Product from '../components/ProductLink'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Select from '../components/Select'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 34px;
  padding-bottom: 80px;
  width: 100%;
`
const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1120px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 32px;
  row-gap: 24px;
  margin-top: 36px;
  margin-bottom: 72px;
`
const FlexBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  width: 100%;
`

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Caputeeno Store</title>
        <meta name="description" content="Compre camisas e acessórios!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main>
        <Container>
          <FlexBar>
            <Nav/>
            <Select/>
          </FlexBar>
          <Pagination/>
          <Grid>
            {products.map((item, i) => (<Product key={i} product={item} />))}
          </Grid>
          <Pagination/>
        </Container>
      </Main>
      <footer>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const  { data, error } = await client.query({
    query: gql`
      query products {
        allProducts(perPage: 12, page: 1) {
          id
          image_url
          name
          price_in_cents
        }
      }
    `,
  });

  return {
    props: {
      products: data.allProducts,
    },
  };
}