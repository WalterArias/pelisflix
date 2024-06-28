import React, { useState } from "react";

import FrmAgregar from "./components/FrmAgregar";
import ListarPeliculas from "./components/ListarPeliculas";

import Buscar from "./components/Buscar";
function App() {
  const [datos, setDatos] = useState([]); // objeto y metodo de inicializacion para tomar los datos del form
  //render del componente
  return (
    <>
      <div className="layout">
        <header className="header">
          <div className="logo">
            <img src="pelisred-min.png" alt="" srcSet="" />
          </div>
        </header>

        <nav className="nav">
          <ul>
            <li>
              <a href="wwww.test.com">Inicio</a>
            </li>
            <li>
              <a href="wwww.test.com">Peliculas</a>
            </li>
            <li>
              <a href="wwww.test.com">Blog</a>
            </li>
            <li>
              <a href="wwww.test.com">Contacto</a>
            </li>
          </ul>
        </nav>
        <section id="content" className="content">
          <ListarPeliculas datos={datos} setDatos={setDatos} />
        </section>
        <aside className="lateral">
          <Buscar datos={datos} setDatos={setDatos} />
          <FrmAgregar datos={datos} setDatos={setDatos} />
        </aside>

        <footer className="footer">
          &copy; Peliculas !! -<a href="https://pelisflix.quest/">pelisflix</a>
        </footer>
      </div>
    </>
  );
}

export default App;
