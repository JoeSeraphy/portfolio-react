import React from "react";
import spacey from "../assets/imagens/projeto4.png";
import pokedex from "../assets/imagens/projeto2.jpg";
import buscarGithub from "../assets/imagens/projeto1.png";
import breve from "../assets/imagens/breve.jpg";
import countdown from "../assets/imagens/countdown.png";
/*import lista from "../assets/imagens/";
import embreve from "../assets/imagens";*/

export function Projects() {
  const projetos = [
    {
      id: 1,
      src: spacey,
      alt: "spacey",
      description: " ",
      link: "https://page-spacey.vercel.app",
      code: "https://github.com/JoeSeraphy/landing-page-SpaceY",
    },
    {
      id: 2,
      src: buscarGithub,
      alt: "buscador de perfil github",
      description: " ",
      link: "https://buscar-perfil-github.vercel.app",
      code: "https://github.com/JoeSeraphy/busca-de-perfil-github-api",
    },
    {
      id: 3,
      src: countdown,
      alt: "desafio countdown",
      description: " ",
      link: "https://desafio-countdown-livid.vercel.app/",
      code: "https://github.com/JoeSeraphy/desafioCountdown",
    },
    {
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
    },
  ];
  return (
    <div
      name="projetos"
      className="bg-gradient-to-b w-screen from-zinc-900 to-zinc-700 grid justify-center items-center"
    >
      <div
        className="max-w-screen-xl border-red-500 border py-40 grid items-center 
      justify-center text-center"
      >
        <div className=" grid justify-center items-center text-center">
          <h2
            className="text-4xl sm:text-6xl font-medium text-white underline decoration-blue-500"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Projetos
          </h2>
          <p
            className="mt-4 text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Conheçam alguns dos meus trabalhos
          </p>
        </div>

        <div
          className="grid mt-8 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
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
