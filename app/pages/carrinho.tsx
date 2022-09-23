import styled from 'styled-components'
import Image from 'next/image'

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
  const products = [
    {
      "name": "Caneca de cerâmica rústica",
      "description": "Aut nihil corporis nulla temporibus ut id sed qui eos. Rerum et molestiae sequi tempora facere natus ratione totam. Autem dolorum eaque facilis et atque voluptatem itaque. Enim quia vel voluptas. Iure similique dolores. Dolor quis et explicabo recusandae.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
      "price_in_cents": 3925,
      "quantity": 1
    },
    {
      "name": "Caneca de cerâmica rústica",
      "description": "Aut nihil corporis nulla temporibus ut id sed qui eos. Rerum et molestiae sequi tempora facere natus ratione totam. Autem dolorum eaque facilis et atque voluptatem itaque. Enim quia vel voluptas. Iure similique dolores. Dolor quis et explicabo recusandae.",
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
      "price_in_cents": 3925,
      "quantity": 1
    }
  ];


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
            {products.map(p => <Product {...p} />)}
          </Cart>
          <Checkout shippingPriceInCents={4000} subtotalInCents={products.reduce((acc, p) => acc + p.price_in_cents, 0)}/>
        </Container>
      </Main>
    </div>
  )
}
