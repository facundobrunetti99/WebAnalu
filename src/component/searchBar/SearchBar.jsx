import "../searchBar/SearchBar.css";
import Input from "../input/Input";
import { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [searchTherm,setsearchTherm]=useState("");
    const[filters,setFilters]=useState([]);

    const handleSearchChange =(e)=>{
        const value =e.target.value.toLowerCase();
        setsearchTherm(value);
        onSearch(value,filters);
       
    }

    const handleFilterChange = (e) => {
        const { id, checked } = e.target;
        const updatedFilters = checked
          ? [...filters, id]
          : filters.filter((filter) => filter !== id);
    
        setFilters(updatedFilters);
        onSearch(searchTherm, updatedFilters);
      };

  return (
    <div className="search-bar">
      <div className="button-search">
        <div className="conteiner-checkbox">
          <Input
            clas={"form-control me-2"}
            type={"search"}
            id={"search"}
            onChange={handleSearchChange}
          ></Input>
          <div className="item-checkbox">
            <Input
              clas={"input-check-box"}
              type={"checkbox"}
              id={"tortas"}
              onChange={handleFilterChange}
            ></Input>
            <label htmlFor="">Tortas</label>
          </div>

          <div className="item-checkbox">
            <Input
              clas={"input-check-box"}
              type={"checkbox"}
              id={"box"}
              onChange={handleFilterChange}
            ></Input>
            <label htmlFor="">Box</label>
          </div>
          <div className="item-checkbox"></div>
          <div className="item-checkbox">
            <Input
              clas={"input-check-box"}
              type={"checkbox"}
              id={"tartas"}
              onChange={handleFilterChange}
            ></Input>
            <label htmlFor="">Tartas</label>
          </div>

          <div className="item-checkbox">
            <Input
              clas={"input-check-box"}
              type={"checkbox"}
              id={"paletas"}
              onChange={handleFilterChange}
            ></Input>
            <label htmlFor="">Paletas</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
