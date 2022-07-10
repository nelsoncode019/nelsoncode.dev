import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | NelsonCode</title>
        <meta
          name="description"
          content="Hola, soy Nelson Hernández amante de Python & JavaScript, me gusta enseñar las tecnologías que voy aprendiendo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid" style={{ gridTemplateColumns: "90% 10%" }}>
        <div className="pl-52 pt-28">
          <div>
            <p className="pt-2 text-xl">Hi there, my name is</p>
          </div>
          <div class="text-6xl font-extrabold pt-2">
            <span class="bg-clip-text text-transparent bg-gradient-to-r  from-red-400 to-indigo-600">
              Nelson Hernandez
            </span>
          </div>
          <div class="text-6xl font-extrabold pt-2">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-600	 to-pink-600">
              I enjoy creating things on the internet.
            </span>
          </div>

          <div>
            <p className="pt-2 text-xl max-w-3xl">I'm a Frontend Developer. I like to design exceptional digital experiences. I also love to share what I learn every day.</p>
          </div>
          <div>
            <a
              href="https://www.youtube.com/c/NelsonCode"
              className="bg-transparent hover:bg-pink-600 text-pink-600 font-semibold hover:text-white py-2 mt-6 px-4 border border-pink-600 hover:border-transparent rounded inline-flex items-center ease-in-out"
            >
              <span className="ml-1">Check out my Youtube Channel</span>
            </a>
          </div>
        </div>

        <div>
          Hola
        </div>
      </div>
    </>
  );
}
