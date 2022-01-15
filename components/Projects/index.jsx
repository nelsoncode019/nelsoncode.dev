import Image from "next/image";
import Nodeschool from "../../icons/Nodeschool";
import Dev from "../../icons/Dev";
import Youtube from "../../icons/youtube";

function Projects() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Sobre mí</h1>
      </div>
      <br />
      <div className="flex justify-center">
        <div className="grid p-5 sm:grid-cols-1 md:grid-cols-2 gap-10">
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-blue-500/30 border-2 border-violet-600">
            <div className="px-3 py-3">
              <div className="font-bold text-xl mb-2 text-sky-500">
                NodeSchool San Miguel
              </div>
              <p className="text-gray-400 text-base">
                Actualmente Colaborador de la comunidad más importante en El
                Salvador que reúne a todos los amantes de la tecnología{" "}
              </p>
            </div>
            <div className="float-right m-3">
              <Nodeschool />
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-blue-500/30 border-2 border-violet-600">
            <div className="px-3 py-3">
              <div className="font-bold text-xl mb-2 text-sky-500">
                Dev Community
              </div>
              <p className="text-gray-400 text-base">
                Me encanta crear artículos de las tecnologías que estoy
                aprendiendo y que podrían ser interesantes para los demás
              </p>
            </div>
            <div className="float-right m-3">
              <Dev />
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-blue-500/30 border-2 border-violet-600">
            <div className="px-3 py-3">
              <div className="font-bold text-xl mb-2 text-sky-500">
                Deep Learning AI Ambassador
              </div>
              <p className="text-gray-400 text-base">
                Organizador de eventos Pie & IA organizados de forma
                independiente
              </p>
            </div>
            <div className="float-right m-3">
              <Image
                src="/pi-ai.png"
                width={40}
                height={40}
                alt="Pie & IA San Salvador"
              />
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-blue-500/30 border-2 border-violet-600">
            <div className="px-3 py-3">
              <div className="font-bold text-xl mb-2 text-sky-500">
                NelsonCode
              </div>
              <p className="text-gray-400 text-base">
                Canal de Youtube en el que enseño temas de Python y JavaScript
                de manera práctica
              </p>
            </div>
            <div className="float-right m-3">
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
