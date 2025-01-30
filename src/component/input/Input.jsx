import React from 'react'
import "../input/Input.css"
const Input = ({clas,type,id,...props}) => {
  return (
    <input
        type={type}
        className={clas}
        id={id}
       
        {...(type==="search" ? {placeholder: "Buscar producto"}:{}) } 
    ></input>
  )
}

export default Input