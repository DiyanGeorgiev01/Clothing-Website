import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color:#7296cc;// #fadca4;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Exclusive drop! Free shipping for orders over 200$.
    </Container>
  )
}

export default Announcement
