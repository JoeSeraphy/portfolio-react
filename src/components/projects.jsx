import spacey from "../assets/imagens/projeto4.png";
import easybank from "../assets/imagens/projeto1.png";
import ageCal from "../assets/imagens/age-cal.png"
import playerStranger from "../assets/imagens/playerStranger.png"
import breve from "../assets/imagens/breve.jpg";

/*import lista from "../assets/imagens/";
import embreve from "../assets/imagens";*/

export function Projects() {
  const projetos = [
    {
      id: 1,
      src: spacey,
      alt: "spacey",
      description:
        "Estudo de uma landing page, projeto feito em react, vite e Style-component.",
      link: "https://page-spacey.vercel.app",
      code: "https://github.com/JoeSeraphy/landing-page-SpaceY",
    },
    {
      id: 2,
      src: easybank,
      alt: "Easybank",
      description:
        "Desafio do frontendMentor, projeto feito em react, vite e tailwindCss.",
      link: "https://easybank-joeseraphy.vercel.app/",
      code: "https://github.com/JoeSeraphy/easybank-frontendMentor",
    },
    {
      id: 3,
      src: ageCal,
      alt: "Calculadora de idade",
      description: "Desafio do frontendentor, projeto feito com HTML, CSS e JavaScript",
      link: "https://age-calculator-joeseraphy.vercel.app/",
      code: "https://github.com/JoeSeraphy/age-calculator-joeseraphy",
    },
    {
      id: 4,
      src: playerStranger,
      alt: "playerStranger",
      description: "Um player com as musicas que tocaram na serie, projeto feito com HTML, CSS e JavaScript",
      link: "https://player-muisc.vercel.app/",
      code: "https://github.com/JoeSeraphy/playerMuisc",
    },
    /*{
      id: 4,
      src: breve,
    },
    {
      id: 5,
      src: breve,
    },
    {
      id: 6,
      src: breve,
    },*/
  ];
  return (
    <div
      name="projetos"
      className="bg-gradient-to-b from-zinc-900 to-zinc-700 grid justify-center items-center"
    >
      <div
        className="max-w-screen-xl py-40 px-4"
        data-aos="zoom-in"
        data-aos-durantion="200"
      >
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl font-medium text-white underline decoration-blue-500">
            Projetos
          </h2>
          <p className="mt-4 text-white">Conheçam alguns dos meus trabalhos</p>
        </div>

        <div className="text-center grid justify-center gap-10 mt-8  sm:grid-cols-2 md:grid-cols-3  px-4">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="shadow-md shadow-green-500 rounded-lg"
            >
              <img
                src={projeto.src}
                alt={projeto.alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="text-white mt-2 text-left px-2">
                {projeto.description}
              </p>
              <div className="flex items-center justify-center text-white">
                <a
                  href={projeto.link}
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Visualizar
                </a>
                <a
                  href={projeto.code}
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Codigo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
