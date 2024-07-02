import React, { useState } from "react";
import logo from "../assets/imagens/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll/modules";

export function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "sobre",
    },
    {
      id: 3,
      link: "projetos",
    },
    {
      id: 4,
      link: "tecnologias",
    },
    {
      id: 5,
      link: "contatos",
    },
  ];

  return (
    <div className="px-4 py-2 bg-zinc-900 fixed justify-center w-screen items-center z-10">
      <div className="max-w-screen-xl flex py-2 justify-between mx-auto items-center">
        <div className="cursor-pointer">
          <Link to={links[0].link} smooth duration={400}>
            <img src={logo} alt="logo" className="w-16" />
          </Link>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-white hover:text-blue-300 hover:scale-105 hover:underline duration-200"
            >
              <Link to={link} smooth duration={400}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
          {nav ? (
            <FaTimes size={30} color="#fff" />
          ) : (
            <FaBars size={30} color="#fff" />
          )}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen bg-zinc-900 duration-200">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize text-4xl py-4 text-white hover:text-blue-300 hover:scale-105 hover:underline duration-200"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={400}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
