import React from "react";
import "../Product/Product.css";
import ProductItem from "../../component/product/ProductItem";
import img1 from "../../assets/img/img1.jpeg";
import img2 from "../../assets/img/img13.jpg";
import img3 from "../../assets/img/img3.jpeg";
import img4 from "../../assets/img/img4.jpeg";
import img5 from "../../assets/img/img5.jpeg";
import img6 from "../../assets/img/img6.jpeg";
import img7 from "../../assets/img/img7.jpeg";
import img8 from "../../assets/img/img8.jpeg";
import img9 from "../../assets/img/img9.jpeg";
import SearchBar from "../../component/searchBar/SearchBar";
import { useState } from "react";

const products = [
  { name: "Pan dulce chocolate", price: "$5000", img: img1, category: "panes" },
  { name: "Budin integral", price: "$2500", img: img2, category: "budines" },
  { name: "Tortal personalizada", price: "Consultar precio", img: img3, category: "tortas" },
  { name: "Ramo de flores", price: "$700 c/u", img: img4, category: "otros" },
  { name: "Box de alfajores", price: "$900 c/u", img: img5, category: "box" },
  { name: "Tarta frutal", price: "$15000", img: img6, category: "tartas" },
  { name: "Torta matilda", price: "$16000", img: img7, category: "tortas" },
  { name: "Lemon pie", price: "$12000", img: img8, category: "tartas" },
  { name: "Box paletas de chocolates", price: "$600 c/u", img: img9, category: "paletas" },
];
const Product = () => {


  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm, filters) => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    if (filters.length > 0) {
      filtered = filtered.filter((product) =>
        filters.includes(product.category)
      );
    }

    setFilteredProducts(filtered);
  };
  return (
    <div className="main-conteiner-product conteiner">
      <SearchBar onSearch={handleSearch}></SearchBar>
      <div className="conteiner-list-products row">
        {filteredProducts.map((product) => (
          <ProductItem
            title={product.name}
            price={product.price}
            img={product.img}
          >
          </ProductItem>
        ))}
      </div>
    </div>
  );
};

export default Product;
