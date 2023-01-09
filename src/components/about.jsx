import React from "react";
import { BsDownload } from "react-icons/bs";
import joe from "../assets/imagens/joe.jpeg";

export function About() {
  return (
    <div
      name="sobre"
      className="w-full h-screen bg-gradient-to-b from-zinc-700 to-zinc-900"
    >
      <div
        className="max-w-screen-xl mx-auto md:pt-0 flex flex-col items-center 
      justify-center h-full px-4 gap-x-16 md:flex-row"
      >
        <img
          src={joe}
          alt="joelson"
          className="w-96 rounded-full border-4 border-green-500"
        />
        <div className="pt-10 text-center max-w-full md:text-left md:pt-0">
          <h2 className="pt-6 text-4xl sm:text-6xl font-medium text-white underline decoration-blue-500">
            Sobre
          </h2>
          <p className="text-white text-xl py-2 max-w-md">Rio de janeiro, RJ</p>
          <p className="text-white text-lg py-4 font-light max-w-full">
            Nascido e criado e umas das cominudades do Rio, prazer me chamo
            Joelson Silva, hoje eu tenho 30 anos, solteiro, sou cristão, luto
            Jiu-jitsu, desenhista, curto assistir series, filmes e animes.{" "}
            <br />
            Bom no começo do ano de 2022 comecei os meus estudos em programação
            na instituição Rocketseat e venho me aprimorando com os estudos e
            praticas, pretendo voltar para faculdade e cursar ADS esse ano.
            <br />E estou atrás do meu primeiro emprego como Front-End Jr.
          </p>
          <a
            className="flex mx-auto md:mx-0 items-center w-36 text-white gap-x-3 px-4 py-2 rounded border-2 border-blue-500 hover:bg-blue-500 duration-300"
            href="curriculo.pdf"
            download={true}
            target="_blank"
          >
            <BsDownload size={24} color="#fff" />
            Currículo
          </a>
        </div>
      </div>
    </div>
  );
}
