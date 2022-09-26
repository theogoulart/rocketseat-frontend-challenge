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

export default function Pagination({ pages, page, setPage }) {
  const pageJSX = [];
  for (let i=1;i<=pages;i++) {
    pageJSX.push(<Page key={i} onClick={() => setPage(i)} active={page === i}>{i}</Page>);
  }

  return (
    <Container>
      {pageJSX}
      {page !== 1 && <Page key={'prev'} onClick={() => setPage(page-1)} >&lt;</Page>}
      {page !== pages && <Page key={'next'} onClick={() => setPage(page+1)} last>&gt;</Page>}
    </Container>
  )
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};