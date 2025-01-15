import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import "../Home/Home.css"
import Content from '../../component/content/Content'
const Home = () => {
  return (
    <>
    <div className='main'>
    <div className='main-conteiner'>
    <Navbar></Navbar>
    <Content>


    </Content>
    </div>
    
    </div>
    
    
    </>
    
  )
}

export default Home