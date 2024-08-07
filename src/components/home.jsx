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
          <p className="text-white text-xl py-4 max-w-md ">
            Desenvolvedor Front-End React
          </p>
          <div className="flex items-center gap-x-6">
            <a
              className="flex items-center w-36 text-white gap-x-3 px-4 py-2 rounded border-2 border-blue-500 hover:bg-blue-500 duration-300"
              href="https://www.linkedin.com/in/joelson-silva-89b117119/"
              target="_blank"
            >
              <FaLinkedin size={24} color="#fff" />
              Linkedin
            </a>
            <a
              className="flex items-center w-36 text-white gap-x-3 px-4 py-2 rounded border-2 border-green-500  hover:bg-green-500 duration-300"
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
