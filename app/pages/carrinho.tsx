import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { getCartProducts, getCartProductCount } from '../utils/tools'

import Head from 'next/head'
import Header from '../components/Header'
import Product from '../components/CartProduct'
import Checkout from '../components/Checkout'

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  max-width: 1120px;
  width: 100%;
`
const Cart = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 736px;
`
const BackButton = styled.div`
  align-self: flex-start;
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
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 6px;
`
const Total = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 24px;
`

export default function ShoppingCart() {
  const [ products, setProducts ] = useState([]);
  const [ notifications, setNotifications ] = useState(0);

  useEffect(() => {
    setNotifications(getCartProductCount());
    setProducts(getCartProducts());
  }, []);

  const subtotalInCents = Object.values(products).reduce((acc, p) => acc + p.price_in_cents, 0);
  const shippingPriceInCents = subtotalInCents > 90000 ? 0 : 4000;
  return (
    <div>
      <Head>
        <title>Caputeeno Store</title>
        <meta name="description" content="Compre camisas e acessórios!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header notifications={notifications} searchSubmitHandler={ (input) => console.log(input) }/>
      <Main>
        <Container>
          <Cart>
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
            <Title>SEU CARRINHO</Title>
            <Total>Total (3 produtos) <strong>R$161,00</strong></Total>
            {Object.values(products).map((p, i) => <Product key={i} {...p} />)}
          </Cart>
          <Checkout shippingPriceInCents={shippingPriceInCents} subtotalInCents={subtotalInCents}/>
        </Container>
      </Main>
    </div>
  )
}
