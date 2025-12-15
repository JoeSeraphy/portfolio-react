import React from "react";

import html from "../assets/imagens/html5.svg";
import css from "../assets/imagens/css3.svg";
import js from "../assets/imagens/javascript.svg";
import react from "../assets/imagens/react.svg";
import typescript from "../assets/imagens/typescript.svg";
import git from "../assets/imagens/git.svg";
import figma from "../assets/imagens/figma.svg";
import styledComponent from "../assets/imagens/sc.png";
import tailwind from "../assets/imagens/tailwind-css.png";
import node from "../assets/imagens/node-js.svg";
import vite from "../assets/imagens/vitejs.svg";
import next from "../assets/imagens/nextjs.svg";
import docker from "../assets/imagens/docker.svg";
import go from "../assets/imagens/golang.svg";

export function Technology() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: git,
      title: "Git",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: node,
      title: "NodeJs",
      style: "shadow-green-700",
    },
    {
      id: 8,
      src: figma,
      title: "Figma",
      style: "shadow-gray-300",
    },
    {
      id: 9,
      src: tailwind,
      title: "TailwindCss",
      style: "shadow-cyan-400",
    },
    {
      id: 10,
      src: next,
      title: "NextJs",
      style: "shadow-zinc-100",
    },
    {
      id: 11,
      src: go,
      title: "Go",
      style: "shadow-cyan-400",
    },
    {
      id: 12,
      src: docker,
      title: "Docker",
      style: "shadow-cyan-200",
    },
  ];

  return (
    <div
      name="tecnologias"
      className="bg-gradient-to-b from-zinc-700 to-zinc-900 grid justify-center items-center"
    >
      <div
        className="max-w-screen-xl  py-40 p-4 grid justify-center 
         text-white text-center"
        data-aos="zoom-in"
        data-aos-durantion="200"
      >
        <div className="mx-auto grid items-center justify-center">
          <h2 className="text-4xl  sm:text-6xl font-medium text-white underline decoration-blue-500">
            Tecnologias
          </h2>
          <p className="mt-4 text-white">
            Estes são as tecnologias com quais trabalho
          </p>
        </div>
        <div className="mt-8 grid grid-cols sm:grid-cols-6 gap-8 sm:px-0">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className={` shadow-md ${tech.style} hover:scale-105 duration-500 px-4 py-2 rounded-lg`}
            >
              <img
                src={tech.src}
                alt={tech.title}
                className="w-20 mx-auto rounded-lg"
              />
              <p>{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
