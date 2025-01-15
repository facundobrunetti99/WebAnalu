import React from "react";
import "../navbar/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="conteiner-navbar">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="div-logo-analu">
                <a href="#" className="img-cake">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAb5JREFUWEftV1FygkAMzRt6DJmhN1HpPSo/xVuot9D+VO9R7d6kzOgximlDWWeBRdcVxx/4USEkL8l7yQp68IUHx6ebALwMpkNJ4OeJMpUtM59kvAEMo2kU5PwtQZl5vju8L3oAnVZA97fN6REUgfijfL4GY3MOQBtPGhwYD95mAOY+2Ti8o/IAiUnYCoA7B9f4sjzASIM4ATBZrcvKzF7SslUCwISIokI1hGS3X67luxXALbJqa0MtwfV2v0oqAIR0DP6qI3Toq7NJHKZcGqvtfjXqAXRSAemt6x5wbgERZUxYHANSNufjcDoB8UyzWqsmD7Cw2Zf8Evtief19nueAwarG4IjDVIiqHdUJWNG4PGyZLc4AigAiSwCiYQlcaFlnXf6We+Z9xcwKgNjbwF5QwX/A0+Cw6CwDI/k8LJV+Foep7AV5x3qBMdIyv9gCPalKp42s23pdlrsOvFhUAtaZhOaolHSERLLNCvY4nHza7L0BOI+6C4Y9AOcKSKu7KnvNTyFJc9tWDiRxmMop19TzXXDkAZ4bBxLNdga/WgZOV0AUEzb6MFJZRl1FuNaP9x+TawO1TsiuHPn66SvwC6NaXjBSssV4AAAAAElFTkSuQmCC" />
                </a>
                <a className="p-analu" href="#">
                  Analu <p className="p-pasteleria">Pasteleria</p>
                </a>
              </div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Productos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Sobre nosotros
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Buscar producto"
                  aria-label="Search"
                ></input>
                <button class="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
