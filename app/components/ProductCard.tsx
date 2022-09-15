import Image from 'next/image';
import PropTypes, { InferProps } from "prop-types";
import styled from 'styled-components'

const Container = styled.div`
  background: #fff;
  border-radius: 4px;
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

export default function ProductCard({ product: { id, image_url, name, price_in_cents } }) {
  return (
    <Container>
      <Image
        src={image_url}
        width={256}
        height={300}
      />
      <Name>{name}</Name>
      <Price>R$ {price_in_cents/100}</Price>
    </Container>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price_in_cents: PropTypes.number.isRequired
  }).isRequired
};