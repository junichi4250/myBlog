import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

type Props = {
  children: React.ReactNode
}

const Layouts: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layouts
