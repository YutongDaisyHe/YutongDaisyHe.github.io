import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: left;
`

const Layout = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default Layout
