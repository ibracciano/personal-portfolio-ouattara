// import React from 'react'
import { BsPassportFill } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { MdAddHome, MdContacts } from "react-icons/md";
import { RiProjectorFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { userInfo } = useSelector((state) => state.portfolio);
  // console.log(userInfo);

  const icons = [
    { path: "/", icon: <MdAddHome size={30} />, nom: "Home" },
    {
      path: "/resume",
      icon: <BsPassportFill size={30} />,
      nom: "Resume",
    },
    { path: "/projects", icon: <RiProjectorFill size={30} />, nom: "Projects" },
    { path: "/blog", icon: <FaBlogger size={30} />, nom: "Blog" },
    { path: "/contact", icon: <MdContacts size={30} />, nom: "Contact" },
  ];

  return (
    <header className="md:w-[5%] md:mt-10 fixed bottom-0 w-full border-2 border-cyan-500 lg:border-none md:right-[85px] Darkness z-50 text-white md:flex justify-center rounded-md">
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
        {userInfo && (
          <div className="absolute -top-10 lg:-top-14 w-16 h-16 bg-white left-[42%] lg:left-1 rounded-full border-4 border-cyan-500">
            <img
              src={userInfo.photo}
              alt="photo"
              className="w-full h-full rounded-full"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
