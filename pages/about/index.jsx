import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Acerca de | NelsonCode</title>
        <meta
          name="description"
          content="Articulos que tengo publicados en Dev.to"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-left p-10">
        <h1 className="text-center text-4xl font-bold">Timeline tecnológico</h1>
        <br />
        <strong className="text-2xl">2020</strong>
        <br />
        <br />
        <ol className="text-gray-400">
          <li>- Llegada de pandemia</li>
          <li>
            - Perdí en un evento de app para el COVID-19 con mi compañero Samuel
            Campos
          </li>
          <li>- Trabajé para IPSUM</li>
          <li>- Hago mi primera charla virtual en la comunidad Horchata JS</li>
          <li>- Me invitan al GDSC de la UGB</li>
          <li>- Conozco a la comunidad Nodeschool San Miguel</li>
        </ol>
        <br />

        <strong className="text-2xl">2021</strong>
        <br />
        <br />
        <ol className="text-gray-400">
          <li>
            - Comienzo a estudiar Ingeniería en Ciencias de la computación
          </li>
          <li>- Comienzo a crear videos para Youtube</li>
          <li>- Comienzo a crear contenido para Dev.to</li>
          <li>- Hago mi primera charla en DevTeam504</li>
          <li>- Me retiro de la Ingeniería</li>
          <li>- Me invitan al GDSC de Latam</li>
          <li>
            - Me aceptan la solicitud para ser Deep Learning AI Ambassador
            representando a El Salvador
          </li>
        </ol>
      </div>
    </>
  );
}

export default About;
