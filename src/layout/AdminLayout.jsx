// import React from 'react'

import { FaBorderAll } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <main className="font-body">
      <div className="flex">
        {/* Menu de navigation */}
        <nav className="w-[22%] py-2 rounded-r-lg pr-2 my-[20%] bg-black">
          <h1 className="mb-5 text-center text-transparent OrangeToPink bg-clip-text">
            Dashboard
          </h1>
          <ul className="flex flex-col gap-5">
            <li>
              <NavLink
                to="/dashboard/add-post"
                className={({ isActive }) =>
                  isActive
                    ? "border-r-4 border-orange-500 px-2 py-1 bg-slate-800 flex items-center gap-2 rounded-r-full"
                    : "px-2 flex items-center gap-2"
                }
              >
                <MdAddCircle size={30} className="rounded-full OrangeToPink" />
                Ajouter un post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/all-post"
                className={({ isActive }) =>
                  isActive
                    ? "border-r-4 border-orange-500 px-2 py-1 bg-slate-800 flex items-center gap-2 rounded-r-full"
                    : "px-2 flex items-center gap-2"
                }
              >
                <FaBorderAll size={30} className=" OrangeToPink" />
                Tous les posts
              </NavLink>
            </li>
          </ul>
          <button className="p-2 mt-5 font-bold text-transparent rounded-full OrangeToPink bg-clip-text">
            Deconnexion
          </button>
        </nav>

        {/* contenu de la page */}
        <div>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
