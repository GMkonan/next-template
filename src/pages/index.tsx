import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <Title>NextJS Template ✨</Title>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 64px;
`

const Title = styled.h2`
  font-size: 2rem;
  color: var(--dark-blue);
`

export default Home
