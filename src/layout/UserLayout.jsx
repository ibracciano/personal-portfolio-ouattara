// import React from 'react'

import { Outlet } from "react-router-dom";
import Header from "../composants/Header";
// import Footer from "../composants/Footer";

const UserLayout = () => {
  return (
    <div className="lg:p-[2.5%] flex flex-col lg:flex-row bg-black">
      <div className="w-full lg:w-[90%] min-h-screen Darkness text-white rounded-lg">
        <Outlet />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default UserLayout;
