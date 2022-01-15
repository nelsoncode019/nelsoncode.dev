import React from "react";
import Ipsum from "../../icons/Ipsum";

function Presentation() {
  return (
    <div className="text-center pt-28">
      <h1 className="text-4xl font-bold">Hola 👋🏻 soy Nelson Hernández</h1>
      <br />
      <p>
        Desarrollador de Python y JavaScript con 4+ años de experiencia en el
        desarrollo web
      </p>
      <br />
      <br />
      <h1 className="text-4xl font-bold">Trabajos</h1>
      <div className="flex justify-center">
        <Ipsum />
      </div>
    </div>
  );
}

export default Presentation;
