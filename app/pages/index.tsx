import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import client from "../apollo-client";
import styled from 'styled-components'

import { getCartProductCount } from '../utils/tools'

import Head from 'next/head'
import Product from '../components/ProductLink'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Select from '../components/Select'

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 0 16px;
  padding-bottom: 80px;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 12px;
  }
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
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
const FlexBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  const router = useRouter();
  const [ notifications, setNotifications ] = useState(0);

  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState({ q: '' });
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    setNotifications(getCartProductCount());
  }, []);

  useEffect(() => {
    const qsPage = parseInt(router.query.page?.toString());
    const qsFilter = { q: decodeURIComponent(router.query.search?.toString() || '') }
    if (router.query.category) {
      qsFilter['category'] = router.query.category?.toString();
    }

    setFilter(qsFilter);
    setPage(isNaN(qsPage) ? 0 : qsPage-1);
    setSortField(router.query.sort?.toString() || '');
    setSortOrder(router.query.order?.toString() || '');
  }, [router.query])

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

  if (error)
    console.error(error);

  const searchProducts = (input) => {
    if (input) {
      return router.push(`/?search=${encodeURIComponent(input)}`);
    }
    router.push('/');
  }

  const products = allProductsData?.allProducts;
  const count = _allProductsMetaData?._allProductsMeta.count;
  const hasResults = Boolean(count && products);

  return (
    <div>
      <Head>
        <title>Caputeeno Store</title>
        <meta name="description" content="Compre camisas e acessórios!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        query={filter.q}
        notifications={notifications}
        searchSubmitHandler={searchProducts}
      />
      <Main>
        <Container>
          <FlexBar>
            <Nav
              setPage={setPage}
              setFilter={setFilter}
              filter={filter}
            />
            <Select
              setSortField={setSortField}
              setSortOrder={setSortOrder}
            />
          </FlexBar>
          {loading && "Carregando..."}
          {!loading && !hasResults && "Nenhum resultado encontrado. Altere sua pesquisa ou procure em outra categoria :)"}
          {hasResults && 
          <>
            <Pagination
              pages={count/PER_PAGE}
              page={page}
              setPage={setPage}
            />
            <Grid>
              {products.map((item, i) => (<Product key={i} {...item} />))}
            </Grid>
            <Pagination
              pages={count/PER_PAGE}
              page={page}
              setPage={setPage}
            />
          </>
          }
        </Container>
      </Main>
      <footer>
      </footer>
    </div>
  )
}
