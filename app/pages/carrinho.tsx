import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'
import styled from 'styled-components'

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
const Summary = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 24px;
`
const Product = styled.div`
  background: #fff;
  border-radius: 8px;
  display: flex;
  height: 211px;
  margin-bottom: 16px;
  overflow: hidden;
  width: 100%;
`
const ImageWrapper = styled.div`
  overflow: hidden;
  flex-shrink: 0;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px 32px;
  position: relative;
`
const ProductName = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  margin-bottom: 12px;
`
const Description = styled.p`
  flex: 1;
  font-size: 12px;
  margin: 0;
`
const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  bottom: 24px;
  right: 16px;
`
const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 16px;
  right: 16px;
`
const Quantity = styled.select`
  background: #F3F5F6;
  background-image: url('/angle-down.svg');
  background-size: 10px;
  background-position: 42px 16px;
  background-repeat: no-repeat;
  border: 1px solid #A8A8B3;
  border-radius: 8px;
  color: #737380;
  display: inline-block;
  font-size: 16px;
  padding: 11px 40px 10px 16px;
  position: absolute;
  bottom: 24px;
  left: 32px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:after {
    content: 'oi';
  }
`

export default function ShoppingCart() {
  const products = {
    "name": "Caneca de cerâmica rústica",
    "description": "Aut nihil corporis nulla temporibus ut id sed qui eos. Rerum et molestiae sequi tempora facere natus ratione totam. Autem dolorum eaque facilis et atque voluptatem itaque. Enim quia vel voluptas. Iure similique dolores. Dolor quis et explicabo recusandae.",
    "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
    "price_in_cents": 3925,
    "quantity": 1
  };

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
            <Summary>Total (3 produtos) <strong>R$161,00</strong></Summary>
            <Product>
              <ImageWrapper>
                <Image
                  src={products.image_url}
                  height={211}
                  width={232}
                />
              </ImageWrapper>
              <Details>
                <ProductName>{products.name}</ProductName>
                <Description>{products.description}</Description>
                <Price>{`R$ ${products.price_in_cents/100}`.replace('.',',')}</Price>
                <Quantity>
                  <option selected>1</option>
                </Quantity>
                <RemoveButton>
                  <Image
                    src='/trash-bin.svg'
                    height={24}
                    width={24}
                  />
                </RemoveButton>
              </Details>
            </Product>
          </Cart>
        </Container>
      </Main>
    </div>
  )
}
