// import React from 'react'

import { useEffect, useState } from "react";
import { getAllPosts } from "../hook/hook";
import ProjectCard from "../composants/ProjectCard";

const Projects = () => {
  const [projets, setProjets] = useState([]);

  const getProject = async () => {
    const posts = await getAllPosts();
    setProjets(posts.filter((projet) => projet.typeOf === "projet"));
  };

  useEffect(() => {
    getProject();
  }, []);

  //   console.log(projets);

  return (
    <main className="px-10 pt-10 pb-32 bg-no-repeat bg-cover lg:pb-10 bg-pattern font-body">
      <div>
        <h1 className="text-transparent OrangeToPink bg-clip-text">
          Mes Projets
        </h1>
        <p className="mt-2 mb-5 text-gray-600">
          Découvrez les derniers projets créés par moi.
        </p>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          {projets.map((post) => (
            <ProjectCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
