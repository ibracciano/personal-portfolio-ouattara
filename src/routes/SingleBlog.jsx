// import React from "react";

// import { IoEyeSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const SingleBlog = () => {
  const location = useLocation();
  const { state } = location;
  const blog = state.item;
  //   console.log(blog); // contains the blog object

  return (
    <main className="flex items-center justify-center pb-28 lg:py-10">
      <div className="lg:w-[50%] ">
        <div>
          <img src={blog.image} alt="image" className="h-full" />
        </div>

        <div className="p-5 Dark">
          {/* Titre du blog */}
          <h2 className="text-transparent OrangeToPink bg-clip-text">
            {blog.title}
          </h2>

          {/* contenu du blog */}
          <p className="my-5 text-sm">{blog.content}</p>

          {/* Date de publication */}
          {/* <p>créé le : {blog.createdAt}</p> */}
          <p className="mt-5">Auteur : {blog.author}</p>

          {/* lien vers le détail du blog */}
          <p className="mt-5 italic">
            <Link to={blog.link}>&rarr; Consulter en ligne</Link>
          </p>

          {/* <p className="flex items-center gap-2 mt-5">
            <span>Catégorie : </span>
            <span className="p-1 rounded-md OrangeToPink">{blog.category}</span>
          </p> */}

          {/* <div className="space-x-2">
            <button className="p-2 mt-5 font-bold border-2 border-orange-500 rounded-full Dark bg-cyan-500">
              <IoEyeSharp />
            </button>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default SingleBlog;
