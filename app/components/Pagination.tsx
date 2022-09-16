import styled, { css } from 'styled-components'

const Container = styled.div`
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

export default function Pagination() {
  return (
    <Container>
      <Page active>1</Page>
      <Page>2</Page>
      <Page>3</Page>
      <Page>4</Page>
      <Page>5</Page>
      <Page>&lt;</Page>
      <Page last>&gt;</Page>
    </Container>
  )
}