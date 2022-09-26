import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Link = styled.button`
  background: none;
  border: none;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  cursor: pointer;
  color: #737380;
  font-size: 16px;
  margin-right: 40px;
  padding: 4px 0;
  ${props => props.active && css`
    border-bottom: 4px solid #FFA585;
    color: #41414D;
    font-weight: bold;
  `}
`

export default function Nav() {
  return (
    <Container>
      <Link active>TODOS OS PRODUTOS</Link>
      <Link>CAMISETAS</Link>
      <Link>CANECAS</Link>
    </Container>
  )
}