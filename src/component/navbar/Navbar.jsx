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
                <a href="" className="img-cake">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAcxJREFUWEftV0tygkAQ7UcuQnYJlQOkJIt4ieAuchL1JNGd5hKyiFYOkDLZhYPIdKoJg3wG+YjlRlZTzND9uvu97gF04QcX9k8nAXh6GD1LAPs9hZ8/y7BLMJ0BPN6N7BuLf8UpE0+3u/fZFUCvGdD1rTKqFNkgfkv257CwOAagiiclDgyclwkI0y7R1H7DFEQMP0vYHICzOj+gCyOFoQaRAsiyWqeViTtJy5QJEMZEZP+rBv52t5zL2gjgFFlVlaEQ4HyzW/k5AEI6VrwuIqyta4sDruNxfJwp2HyvhlcAvWRAatt0DjQuARGFTJgpRYHJ+MAZjUE80azWqokUZqbzMb8inhAoHl61HEh5ZWgc7r23Tg2VCZjTuGwbe0sdCYt2RZYgiIYlgljLOmpisgnxu8N7poDBARjPRrB1ABKHaeMwKC2EBf/jaxnoPdfxZC7IN8YHFoZa5rUl0J0qMVqKuqrWSbqLwONBJWAbkzDbKiUcIZFMM1k3YXzV+c4AWjS7o0evABpnQFjaV9pzdpJGlJ22uQuJ63hyy83q/Cw4IoXb0oVEs50VvxoaTj9A4gaFhb6M5IZRPx7aW+n8Y9LeVUWH7MtQVzvXDPwBe019MD2qc5QAAAAASUVORK5CYII="/>
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
