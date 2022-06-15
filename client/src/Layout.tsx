import React from 'react'
import Container from '@mui/material/Container'

import './App.css'
import ResponsiveAppBar from './components/AppBar'

type Props = {
  children: JSX.Element
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg">{children}</Container>
    </>
  )
}

export default Layout
