import PropTypes from "prop-types"
import styled from 'styled-components'
import { formatPrice } from '../utils/tools'

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
  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }
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
const Link = styled.a`
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

export default function Checkout({
  subtotalInCents,
  shippingPriceInCents
}) {
  const totalInCents = subtotalInCents + shippingPriceInCents;
  return (
    <Container>
      <Summary>
        <Title>RESUMO DO PEDIDO</Title>
        <Line><span>Subtotal de produtos</span><span>R$ {formatPrice(subtotalInCents)}</span></Line>
        <Line><span>Entrega</span><span>{shippingPriceInCents === 0 ? 'grátis' : `R$ ${formatPrice(shippingPriceInCents)}`}</span></Line>
        <Total><span>Total</span><span>R$ {formatPrice(totalInCents)}</span></Total>
        <CheckoutButton>FINALIZAR A COMPRA</CheckoutButton>
      </Summary>
      <Link href="#">AJUDA</Link>
      <Link href="#">REEMBOLSOS</Link>
      <Link href="#">ENTREGAS E FRETES</Link>
      <Link href="#">TROCAS E DEVOLUÇÕES</Link>
    </Container>
  )
}

Checkout.propTypes = {
  subtotalInCents: PropTypes.number.isRequired,
  shippingPriceInCents: PropTypes.number.isRequired
};