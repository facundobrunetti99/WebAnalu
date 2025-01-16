import React from "react";
import "../content/Content.css";

const Content = () => {
  return (
    <>
      <div className="conteiner text-center conteiner-content">
        <div className="row main-content-public">
          <div className="col col-text-page">
            <h1 className="title-page">El Arte de Endulzar Tus Momentos</h1>
            <div className="content-button">
              <button type="button" class="btn btn-primary">
                Realizar un pedido
              </button>
              <button type="button" class="btn btn-primary">
                Abrir catalogo
              </button>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div className="col">

                <img className="img-home" src="./src/assets/img/img10.jpeg" alt="" />
              </div>
              <div className="col">

              <img className="img-home" src="./src/assets/img/img8.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row column-text mt-5">
          <div className="col-8 col-1-row-img">
            <div className="row">
                <div className="col">
                <img className="img-home-col" src="./src/assets/img/img14.jpg" alt="" />
                <p className="text-img">Torta de corazon<br></br>(personalizadas)</p>
                </div>
                <div className="col">
                <img className="img-home-col" src="./src/assets/img/img11.jpg" alt="" />
                <p className="text-img">Torta matilda</p>
                </div>
                <div className="col">
                <img className="img-home-col" src="./src/assets/img/img17.jpg" alt="" />
                <p className="text-img">Torta de deadpool</p>
                </div>

            </div>
          </div>
          <div className="col-2-row-img col-4 ">columna 2</div>
        </div>
      </div>
    </>
  );
};

export default Content;
