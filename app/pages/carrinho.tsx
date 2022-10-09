import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import { formatPrice, getCartProducts, getCartProductCount, setCartProducts } from '../utils/tools'

import Head from 'next/head'
import Header from '../components/Header'
import Product from '../components/CartProduct'
import Checkout from '../components/Checkout'

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  padding-bottom: 80px;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  max-width: 1120px;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction column;
  }
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
  const router = useRouter();
  const [ products, setProducts ] = useState([]);
  const [ notifications, setNotifications ] = useState(0);

  useEffect(() => {
    setNotifications(getCartProductCount());
    setProducts(getCartProducts());
  }, []);

  const [ totalProducts, subtotalInCents ] = Object.values(products)
    .reduce((acc, p) => [acc[0] + p.quantity, acc[1] + p.price_in_cents * p.quantity], [0, 0]);
  const shippingPriceInCents = subtotalInCents > 90000 ? 0 : 4000;

  const quantityChangeHandler = (id, quantity) => {
    const newProducts = JSON.parse(JSON.stringify(products));
    const difference = parseInt(quantity) - newProducts[id].quantity;
    newProducts[id].quantity = parseInt(quantity);
    setProducts(newProducts);
    setCartProducts(newProducts);
    setNotifications(notifications + difference);
  }
  
  const removeProductHandler = (id) => {
    const newProducts = JSON.parse(JSON.stringify(products));
    setNotifications(notifications - products[id].quantity);
    delete newProducts[id];
    setProducts(newProducts);
    setCartProducts(newProducts);
  }

  const searchProducts = (input) => {
    input && router.push(`/?search=${encodeURIComponent(input)}`);
  }

  return (
    <div>
      <Head>
        <title>Caputeeno Store</title>
        <meta name="description" content="Compre camisas e acessórios!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        notifications={notifications}
        searchSubmitHandler={searchProducts}
      />
      <Main>
        <Container>
          <Cart>
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
            <Title>SEU CARRINHO</Title>
            <Total>Total ({totalProducts} produtos) <strong>R${formatPrice(subtotalInCents)}</strong></Total>
            {Object.values(products).map((p, i) => 
              <Product
                quantityChangeHandler={quantityChangeHandler}
                key={p.id}
                {...p}
                removeProductHandler={removeProductHandler}
              />
            )}
          </Cart>
          <Checkout
            shippingPriceInCents={shippingPriceInCents}
            subtotalInCents={subtotalInCents}
          />
        </Container>
      </Main>
    </div>
  )
}
