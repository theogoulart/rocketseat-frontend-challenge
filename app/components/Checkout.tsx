import PropTypes, { InferProps } from "prop-types";
import styled from 'styled-components'

const Container = styled.section`
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  height: 700px;
  margin-top: 40px;
  margin-left: 32px;
  padding: 16px 24px 24px 24px;
  width: 352px;
`
const Summary = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 17px;
`
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`
const Total = styled.div`
  border-top: 1px solid #DCE2E6;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  margin-top: 29px;
  padding-top: 8px;
`
const Link = styled.div`
  color: #737380;
  font-size: 14px;
  margin-top: 12px;
  text-decoration-line: underline;
`
const CheckoutButton = styled.button`
  align-items: center;
  background: #51B853;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 44px;
  justify-content: center;
  margin-top: 40px;
  width: 303px;
`

const formatPrice = (priceInCents) => {
  return `${(priceInCents/100).toFixed(2)}`.replace('.', ',');
}

export default function Checkout({subtotalInCents, shippingPriceInCents}) {
  const totalInCents = subtotalInCents + shippingPriceInCents;
  return (
    <Container>
      <Summary>
        <Title>RESUMO DO PEDIDO</Title>
        <Line><span>Subtotal de produtos</span><span>R$ {formatPrice(subtotalInCents)}</span></Line>
        <Line><span>Entrega</span><span>R$ {formatPrice(shippingPriceInCents)}</span></Line>
        <Total><span>Total</span><span>R$ {formatPrice(totalInCents)}</span></Total>
        <CheckoutButton>FINALIZAR A COMPRA</CheckoutButton>
      </Summary>
      <Link>AJUDA</Link>
      <Link>REEMBOLSOS</Link>
      <Link>ENTREGAS E FRETES</Link>
      <Link>TROCAS E DEVOLUÇÕES</Link>
    </Container>
  )
}

Checkout.propTypes = {
  subtotalInCents: PropTypes.number.isRequired,
  shippingPriceInCents: PropTypes.number.isRequired
};