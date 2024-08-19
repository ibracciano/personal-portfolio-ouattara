// import React from 'react'

import { FaBorderAll } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <main className="font-body">
      <div className="flex flex-col lg:flex-row">
        {/* Menu de navigation */}
        <nav className="lg:w-[22%] flex flex-col py-2 bg-gray-900 border-b-4 lg:border-r-2 lg:border-b-0 border-white">
          <h1 className="hidden mb-5 text-center text-transparent lg:block OrangeToPink bg-clip-text">
            Dashboard
          </h1>
          <ul className="flex gap-5 lg:flex-col">
            <li>
              <NavLink
                to="/dashboard/add-post"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 border-cyan-500 px-2 py-2 bg-slate-800 flex items-center gap-2 "
                    : "px-2 flex items-center gap-2 bg-gray-900 py-2"
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
                    ? "border-b-4 border-cyan-500 px-2 py-2 bg-slate-800 flex items-center gap-2"
                    : "px-2 flex items-center gap-2 bg-gray-900 py-2"
                }
              >
                <FaBorderAll size={30} className=" OrangeToPink" />
                Tous les posts
              </NavLink>
            </li>
          </ul>
          <button className="p-2 mt-5 font-bold border-2 border-orange-500 rounded-full Dark bg-cyan-500">
            <span className="text-transparent OrangeToPink bg-clip-text">
              Deconnexion
            </span>
          </button>
        </nav>

        {/* contenu de la page */}
        <div className="lg:w-[78%] min-h-screen">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
