import React, { useState } from "react";

const Buscar = ({ datos, setDatos }) => {
  const [busqueda, setBusqueda] = useState("");

  const buscarPelicula = (e) => {
    let busqueda = e.target.value;
    //creamos el filtro
    let resultado = datos.filter((pelicula) => {
      return pelicula.titulo.includes(busqueda); //devuelve true o false
    });
    //leemos el localstorage para verificar la aplicacion del filtro
    if (busqueda.length <= 1 || busqueda.length <= 0) {
      resultado = JSON.parse(localStorage.getItem("pelicula"));
    }
    setDatos(resultado);
  };

  //render del component
  return (
    <>
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
          <input
            type="text"
            id="search_field"
            name="busqueda"
            onChange={buscarPelicula}
          />
          <button id="search">Buscar</button>
        </form>
      </div>
    </>
  );
};

export default Buscar;
