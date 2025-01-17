import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import "../Home/Home.css"
import Content from '../../component/content/Content'
import QualifiedProducts from '../../component/qualified-p/QualifiedProducts'
const Home = () => {
  return (
    <>
    <div className='main conteiner'>
    <div className='main-conteiner conteiner'>
    <Navbar></Navbar>
    <Content>
    </Content>
    <QualifiedProducts></QualifiedProducts>
    </div>
    
    </div>
    
    
    </>
    
  )
}

export default Home