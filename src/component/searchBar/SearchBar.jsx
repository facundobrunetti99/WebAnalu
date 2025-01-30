import React from 'react'
import "../searchBar/SearchBar.css"
const SearchBar = () => {
  return (
    <div className="search-bar">
    <div className="button-search">
      <div className="conteiner-checkbox">
      <input
        class="form-control me-2 "
        type="search"
        placeholder="Buscar producto"
        aria-label="Search"
      ></input>
      
      <input 
        className="input-check-box"
        type="checkbox"
        id="tortas"
      ></input>
      <label htmlFor="">Tortas</label>
      <input 
        className="input-check-box"
        type="checkbox"
        id="box"
      ></input>
      <label htmlFor="">Box</label>
      <input 
        className="input-check-box"
        type="checkbox"
        id="Tartas"
      ></input>
      <label htmlFor="">Tartas</label>
      <input 
        className="input-check-box"
        type="checkbox"
        id="paletas"
      ></input>
      <label htmlFor="">Paletas</label>
      </div>
     
    </div>
  </div>
  )
}

export default SearchBar