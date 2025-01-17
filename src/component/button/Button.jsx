import React from 'react'
import "../button/Button.css"
const Button = ({type,clas,content}) => {
  return (
    <button type={type} className={clas} >
        {content}

    </button>
  )
}

export default Button