import Image from 'next/image';
import PropTypes, { InferProps } from "prop-types";
import styled from 'styled-components'
import { formatPrice } from '../utils/tools'

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
const Name = styled.div`
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
const QuantitySelect = styled.select`
  background: #F3F5F6;
  background-image: url('/angle-down.svg');
  background-size: 10px;
  background-position: 42px 21px;
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
`

export default function CartProduct({ id, quantity, description, image_url, name, price_in_cents, quantityChangeHandler, removeProductHandler }) {
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
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Price>R$ {formatPrice(price_in_cents * quantity)}</Price>
      <QuantitySelect
        onChange={(e) => {quantityChangeHandler(id, e.target.value)}}
        defaultValue={quantity}
      >
          {[...(Array(10))].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
      </QuantitySelect>
      <RemoveButton
        onClick={() => removeProductHandler(id)}
      >
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
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price_in_cents: PropTypes.number.isRequired,
  quantityChangeHandler: PropTypes.func.isRequired,
  removeProductHandler: PropTypes.func.isRequired,
};