import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://www.nelsoncode.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nelson Hernández | NelsonCode" />
        <meta
          property="og:description"
          content="I'm a Frontend Developer. I like to design exceptional digital experiences. I also love to share what I learn every day."
        />
        <meta property="og:image" content="/preview.png" />
        <meta
          name="description"
          content="I'm a Frontend Developer. I like to design exceptional digital experiences. I also love to share what I learn every day."
        />
        <title>Nelson Hernández | NelsonCode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto">
        <div className="grid h-screen grid-box-init">
          <div className="hidden md:block">
            <p className="mt-96 -rotate-90">nelsonher019@gmail.com</p>
          </div>
          <div className="p-4 md:pt-28">
            <div>
              <p className="pt-2 text-xl md:text-2xl text-center md:text-left">
                Hi, my name is
              </p>
            </div>
            <div className="text-4xl md:text-7xl font-extrabold pt-2 text-center md:text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r  from-red-400 to-indigo-400">
                Nelson Hernández.
              </span>
            </div>
            <div className="text-4xl md:text-6xl font-extrabold pt-2 text-center md:text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600	 to-pink-600">
                I enjoy creating things on the internet.
              </span>
            </div>

            <div>
              <p className="pt-2 text-xl max-w-3xl text-center md:text-left">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I'm a Frontend Developer. I like to design exceptional digital
                experiences. I also love to share what I learn every day.
              </p>
            </div>
            <div className="text-center md:text-left">
              <a
                href="https://www.youtube.com/c/NelsonCode"
                className="bg-transparent hover:bg-pink-600 text-pink-600 font-semibold hover:text-white py-2 mt-6 px-4 border border-pink-600 hover:border-transparent rounded inline-flex items-center ease-in-out"
              >
                <span className="ml-1">Youtube Channel</span>
              </a>
            </div>
          </div>

          <div className="hidden md:block mt-96">
            <div className="flex flex-col gap-4">
              <div>
                <a href="https://github.com/nelsoncode019">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 250"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                  >
                    <title>GitHub</title>
                    <g>
                      <path
                        d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"
                        className="fill-indigo-400"
                      />
                    </g>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/nelsoncode_dev">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 209"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                  >
                    <title>Twitter</title>

                    <g>
                      <path
                        d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259"
                        className="fill-indigo-400"
                      />
                    </g>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/nelsoncode/">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                  >
                    <title>Instagram</title>
                    <g>
                      <path
                        d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"
                        className="fill-indigo-400"
                      />
                    </g>
                  </svg>
                </a>
              </div>

              <div>
                <a href="https://www.linkedin.com/in/nelsoncode/">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                  >
                    <title>LinkedIn</title>

                    <g>
                      <path
                        d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
                        className="fill-indigo-400"
                      />
                    </g>
                  </svg>
                </a>
              </div>

              <div>
                <a href="https://www.facebook.com/nelsoncode.dev">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <title>Facebook</title>
                    <g>
                      <path
                        d="M256,128 C256,57.3075 198.6925,0 128,0 C57.3075,0 0,57.3075 0,128 C0,191.8885 46.80775,244.8425 108,254.445 L108,165 L75.5,165 L75.5,128 L108,128 L108,99.8 C108,67.72 127.1095,50 156.3475,50 C170.35175,50 185,52.5 185,52.5 L185,84 L168.8595,84 C152.95875,84 148,93.86675 148,103.98925 L148,128 L183.5,128 L177.825,165 L148,165 L148,254.445 C209.19225,244.8425 256,191.8885 256,128"
                        className="fill-indigo-400"
                      ></path>
                      <path
                        d="M177.825,165 L183.5,128 L148,128 L148,103.98925 C148,93.86675 152.95875,84 168.8595,84 L185,84 L185,52.5 C185,52.5 170.35175,50 156.3475,50 C127.1095,50 108,67.72 108,99.8 L108,128 L75.5,128 L75.5,165 L108,165 L108,254.445 C114.51675,255.4675 121.196,256 128,256 C134.804,256 141.48325,255.4675 148,254.445 L148,165 L177.825,165"
                        fill="transparent"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto text-center md:text-left">
        <div className="grid h-screen grid-box-about gap-3">
          <div className="hidden md:block"></div>
          <div>
            <div className="hidden md:block ml-10">
              <Image
                className="rounded-full"
                alt="Nelson Hernández | NelsonCode"
                src="/nelson.jpg"
                height="900px"
                width="900px"
              />
            </div>

            <div className="md:hidden flex justify-center">
              <Image
                className="rounded-full"
                alt="Nelson Hernández | NelsonCode"
                src="/nelson.jpg"
                height={250}
                width={250}
              />
            </div>
          </div>
          <div className="p-4 md:pt-28">
            <div className="text-4xl md:text-7xl font-extrabold pt-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r  from-red-400 to-indigo-400">
                1. About
              </span>
            </div>

            <div>
              <p className="pt-2 text-xl max-w-3xl">
                My interest in web development started in 2018 in high school
                programming a movie website for fun.
              </p>
              <p className="pt-2 text-xl max-w-3xl">
                My love for web development has made me want to share it with
                the whole world, both videos recorded for Youtube and live
                talks.
              </p>
              <p className="pt-2 text-xl max-w-3xl">
                Currently I am focused on the Frontend side but in my free time
                I use <strong>Python</strong> and do magic with{" "}
                <strong>DevOps</strong>
              </p>
              <p className="pt-2 text-xl max-w-3xl">
                Here are a few technologies I’ve been working with recently:
              </p>
              <br />
              <div className="grid grid-cols-2 text-xl">
                <div>
                  <ul className="list-disc ml-4">
                    <li>JavaScript (ES6+)</li>
                    <li>React / Svelte</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc ml-4">
                    <li>Docker / Kubernetes</li>
                    <li>Terraform</li>
                    <li>FastAPI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto mt-96 md:mt-0 text-center md:text-left">
        <div className="grid h-screen grid-box-init">
          <div className="hidden md:block"></div>
          <div className="p-4 md:pt-28">
            <div className="text-4xl md:text-7xl font-extrabold pt-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r  from-red-400 to-indigo-400">
                2. Jobs
              </span>
            </div>

            <ol className="pt-2 text-xl max-w-3xl relative border-l border-pink-600 ">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-pink-400 rounded-full mt-1.5 -left-1.5 border border-pink-600" />
                <time className="mb-1 text-base leading-none text-gray-400">
                  2020
                </time>
                <h3 className="font-semibold text-gray-900">
                  Frontend Developer | ProPlanner by IPSUM
                </h3>
                <p className="mb-4 text-gray-500">
                  Web application to manage constructions. I worked on the
                  configuration part in the web app, so I had to understand the
                  model business quickly.
                </p>
                <p className="mb-4 text-gray-500">
                  We use React, Ant Design, PostgreSQL, and Express JS.
                </p>
                <a
                  href="https://www.proplanner.build/"
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Website
                  <svg
                    className="ml-2 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-pink-400 rounded-full mt-1.5 -left-1.5 border border-pink-600" />
                <time className="mb-1 text-base leading-none text-gray-400">
                  2021
                </time>
                <h3 className="font-semibold text-gray-900">
                  Full Stack Developer | Agencia Aduanal Méndez Rugamas
                </h3>
                <p className="mb-4 text-gray-500">
                  Web application to manage customs procedures. I wrote the
                  entire application.
                </p>
                <p className="mb-4 text-gray-500">
                  I used React, CSS Vanilla, MongoDB, Node JS, Websockets and
                  DigitalOcean.{" "}
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
