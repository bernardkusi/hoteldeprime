import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children,togglenav,navopen}) => {
  return (
    <>
    <Nav togglenav={togglenav} navopen={navopen}/>
       <main>
        {children}
        </main> 
    <Footer/>
    </>
  )
}

export default Layout