import React from "react";
import "../content/Content.css";
import Button from "../button/Button";
const Content = () => {
  return (
    <>
      <div className="container text-center conteiner-content">
        <div className="row main-content-public">
          <div className="col col-text-page">
            <h1 className="title-page">El Arte de Endulzar Tus Momentos</h1>
            <div className="content-button">
              <Button
                type={"button"}
                clas={"btn btn-primary"}
                content={"Realizar un pedido"}
              ></Button>

              <Button
                type={"button"}
                clas={"btn btn-primary"}
                content={"Abrir catalogo"}
              ></Button>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div className="col">
                <img
                  className="img-home"
                  src="./src/assets/img/img10.jpeg"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  className="img-home"
                  src="./src/assets/img/img8.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row column-text mt-5">
          <div className="col-8 col-1-row-img">
            <div className="row">
              <div className="col">
                <img
                  className="img-home-col"
                  src="./src/assets/img/img14.jpg"
                  alt=""
                />
                <p className="text-img">
                  Torta de corazon<br></br>(personalizadas)
                </p>
              </div>
              <div className="col">
                <img
                  className="img-home-col"
                  src="./src/assets/img/img11.jpg"
                  alt=""
                />
                <p className="text-img">Torta matilda</p>
              </div>
              <div className="col">
                <img
                  className="img-home-col"
                  src="./src/assets/img/img17.jpg"
                  alt=""
                />
                <p className="text-img">Torta de deadpool</p>
              </div>
            </div>
          </div>
          <div className="col-2-row-img col-4">
            <div className="container-comments">
              <div className="tittle-comments">
                <p>Comentarios</p>
                <div className="star-container">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>

              <p className="content-text">
                La chocotrota me parecio exquisita, la antencion muy buena y siempre buena predispocision
                volveria sin dudas
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
