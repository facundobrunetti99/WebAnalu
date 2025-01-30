import React from 'react'
import "../input/Input.css"
const Input = ({clas,type,id,onChange,...props}) => {
  return (
    <input
        type={type}
        className={clas}
        id={id}
        onChange={onChange}
        {...(type==="search" ? {placeholder: "Buscar producto"}:{}) } 
    ></input>
  )
}

export default Input