import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";
import Link from 'next/link'

import Head from 'next/head'
import Product from '../components/ProductLink'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Select from '../components/Select'
import styled from 'styled-components'
import { useState } from "react";

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 80px;
  width: 100%;
`
const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1120px;
  width: 100%;
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

const FETCH_PRODUCT_META = gql`
query ProductMeta($filter: ProductFilter!) {
  _allProductsMeta(filter: $filter) {
    count
  }
}
`;
const FETCH_PRODUCTS = gql`
query Products($perPage: Int!, $page: Int!, $filter: ProductFilter!, $sortField: String!, $sortOrder: String!) {
  allProducts(perPage: $perPage, page: $page, , filter: $filter, sortField: $sortField, sortOrder: $sortOrder) {
    id
    image_url
    name
    price_in_cents
  }
}
`;
const PER_PAGE = 12;

export default function Home() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const { data: _allProductsMetaData, loading: loadingMeta } = useQuery(FETCH_PRODUCT_META, {
    client: client,
    variables: {
      filter: filter,
    }
  });
  const { data: allProductsData, loading, error } = useQuery(
    FETCH_PRODUCTS,
    {
      client: client,
      variables: {
        perPage: PER_PAGE,
        page: page,
        filter: filter,
        sortField: sortField,
        sortOrder: sortOrder,
      }
    }
  );

  const products = allProductsData?.allProducts;
  const count = _allProductsMetaData?._allProductsMeta.count;

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
            <Nav setFilter={setFilter} filter={filter} />
            <Select sortField={sortField} setSortField={setSortField} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
          </FlexBar>
          {count && <Pagination pages={count/PER_PAGE} page={page} setPage={setPage}/>}
          <Grid>
            {products && products.map((item, i) => (<Product key={i} {...item} />))}
          </Grid>
          {count && <Pagination pages={Math.trunc(count/PER_PAGE)} page={page} setPage={setPage}/>}
        </Container>
      </Main>
      <footer>
      </footer>
    </div>
  )
}
