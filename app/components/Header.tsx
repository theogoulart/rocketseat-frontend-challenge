import PropTypes from "prop-types"
import Link from 'next/link'
import { useState } from "react"
import Image from 'next/image'
import styled, { css } from 'styled-components'

const Container = styled.header`
  background: #FFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
  width: 100%;
`
const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  max-width: 1120px;
  width: 100%;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`
const Logo = styled.a`
  color: #5D5D6D;
  cursor: pointer;
  flex: 1;
  font-family: Saira Stencil One;
  font-size: 40px;
`
const SearchWrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    margin-top: 8px;
    width: 100%;
  }
`
const Search = styled.input`
  background: #F3F5F6;
  border-radius: 8px;
  border: none;
  height: 42px;
  padding: 10px 16px;
  width: 352px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Submit = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 4px;
  top: 0;
  height: 42px;
  width: 42px;
`
const ShoppingCart = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-left: 16px;
  position: relative;
  height: 42px;
  width: 42px;
  @media (max-width: 768px) {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`
const Notifications = styled.div`
  align-items: center;
  background: #DE3838;
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 10px;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 17px;
  width: 17px;
`

export default function Header({
  query,
  notifications,
  searchSubmitHandler
}) {
  const [ input, setInput ] = useState(query);
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      searchSubmitHandler(input);
    }
  };

  return (
    <Container>
      <Inner>
        <Link href="/">
          <Logo>
            capputeeno
          </Logo>
        </Link>
        <SearchWrapper>
          <Search
            onKeyDown={handleKeyDown}
            onChange={e => setInput(e.target.value)}
            placeholder='Procurando por algo específico?'
            value={input}
          />
          <Submit onClick={() => searchSubmitHandler(input)}>
            <Image
              src='/magnifier.svg'
              width={24}
              height={24}
            />
          </Submit>
        </SearchWrapper>
        <Link href="/carrinho">
          <ShoppingCart>
            <Image
              src='/shopping-bag.svg'
              width={24}
              height={24}
            />
            <Notifications>
              {notifications}
            </Notifications>
          </ShoppingCart>
        </Link>
      </Inner>
    </Container>
  )
}

Header.propTypes = {
  query: PropTypes.string,
  notifications: PropTypes.number.isRequired,
  searchSubmitHandler: PropTypes.func.isRequired,
};