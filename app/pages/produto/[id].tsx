import { gql } from "@apollo/client";
import client from "../../apollo-client";

import Link from 'next/link'
import Image from 'next/image'

import Head from 'next/head'
import Header from '../../components/Header'
import styled from 'styled-components'

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  width: 100%;
`
const ImageWrapper = styled.div`
  border-radius: 4px;
  flex-shrink: 0;
  max-height: 580px;
  margin-right: 32px;
  overflow: hidden;
`
const Container = styled.section`
  display: flex;
  max-width: 1120px;
  width: 100%;
`
const BackButton = styled.a`
  align-items: center;
  background: transparent;
  border: none;
  color: #617480;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 28px;
`
const ReturnIcon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 10px;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 580px;
`
const Name = styled.h1`
  font-size: 32px;
  font-weight: 300;
  margin: 12px 0 4px 0;
`
const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
`
const Disclaimer = styled.div`
  font-size: 12px;
  margin-bottom: 58px;
`
const Description = styled.div`
  flex: 1;
  font-size: 14px;
  margin-top: 8px;
`
const AddToCartButton = styled.button`
  align-items: center;
  background: #115D8C;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: center;
  height: 44px;
  width: 100%;
`
const ButtonIcon = styled.span`
  align-items: center;
  display: inline-flex;
  margin-right: 16px;
`

export default function Product({ product }) {
  return (
    <div>
      <Head>
        <title>{product.name} - Caputeeno</title>
        <meta name="description" content="Compre camisas e acessórios!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main>
        <Container>
          <Link href="/">
            <BackButton>
              <ReturnIcon>
                <Image
                  src='/return.svg'
                  width={18}
                  height={18}
                />
              </ReturnIcon>
              Voltar
            </BackButton>
          </Link>
        </Container>
        <Container>
          <ImageWrapper>
            <Image
              src={product.image_url}
              height={580}
              width={640}
            />
          </ImageWrapper>
          <Details>
            <span>{product.category}</span>
            <Name>{product.name}</Name>
            <Price>{`R$ ${product.price_in_cents/100}`.replace('.',',')}</Price>
            <Disclaimer>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</Disclaimer>
            <span>DESCRIÇÃO</span>
            <Description>{product.description}</Description>
            <AddToCartButton>
              <ButtonIcon>
                <Image
                  src='/shopping-bag-w.svg'
                  height={24}
                  width={24}
                />
              </ButtonIcon>
              ADICIONAR AO CARRINHO
            </AddToCartButton>
          </Details>
        </Container>
      </Main>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const  { data, error } = await client.query({
    query: gql`
      query Product {
        Product(id: "${params.id}") {
          name
          description
          image_url
          category
          price_in_cents
          sales
        }
      }
    `,
  });

  return {
    props: {
      product: data.Product,
    },
  };
}