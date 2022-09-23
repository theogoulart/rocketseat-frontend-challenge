import Image from 'next/image';
import PropTypes, { InferProps } from "prop-types";
import styled from 'styled-components'


const Container = styled.div`
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

export default function CartProduct({ description, image_url, name, price_in_cents }) {
  return (
    <Container>
      <ImageWrapper>
      <Image
          src={image_url}
          height={211}
          width={232}
      />
      </ImageWrapper>
      <Details>
      <ProductName>{name}</ProductName>
      <Description>{description}</Description>
      <Price>{`R$ ${price_in_cents/100}`.replace('.',',')}</Price>
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
    </Container>
  )
}

CartProduct.propTypes = {
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price_in_cents: PropTypes.number.isRequired
};