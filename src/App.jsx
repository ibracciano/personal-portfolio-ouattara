// import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserLayout from "./layout/UserLayout"
import Home from "./routes/Home"
import Projects from "./routes/Projects"
import Portfolio from "./routes/Portfolio"
import Blog from "./routes/Blog"
import Contact from "./routes/Contact"

const App = () => {
  // creation des routes
  const router = createBrowserRouter([
    {
      path: '/', element: <UserLayout />, children: [
        { path: '', element: <Home /> },
        { path: 'projects', element: <Projects /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'blog', element: <Blog /> },
        { path: 'contact', element: <Contact /> },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App