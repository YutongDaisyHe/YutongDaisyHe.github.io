import React from 'react'
import styled from 'styled-components'
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = styled.div`
  margin: 0;
  padding: 0;
  text-align: left;
`

const Layout = ({ children }) => (
    <Container>
        <Navbar/>
        {children}
        <Footer/>
    </Container>
)

export default Layout
