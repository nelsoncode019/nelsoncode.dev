import Head from "next/head";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="h-auto text-white">
      <Head>
        <title>Inicio | NelsonCode</title>
        <meta
          name="description"
          content="Hola, soy Nelson Hernández amante de Python & JavaScript, me gusta enseñar las tecnologías que voy aprendiendo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Presentation />
      <Projects />
      <br />
    </div>
  );
}
