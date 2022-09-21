import Image from 'next/image'
import styled, { css } from 'styled-components'

const Container = styled.header`
  background: #FFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80px;
  width: 100%;
`
const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  max-width: 1120px;
  width: 100%;
`
const Logo = styled.div`
  color: #5D5D6D;
  flex: 1;
  font-family: Saira Stencil One;
  font-size: 40px;
`
const SearchWrapper = styled.div`
  position: relative;
`
const Search = styled.input`
  background: #F3F5F6;
  border-radius: 8px;
  border: none;
  height: 42px;
  padding: 10px 16px;
  width: 352px;
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
const ShoppingCart = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-left: 16px;
  position: relative;
  height: 42px;
  width: 42px;
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

export default function Header() {
  return (
    <Container>
      <Inner>
        <Logo>capputeeno</Logo>
        <SearchWrapper>
          <Search placeholder='Procurando por algo específico?' />
          <Submit>
            <Image
              src='/magnifier.svg'
              width={24}
              height={24}
            />
          </Submit>
        </SearchWrapper>
        <ShoppingCart>
          <Image
            src='/shopping-bag.svg'
            width={24}
            height={24}
          />
          <Notifications>
            2
          </Notifications>
        </ShoppingCart>
      </Inner>
    </Container>
  )
}