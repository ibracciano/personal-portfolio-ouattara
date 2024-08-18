// import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Portfolio from "./routes/Portfolio";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Dashboard from "./routes/admin/Dashboard";
import AdminLayout from "./layout/AdminLayout";
import AllPosts from "./routes/admin/AllPosts";
import AddPost from "./routes/admin/AddPost";

const App = () => {
  // creation des routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "projects", element: <Projects /> },
        { path: "resume", element: <Portfolio /> },
        { path: "blog", element: <Blog /> },
        { path: "contact", element: <Contact /> },
        {
          path: "dashboard",
          element: <AdminLayout />,
          children: [
            { path: "", element: <Dashboard /> },
            { path: "all-post", element: <AllPosts /> },
            { path: "add-post", element: <AddPost /> },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
