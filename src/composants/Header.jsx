// import React from 'react'
import { BsPassportFill } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { MdAddHome, MdContacts } from "react-icons/md";
import { RiProjectorFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  const icons = [
    { path: "/", icon: <MdAddHome size={30} />, nom: "Home" },
    {
      path: "/portfolio",
      icon: <BsPassportFill size={30} />,
      nom: "Portfolio",
    },
    { path: "/projects", icon: <RiProjectorFill size={30} />, nom: "Projects" },
    { path: "/blog", icon: <FaBlogger size={30} />, nom: "Blog" },
    { path: "/contact", icon: <MdContacts size={30} />, nom: "Contact" },
  ];

  return (
    <header className="md:w-[5%] md:mt-10 fixed bottom-0 w-full  shadow shadow-white md:right-[95px] Darkness z-50 text-white md:flex justify-center rounded-md">
      <nav>
        <ul className="flex justify-center px-2 py-5 md:gap-5 md:flex-col">
          {icons.map((icon, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col justify-center items-center gap-1 VioletToIndigo p-2 rounded-lg border-2 w-16 h-16 "
                  : "p-2 flex flex-col justify-center items-center gap-1 w-16 h-16"
              }
              to={icon.path}
            >
              <button>{icon.icon}</button>
              <span className="font-semibold text-[8px] md:text-xs">
                {icon.nom}
              </span>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
