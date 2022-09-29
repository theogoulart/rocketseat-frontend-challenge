import PropTypes from "prop-types"
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

export default function Nav({ setPage, setFilter, filter }) {
  return (
    <Container>
      <Link onClick={() => { setFilter({ q: filter.q }); setPage(0) } } active={ !filter.hasOwnProperty('category') }>TODOS OS PRODUTOS</Link>
      <Link onClick={() => { setFilter({ q: filter.q, category: "t-shirts" }); setPage(0) } } active={filter.category === "t-shirts"}>CAMISETAS</Link>
      <Link onClick={() => { setFilter({ q: filter.q, category: "mugs" }); setPage(0) } } active={filter.category === "mugs"}>CANECAS</Link>
    </Container>
  )
}

Nav.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};