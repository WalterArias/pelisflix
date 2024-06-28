import React, { useState, useEffect } from "react";
import Editar from "./Editar";

const ListarPeliculas = ({ datos, setDatos }) => {
  const [editar, setEditar] = useState(0);
  //metodo que lee el local storage
  const leerLS = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelicula"));
    setDatos(peliculas);
    return peliculas;
  };

  const borrarPelicula = (id) => {
    //leer la base de datos local actual y la transformamos en arrary (Iterable)
    let bdLocal = leerLS();
    //creamos un nuevo array filtrando por id
    let bdNueva = bdLocal.filter((peliculas) => peliculas.id !== parseInt(id));
    //actualizamos el estdo del componente principal APP
    setDatos(bdNueva);
    //Guardamos en la base de datos local
    localStorage.setItem("pelicula", JSON.stringify(bdNueva));
  };

  //metodo de autocarga inicial del componente
  useEffect(() => {
    leerLS();
  }, []);

  //metodo render del componente
  return (
    <>
      {datos == null ? (
        <h2>No hay Peliculas en la Base de datos</h2>
      ) : (
        <>
          {datos.map((pelicula) => {
            return (
              <article className="peli-item" key={pelicula.id}>
                <h3 className="title">{pelicula.titulo}</h3>
                <p className="description">{pelicula.descripcion}</p>
                <button
                  className="edit"
                  onClick={() => {
                    setEditar(pelicula.id);
                  }}
                >
                  Editar
                </button>

                <button
                  className="delete"
                  onClick={() => {
                    borrarPelicula(pelicula.id);
                  }}
                >
                  Borrar
                </button>
                {editar === pelicula.id && (
                  <Editar
                    pelicula={pelicula}
                    datos={datos}
                    setDatos={setDatos}
                    leerLS={leerLS}
                    setEditar={setEditar}
                  />
                )}
              </article>
            );
          })}
        </>
      )}
    </>
  );
};

export default ListarPeliculas;
