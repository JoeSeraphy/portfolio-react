import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import heroImage from "../assets/imagens/Heroimg.png";

export function Home() {
  return (
    <div
      name="home"
      className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-700 "
    >
      <div
        className="max-w-screen-xl mx-auto pt-40 flex flex-col items-center 
      justify-center w-full px-4 gap-x-16 md:flex-row lg:flex lg:justify-between"
        data-aos="zoom-in"
        data-aos-durantion="200"
      >
        <div className="text-center md:text-left ">
          <p className="text-white text-xl font-light max-w-md">
            Olá, seja bem-vindo, eu sou
          </p>
          <h2 className="text-4xl sm:text-6xl font-medium text-white">
            Joelson Silva
          </h2>
          <p className="text-white text-2xl py-2 max-w-md ">
            Desenvolvedor em Formação
          </p>
          <p className="text-white text-base py-2 max-w-md ">
            Estudante de Análise e Desenvolvimento de Sistemas, com experiência profissional em suporte e tecnologia.
          </p>
          <div className="flex items-center justify-center gap-x-4 mt-4 md:justify-start">
            <a
              className="flex w-full justify-center text-white gap-x-3 px-4 py-2 rounded border-2 border-green-500  hover:bg-green-500 duration-300"
              href="https://github.com/JoeSeraphy"
              target="_blank"
            >
              <FaGithub size={24} color="#fff" />
              Github
            </a>
          </div>
        </div>
        <div className=" mt-4">
          <img
            className="border-b-4 border-blue-500"
            src={heroImage}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
