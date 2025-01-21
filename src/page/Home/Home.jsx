import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import "../Home/Home.css"
import Content from '../../component/content/Content'
import QualifiedProducts from '../../component/qualified-p/QualifiedProducts'
import Footer from '../../component/footer/Footer'
const Home = () => {
  return (
    <>
    <div className='main conteiner'>
    <div className='main-conteiner conteiner'>
    <Navbar></Navbar>
    <Content>
    </Content>
    <QualifiedProducts></QualifiedProducts>
    <Footer></Footer>
    </div>
    </div>
    </>
    
  )
}

export default Home