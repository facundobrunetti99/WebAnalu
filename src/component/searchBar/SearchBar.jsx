import React from "react";
import "../searchBar/SearchBar.css";
import Input from "../input/Input";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="button-search">
        <div className="conteiner-checkbox">
          <Input
            clas={"form-control me-2"}
            type={"search"}
            id={"search"}
          ></Input>
          <div className="item-checkbox">
            <Input
              clas={"input-check-box"}
              type={"checkbox"}
              id={"tortas"}
            ></Input>
            <label htmlFor="">Tortas</label>
          </div>

          <div className="item-checkbox">
            <Input
              clas={"input-check-box"}
              type={"checkbox"}
              id={"box"}
            ></Input>
            <label htmlFor="">Box</label>
          </div>
          <div className="item-checkbox"></div>
          <div className="item-checkbox">
            <Input
              clas={"input-check-box"}
              type={"checkbox"}
              id={"tartas"}
            ></Input>
            <label htmlFor="">Tartas</label>
          </div>

          <div className="item-checkbox">
            <Input
              clas={"input-check-box"}
              type={"checkbox"}
              id={"paletas"}
            ></Input>
            <label htmlFor="">Paletas</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
