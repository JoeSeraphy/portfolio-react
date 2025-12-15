import React from "react";
import { BsDownload } from "react-icons/bs";
import joe from "../assets/imagens/joe-ia.png";

export function About() {
  return (
    <div name="sobre" className=" bg-gradient-to-b from-zinc-700 to-zinc-900">
      <div
        className="max-w-screen-xl w-full mx-auto py-52 flex flex-col items-center 
      justify-center px-4 md:flex-row lg:flex lg:gap-8"
        data-aos="zoom-in"
        data-aos-durantion="200"
      >
        <img
          src={joe}
          alt="joelson"
          className="w-80 rounded-full border-4 border-green-500"
        />
        <div className="pt-10 sm:w-[40rem] md:pt-0">
          <h2 className="text-4xl sm:text-6xl font-medium text-center lg:text-left text-white underline decoration-blue-500">
            Sobre
          </h2>
          <p className="text-white text-center lg:text-left py-6">
            Rio de janeiro, RJ 
          </p>
          <p className="text-white text-center lg:text-left py-4 font-light">
            Sou Joelson Silva, desenvolvedor em formação e apaixonado por tecnologia. 
            Nascido e criado em uma comunidade do Rio, trago comigo valores de dedicação, disciplina e resiliência. <br/><br/>
            Iniciei meus estudos em programação pela Rocketseat, onde adquiri uma base sólida em desenvolvimento web e boas práticas de código. 
            Atualmente estou no 4º período de Análise e Desenvolvimento de Sistemas na IBMR, sempre buscando evoluir com novos desafios e projetos.<br/><br/>
            Além da tecnologia, pratico Jiu-jitsu, gosto de desenhar e sou fã de séries, filmes e animes — atividades que estimulam minha criatividade e disciplina.
            Meu objetivo é crescer como desenvolvedor, contribuir em projetos inovadores e gerar impacto positivo através da tecnologia.

          </p>
          {/* <a
            className="flex mx-auto md:mx-0 items-center w-36 text-white gap-x-3 px-4 py-2 rounded border-2 border-blue-500 hover:bg-blue-500 duration-300"
            href="curriculo.pdf"
            download={true}
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <BsDownload size={24} color="#fff" />
            Currículo
          </a> */}
        </div>
      </div>
    </div>
  );
}
