import React, { useState } from "react";

const Editar = ({ pelicula, datos, setDatos, leerLS, setEditar }) => {
  console.log(pelicula);
  //metodo para actualizar los cambios
  const actualizarInformacion = (e, id) => {
    e.preventDefault();
    //leer los datos locales
    let peliculasActual = leerLS();

    //buscar por el id
    let index = peliculasActual.findIndex((pelicula) => pelicula.id === id);
    //obtenemos los datos del form y los almacenamos en un objeto para guardar posteriormente
    let datosForm = {
      id,
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    //cambiar los datos de acuerdo al id encontrado
    peliculasActual[index] = datosForm;

    //actualizar la bd local
    localStorage.setItem("pelicula", JSON.stringify(peliculasActual));

    //cerrar el formaluario de edicion
    setEditar(0);
  };
  //render del componente
  return (
    <>
      <form
        onSubmit={(e) => {
          actualizarInformacion(e, pelicula.id);
        }}
        className="edit_form"
      >
        <input
          type="text"
          name="titulo"
          id="titulo"
          className="edit_form"
          defaultValue={pelicula.titulo}
        />
        <input
          type="text"
          name="descripcion"
          id="descripcion"
          className="edit_form"
          defaultValue={pelicula.descripcion}
        />
        <input type="submit" value="Actualizar" />
      </form>
    </>
  );
};

export default Editar;
