import Image from 'next/image';
import PropTypes, { InferProps } from "prop-types";
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 4px;
`

const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
`

export default function ProductCard({ product: { id, image_url, name, price_in_cents } }) {
  return (
    <Container>
      <Image
        src={image_url}
        width={256}
        height={300}
      />
      <div>
        {name}
      </div>
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