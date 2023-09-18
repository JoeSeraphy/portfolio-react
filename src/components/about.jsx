import React from "react";
import { BsDownload } from "react-icons/bs";
import joe from "../assets/imagens/joe.jpeg";

export function About() {
  return (
    <div
      name="sobre"
      className="w-full bg-gradient-to-b from-zinc-700 to-zinc-900"
    >
      <div
        className="max-w-screen-xl mx-auto py-52 flex flex-col items-center 
      justify-center h-full px-4 gap-x-16 md:flex-row"
      >
        <img
          src={joe}
          alt="joelson"
          className="w-96 rounded-full border-4 border-green-500"
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <div className="pt-10 text-center max-w-full md:text-left md:pt-0">
          <h2
            className="text-4xl sm:text-6xl font-medium text-white underline decoration-blue-500"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Sobre
          </h2>
          <p
            className="text-white text-xl py-6 max-w-md"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Rio de janeiro, RJ
          </p>
          <p
            className="text-white text-lg py-4 font-light max-w-full"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Nascido e criado e umas das comunidades do Rio, prazer me chamo
            Joelson Silva, solteiro, cristão, pratico Jiu-jitsu, desenhista,
            curto assistir series, filmes e animes. <br />
            <br />
            Estudei programação na instituição Rocketseat e venho me aprimorando
            com os estudos e praticas, e estou no 2ª semestre em Análise e
            Desenvolvimento de Sistemas na IBMR.
            <br />
            Como Desenvolvedor Front-end, crio presells, landingPages e
            Criativos tudo que você precisar para o seu Negocio no Digital
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
