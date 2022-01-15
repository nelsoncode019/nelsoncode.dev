import React from "react";
import Github from "../../icons/Github";
import Facebook from "../../icons/Facebook";
import Twitter from "../../icons/Twitter";
import Instagram from "../../icons/Instagram";
import Linkedin from "../../icons/Linkedin";


function Footer() {
  return (
    <footer className="footer bg-black relative pt-1">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-slate-300 uppercase mt-4 md:mt-0 mb-2">
                Redes Sociales
              </span>
              <div className="flex justify-center pt-5">
                <a target="_blank" href="https://github.com/nelsoncode019" className="pl-4" rel="noreferrer">
                  <Github />
                </a>
                <a target="_blank" href="https://www.facebook.com/nelsoncode.dev/" className="pl-4" rel="noreferrer">
                  <Facebook />
                </a>
                <a target="_blank" href="https://twitter.com/nelsoncode_dev" className="pl-4" rel="noreferrer">
                  <Twitter />
                </a>
                <a target="_blank" href="https://www.instagram.com/nelsoncode/" className="pl-4" rel="noreferrer">
                  <Instagram />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/nelsoncode/" className="pl-4" rel="noreferrer">
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-300 uppercase mt-4 md:mt-0 mb-2">
                Páginas
              </span>
              <span className="my-2">
                <a href="#" className="text-slate-500 text-md hover:text-blue-500">
                  Inicio
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-slate-500  text-md hover:text-blue-500">
                  Blog
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="text-slate-500 text-md hover:text-blue-500">
                  Acerca de
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-300 uppercase mt-4 md:mt-0 mb-2">
                Playlist
              </span>
              <span className="my-2">
                <a
                  target="_blank"
                  href="https://www.youtube.com/playlist?list=PL6W7ibpXPiOTegBEI9VesVOtl-1-O1eo6"
                  className="text-slate-500 text-md hover:text-blue-500" rel="noreferrer"
                >
                  Python
                </a>
              </span>
              <span className="my-2">
                <a
                  target="_blank"
                  href="https://www.youtube.com/playlist?list=PL6W7ibpXPiOTjjqw7ZAVmuPxECbjaBcjC"
                  className="text-slate-500  text-md hover:text-blue-500" rel="noreferrer"
                >
                  FastAPI
                </a>
              </span>
              <span className="my-2">
                <a
                  target="_blank"
                  href="https://www.youtube.com/playlist?list=PL6W7ibpXPiOTWVXxhziqVWb1f75fjv7K-"
                  className="text-slate-500 text-md hover:text-blue-500" rel="noreferrer"
                >
                  JavaScript
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
