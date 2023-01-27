import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export function Contact() {
  return (
    <div
      name="contatos"
      className="w-full bg-gradient-to-b from-zinc-900 to-zinc-700"
    >
      <div
        className="max-w-screen-xl mx-auto py-40 p-4 grid justify-center 
        w-full h-full text-white text-center"
      >
        <div>
          <div className="text-center md:text-left md:pt-0">
            <h2
              className="text-4xl sm:text-6xl font-medium text-white underline decoration-blue-500"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Contatos
            </h2>
            <p
              className="text-lg py-6 text-white text-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Para entrar em contato
            </p>
          </div>
          <div
            className="text-left grid grid-cols-1 justify-center items-center mt-20"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p className="text-xl py-4">Celular: (21) 97993-4197</p>

            <a
              className="flex items-center justify-center text-white gap-x-3 px-4 py-2 rounded border-2 border-green-500  hover:bg-green-500 duration-300"
              href="https://wa.me/5521979934197"
              atl="whastapp"
              target="_blank"
            >
              <FaWhatsapp size={24} color="#fff" />
              Whastapp
            </a>

            <p className="text-xl py-4">Email: joelson.s@outlook.com</p>
            <a
              className="flex items-center justify-center text-white gap-x-3 px-4 py-2 rounded border-2 border-blue-500  hover:bg-blue-500 duration-300"
              href="mailto:joelson.s@outlook.com"
              atl="email"
            >
              <HiOutlineMail size={24} color="#fff" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
