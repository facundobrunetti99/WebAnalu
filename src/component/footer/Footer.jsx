import React from 'react'
import "../footer/Footer.css"



const Footer = () => {

  const functionDiv = () => {
    const elements = [];
    for (let i = 0; i < 3; i++) {
      elements.push(
        <div key={i} className="col">
          {i}
        </div>
      );
    }
    return elements;
  };
  return (
    <footer className='footer-container coteiner'>
        <div className="conteiner conteiner-items-footer row">
         {functionDiv()}
        </div>
    </footer>
  )
}

export default Footer