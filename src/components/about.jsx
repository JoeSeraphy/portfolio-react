import React from "react";
import { BsDownload } from "react-icons/bs";
import joe from "../assets/imagens/joe.jpeg";

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
            Nascido e criado e umas das comunidades do Rio, prazer me chamo
            Joelson Silva, solteiro, cristão, pratico Jiu-jitsu, desenhista,
            curto assistir series, filmes e animes. <br />
            <br />
            Estudei programação na instituição Rocketseat e venho me aprimorando
            com os estudos e práticas, e estou no 3⁠º semestre em Análise e
            Desenvolvimento de Sistemas na IBMR.
            <br />
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
