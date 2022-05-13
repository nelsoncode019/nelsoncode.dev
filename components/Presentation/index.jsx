import React from "react";
import Github from "../../icons/Github";
import Facebook from "../../icons/Facebook";
import Twitter from "../../icons/Twitter";
import Instagram from "../../icons/Instagram";
import Linkedin from "../../icons/Linkedin";

function Presentation() {
  return (
    <div className="ml-5 md:ml-24 pt-60">
      <h1 className="text-5xl font-bold">Hola 👋🏻 soy Nelson Hernández</h1>
      <br />
      <p>
        Desarrollador de Python y JavaScript con 4+ años de experiencia en el
        desarrollo web
      </p>
      <br />
      <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-4 rounded-md">
        Publicaciones en DEV.to
      </button>
      <button className="ml-5 bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-4 rounded-md">
        Videos en Youtube
      </button>

      <div className="hidden md:block float-right mr-5">
        <div className="flex flex-col">
          <a
            target="_blank"
            href="https://github.com/nelsoncode019"
            className="m-5"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/nelsoncode.dev/"
            className="m-5"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/nelsoncode_dev"
            className="m-5"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/nelsoncode/"
            className="m-5"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nelsoncode/"
            className="m-5"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
