import Link from 'next/link'

import PropTypes, { InferProps } from "prop-types";
import styled, { css } from 'styled-components'
import { formatPrice } from '../utils/tools'

const Container = styled.a`
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`
const Name = styled.div`
  border-bottom: 1px solid #DCE2E6;
  font-size: 16px;
  margin: 0 8px;
  padding: 8px 0;
`
const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
`
const ImageWrapper = styled.div`
  flex-shrink: 0;
  height: 300px;
  width: 256px;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-shrink: 1;
  }
  ${props => css`
    background-image: url('${props.imageUrl}');
    background-size: 330px 300px;
    background-position: -37px 0;
  `}
`

export default function ProductCard({ id, image_url, name, price_in_cents }) {
  return (
    <Link href={`/produto/${id}`}>
      <Container>
        <ImageWrapper imageUrl={image_url} />
        <Name>{name}</Name>
        <Price>R$ {formatPrice(price_in_cents)}</Price>
      </Container>
    </Link>
  )
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price_in_cents: PropTypes.number.isRequired
};