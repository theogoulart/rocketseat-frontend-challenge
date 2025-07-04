import { useEffect, useState } from "react"
import { gql } from "@apollo/client"
import { useRouter } from "next/router"
import styled from 'styled-components'
import Image from 'next/image'
import client from "../../apollo-client"

import {
  formatPrice,
  getCartProducts,
  setCartProducts,
  getCartProductCount, 
  translate
} from '../../utils/tools'

import Head from 'next/head'
import Header from '../../components/Header'

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  padding-bottom: 80px;
  width: 100%;
`
const ImageWrapper = styled.div`
  border-radius: 4px;
  flex-shrink: 0;
  max-height: 580px;
  margin-right: 32px;
  overflow: hidden;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
  @media (max-width: 1024px) {
    max-width: 420px;
    align-self: center;
  }
`
const Container = styled.section`
  display: flex;
  max-width: 1120px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
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
  margin-top: 32px;
  width: 100%;
`
const ButtonIcon = styled.span`
  align-items: center;
  display: inline-flex;
  margin-right: 16px;
`

export default function Product({ product }) {
  const router = useRouter();
  const [ notifications, setNotifications ] = useState(0);
  useEffect(() => {
    setNotifications(getCartProductCount());
  }, []);

  const addProductToCart = () => {
    const products = getCartProducts();
    if (products.hasOwnProperty(product.id)) {
      products[product.id].quantity++;
    } else {
      products[product.id] = product;
      products[product.id].quantity = 1;
    }

    setCartProducts(products);
    setNotifications(notifications+1);
  }

  const searchProducts = (input) => {
    input && router.push(`/?search=${encodeURIComponent(input)}`);
  }

  return (
    <div>
      <Head>
        <title>{product.name} - Caputeeno</title>
        <meta name="description" content="Compre camisas e acessórios!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        searchSubmitHandler={searchProducts}
        notifications={notifications || 0}
      />
      <Main>
        <Container>
          <BackButton onClick={ () => router.back() }>
            <ReturnIcon>
              <Image
                alt=''
                src='/return.svg'
                width={18}
                height={18}
              />
            </ReturnIcon>
            Voltar
          </BackButton>
        </Container>
        <Container>
          <ImageWrapper>
            <Image
              alt={`Foto de ${product.name}`}
              src={product.image_url}
              height={580}
              width={640}
            />
          </ImageWrapper>
          <Details>
            <span>{translate(product.category)}</span>
            <Name>{product.name}</Name>
            <Price>R$ {formatPrice(product.price_in_cents)}</Price>
            <Disclaimer>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
            </Disclaimer>
            <span>DESCRIÇÃO</span>
            <Description>{product.description}</Description>
            <AddToCartButton onClick={ () => addProductToCart() }>
              <ButtonIcon>
                <Image
                  alt=''
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
        product(id: "${params.id}") {
          id
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
      product: data.product,
    },
  };
}