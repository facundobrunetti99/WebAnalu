import React from "react";
import "../qualified-p/QualifiedProducts.css";
import img10 from "../../assets/img/img10.jpeg";
import img12 from "../../assets/img/img12.jpg";
import img13 from "../../assets/img/img8.jpeg";
import img14 from "../../assets/img/img14.jpg";

const products = [
  {
    id: 1,
    img: img12,
    title: "Budin integral",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    img: img10,
    title: "Letras personalizadas",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    img: img13,
    title: "Lemon pie",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 4,
    img: img14,
    title: "Minitortas personalizadas",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const QualifiedProducts = () => {
  const renderProducts = () =>
    products.map((product) => (
      <div key={product.id} className="product-card col">
        <div className="contain-product">
          <img src={product.img} alt={product.title} className="product-img" />
          <p className="product-title">{product.title}</p>
          <p className="product-rating"> {product.rating}</p>
        </div>
      </div>
    ));

  return (
    <div className="qualified-products-main">
      <div className="products-grid row">{renderProducts()}</div>
    </div>
  );
};

export default QualifiedProducts;
