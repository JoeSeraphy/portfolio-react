import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

import logo from "../assets/imagens/logo.svg";

export function Footer() {
  const links = [
    {
      id: 1,
      link: "home",
    },
  ];
  const social = [
    {
      id: 1,
      icon: <FaLinkedin size={30} color="#fff" />,
      link: "https://www.linkedin.com/in/joelson-silva-89b117119/",
    },
    {
      id: 2,
      icon: <FaGithub size={30} color="#fff" />,
      link: "https://github.com/JoeSeraphy",
    },
    {
      id: 3,
      icon: <FaInstagram size={30} color="#fff" />,
      link: "https://www.instagram.com/joe.lson/",
    },
    {
      id: 4,
      icon: <FaFacebook size={30} color="#fff" />,
      link: "https://www.facebook.com/joelson.santos.925",
    },
  ];
  return (
    <div className="w-full py-8 px-4 bg-zinc-900  items-center">
      <div className="max-w-screen-xl grid md:flex py-2 gap-y-8 justify-center md:justify-between items-center mx-auto">
        <Link to={links[0].link} smooth duration={500}>
          <img
            src={logo}
            alt="logo"
            className="w-16 cursor-pointer mx-auto md:mx-0"
          />
        </Link>

        <span className="text-xs text-white font-light mx-auto md:mx-0">
          Desenvolvido com amor e carinho por joelson silva
        </span>
        <div className="flex gap-x-4 mx-auto md:mx-0">
          {social.map(({ id, icon, link }) => (
            <div key={id}>
              <a href={link} target="_blank">
                {icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
