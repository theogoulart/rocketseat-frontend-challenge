import PropTypes from "prop-types"
import styled, { css } from 'styled-components'

const Container = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
`
const Page = styled.button`
  align-items: center;
  background: #E9E9F0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  height: 32px;
  justify-content: center;
  margin-right: 6px;
  width: 32px;
  ${props => props.active && css`
    background: #F5F5FA;
    border: 1px solid #FFA585;
    color: #FFA585;
    font-weight: bold;
  `}
  ${props => props.last && css`
    margin-right: 0;
  `}
`

export default function Pagination({ page, setPage }) {
  return (
    <Container>
      <Page onClick={() => setPage(1)} active={page === 1}>1</Page>
      <Page onClick={() => setPage(2)} active={page === 2}>2</Page>
      <Page onClick={() => setPage(3)} active={page === 3}>3</Page>
      <Page onClick={() => setPage(4)} active={page === 4}>4</Page>
      <Page>&lt;</Page>
      <Page last>&gt;</Page>
    </Container>
  )
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};