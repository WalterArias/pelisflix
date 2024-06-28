import React, { useState } from "react";

const FrmAgregar = ({ datos, setDatos }) => {
  //Metodo que almacenara las pelis en el localstorage

  const salvarLocal = (valoresFrm) => {
    //leemos la informacion del localstorage
    let elementos = JSON.parse(localStorage.getItem("pelicula"));
    //agregamos al localstorage
    if (Array.isArray(elementos)) {
      elementos.push(valoresFrm); //verifica que sea  un arreglo y agrega un elemento al final
    } else {
      elementos = [valoresFrm]; //crea el arreglo local por primera vez
    }
    setDatos(elementos);
    localStorage.setItem("pelicula", JSON.stringify(elementos));
  };

  // Metodo obtiene la data del form, crea un objeto y setea el estado del componente
  const getDatosFrm = (e) => {
    e.preventDefault(); // para evitar la recarga automatica del form
    let titulo = e.target.titulo;
    let descripcion = e.target.descripcion;
    let valoresFrm = {
      id: new Date().getTime(), //truco para crear un id randomico
      titulo: titulo.value,
      descripcion: descripcion.value,
    };
    setDatos(valoresFrm);
    salvarLocal(valoresFrm);
  };

  //render del modulo
  return (
    <>
      <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        <form onSubmit={getDatosFrm}>
          <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripción"
          ></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
};

export default FrmAgregar;
