import Link from 'next/link'
import Image from 'next/image';

import PropTypes from "prop-types";
import styled from 'styled-components'
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
  @media (max-width: 768px) {
    flex-shrink: 1;
  }
  img {
    object-position: center;
    object-fit: cover;
  }
`

export default function ProductCard({ id, image_url, name, price_in_cents }) {
  return (
    <Link href={`/produto/${id}`}>
      <Container>
        <ImageWrapper>
          <Image
            alt=''
            src={image_url}
            width={256}
            height={300}
          />
        </ImageWrapper>
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