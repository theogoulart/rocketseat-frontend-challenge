import styled, { css } from 'styled-components'
import { useState } from 'react'

const Label = styled.button`
  background: transparent;
  border: none;
  color: #737380;
  cursor: pointer;
  font-size: 14px;
  padding: 8px;
`
const Container = styled.div`
  position: relative;
`
const Options = styled.div`
  display: none;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 6px 0;
  position: absolute;
  top: 36px;
  right: 0;
  width: 176px;
  z-index: 100;
  ${props => props.isOpen && css`
    display: flex;
  `}
`
const Option = styled.div`
  color: #737380;
  padding: 3px 16px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #DEDEDE;
  }
`

export default function Select() {
  const [ isOpen, setIsOpen ] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Label onClick={handleClick}>Organizar por &#8964;</Label>
      <Options isOpen={isOpen}>
        <Option>Novidades</Option>
        <Option>Preço: Maior - Menor</Option>
        <Option>Preço: Menor - Maior</Option>
        <Option>Mais vendidos</Option>
      </Options>
    </Container>
  )
}