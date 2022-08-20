import { Card } from '@components'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <Title>✨ Next Template ✨</Title>
      <SubTitle>Made with Typescript and Styled-Components</SubTitle>
      <Wrapper>
        <LinkWrapper
          href="https://github.com/GMkonan/next-template"
          target="_blank"
        >
          <Card>
            <TitleLink>GitHub Repository</TitleLink>
            <Description>Repository for this template!</Description>
          </Card>
        </LinkWrapper>
        <LinkWrapper href="https://gmkonan.dev" target="_blank">
          <Card>
            <TitleLink>About Me</TitleLink>
            <Description>Check My Site to know more about me :)</Description>
          </Card>
        </LinkWrapper>
        <LinkWrapper href="https://styled-components.com/docs" target="_blank">
          <Card>
            <TitleLink>Styled-Components Docs</TitleLink>
            <Description>In case you are lost in style...</Description>
          </Card>
        </LinkWrapper>
        <LinkWrapper href="https://nextjs.org/docs" target="_blank">
          <Card>
            <TitleLink>NextJS Documentation</TitleLink>
            <Description>New in Next? Read the docs!</Description>
          </Card>
        </LinkWrapper>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
`

const Wrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 128px;
`

const Title = styled.h2`
  font-size: 2rem;
  color: var(--dark-blue);
`

const SubTitle = styled.h2`
  margin-top: 8px;
  font-size: 1.3rem;
  color: var(--gray);
`

const TitleLink = styled.h2`
  color: #000;
  font-size: 1.8rem;
`

const Description = styled.p`
  color: var(--gray);
  font-size: 1.1rem;
`

const LinkWrapper = styled.a`
  width: fit-content;
  height: fit-content;
  text-decoration: none;
  cursor: pointer;
  &:hover ${TitleLink} {
    color: var(--primary);
    transform: scale(1.05);
    transition: transform 0.3s;
  }
  &:hover ${Description} {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
`

export default Home
