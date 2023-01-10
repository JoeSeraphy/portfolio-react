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
      link: "https://page-spacey.vercel.app",
      code: "https://github.com/JoeSeraphy/landing-page-SpaceY",
    },
    {
      id: 2,
      src: pokedex,
      alt: "pokedex",
      link: "",
      code: "https://github.com/JoeSeraphy/pokedex-api",
    },
    {
      id: 3,
      src: buscarGithub,
      alt: "buscador de perfil github",
      link: "https://buscar-perfil-github.vercel.app",
      code: "https://github.com/JoeSeraphy/busca-de-perfil-github-api",
    },
    {
      id: 4,
      src: countdown,
      alt: "desafio countdown",
      link: "https://desafio-countdown-livid.vercel.app/",
      code: "https://github.com/JoeSeraphy/desafioCountdown",
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
      className="w-full bg-gradient-to-b from-zinc-900 to-zinc-700"
    >
      <div
        className="max-w-screen-xl mx-auto py-40  grid items-center 
      justify-center text-center h-full px-4 gap-x-16 md:flex-row"
      >
        <div className="">
          <h2 className="text-4xl sm:text-6xl font-medium text-white underline decoration-blue-500">
            Projetos
          </h2>
          <p className="text-lg py-6 text-white">
            Conheçam alguns dos meus trabalhos de estudos
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projetos.map(({ id, src, alt, link, code }) => (
            <div key={id} className="shadow-md shadow-green-500 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center text-white">
                <a
                  href={link}
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Visualizar
                </a>
                <a
                  href={code}
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
