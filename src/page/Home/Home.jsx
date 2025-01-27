import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import "../Home/Home.css"
import Footer from '../../component/footer/Footer'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className='main conteiner'>
    <div className='main-conteiner conteiner'>
    <Navbar></Navbar>
    <div>
    <Outlet/>
    </div>
    
    <Footer></Footer>
    </div>
    </div>
    </>
    
  )
}

export default Home