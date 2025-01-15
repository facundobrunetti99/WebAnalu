import React from 'react'
import "../content/Content.css"

const Content = () => {
  return (
    <>

    <div className="conteiner text-center conteiner-content">
    <div className="row ">
        <div className="col col-text-page">
            <h1 className='title-page'>
            El Arte de Endulzar Tus Momentos
            </h1>
            <div className="content-button">
            <button type="button" class="btn btn-primary">Realizar un pedido</button>
            <button type="button" class="btn btn-primary">Abrir catalogo</button>
            </div>
        
    
        </div>

        <div className="col">
            columna 2

        </div>

    </div>
    <div className='row'>
        <div className="col">
            columna 1

        </div>
        <div className="col">
            columna 2

        </div>

    </div>



    </div>
    
    </>
  )
}

export default Content