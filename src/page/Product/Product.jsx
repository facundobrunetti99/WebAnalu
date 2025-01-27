import React from 'react'
import "../Product/Product.css"
import ProductItem from '../../component/product/ProductItem'
import img1 from "../../assets/img/img1.jpeg"
import img2 from "../../assets/img/img13.jpg"
import img3 from "../../assets/img/img3.jpeg"
import img4 from "../../assets/img/img4.jpeg"
import img5 from "../../assets/img/img5.jpeg"
import img6 from "../../assets/img/img6.jpeg"
import img7 from "../../assets/img/img7.jpeg"
import img8 from "../../assets/img/img8.jpeg"
import img9 from "../../assets/img/img9.jpeg"
const products=[

  {name:"Pan dulce chocolate",
   price:"$5000",
   img:img1
  },
  {name:"Budin integral ",
    price:"$2500",
    img:img2},
  {name:"Tortal personalizada",
    price:"Consultar precio ",
    img:img3},
  {name:"Ramo de flores",
    price:"$700 c/u",
    img:img4},
  {name:"Box de alfajores ",
    price:"$900 c/u",
    img:img5},
  {name:"Tarta frutal",
    price:"$15000",
    img:img6},
  {name:"Torta matilda",
    price:"$16000",
    img:img7},
  {name:"Lemon pie",
    price:"$12000",
    img:img8},
  {name:"Box paletas de chocolates",
    price:"$600 c/u",
    img:img9}
]

const Product = () => {
 
  return (
    <div className='main-conteiner-product conteiner'>
    <div className="search-bar">

    esta es la busqueda
    </div>
    <div className="conteiner-list-products row">
    {
      products.map((product) =>(
          <ProductItem title={product.name} price={product.price} img={product.img}> </ProductItem>

      ))
    }

    </div>

    </div>
  )
}

export default Product