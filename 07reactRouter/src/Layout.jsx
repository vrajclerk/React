import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom' // it creates layout as base & header and foot will be same and inside content will be changed

function Layout(){
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
        
    </>
  )
}

export default Layout