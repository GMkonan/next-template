import React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: React.ReactNode
  width?: number
  height?: number
}

const Card = ({ children, width = 450, height = 150 }: CardProps) => {
  return (
    <Container
      style={
        {
          '--width': width + 'px',
          '--height': height + 'px',
        } as React.CSSProperties
      }
    >
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: var(--width);
  height: var(--height);
  padding: 24px;
  border: 2px solid var(--gray);
  border-radius: 4px;
`

export default Card
