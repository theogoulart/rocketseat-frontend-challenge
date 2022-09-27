import PropTypes from "prop-types"

import Image from 'next/image'
import styled, { css } from 'styled-components'
import { useState } from 'react'

const Label = styled.button`
  align-items: center;
  display: flex;
  background: transparent;
  border: none;
  color: #737380;
  cursor: pointer;
  font-size: 14px;
  padding: 8px;
`
const Icon = styled.span`
  align-items: center;
  display: inline-flex;
  margin-left: 16px;
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

export default function Select({ sortField, sortOrder, setSortField, setSortOrder }) {
  const [ isOpen, setIsOpen ] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Label onClick={handleClick}>Organizar por <Icon><Image src='/angle-down.svg' width={12} height={6}/></Icon></Label>
      <Options isOpen={isOpen}>
        <Option onClick={() => { setSortField('created_at'); setSortOrder('asc'); setIsOpen(false) }}>Novidades</Option>
        <Option onClick={() => { setSortField('price_in_cents'); setSortOrder('desc'); setIsOpen(false) }}>Preço: Maior - Menor</Option>
        <Option onClick={() => { setSortField('price_in_cents'); setSortOrder('asc'); setIsOpen(false) }}>Preço: Menor - Maior</Option>
        <Option onClick={() => { setSortField('sales'); setSortOrder('asc'); setIsOpen(false) }}>Mais vendidos</Option>
      </Options>
    </Container>
  )
}

Select.propTypes = {
  sortField: PropTypes.string.isRequired,
  setSortField: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  setSortOrder: PropTypes.func.isRequired,
};