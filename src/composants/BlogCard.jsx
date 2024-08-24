// import React from "react";

import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    console.log(item);
    const slug = item.title.split(" ").join("-");
    navigate(`/blog/${slug}`, { state: { item: item } });
  };

  return (
    <div className="flex flex-col items-center">
      {/* image du post */}
      <div>
        <img src={post.image} alt="image" className="h-full" />
      </div>

      <div className="p-5 Dark">
        {/* Titre du post */}
        <h2 className="text-transparent OrangeToPink bg-clip-text">
          {post.title}
        </h2>

        {/* contenu du post */}
        {/* <p className="my-5 text-sm">{post.content}</p> */}

        {/* Date de publication */}
        {/* <p>créé le : {post.createdAt}</p> */}
        <p className="mt-5">By @{post.author}</p>

        {/* lien vers le détail du post */}
        <p className="mt-5 italic">
          <Link to={post.link}>&rarr; Consulter en ligne</Link>
        </p>

        <p className="flex items-center gap-2 mt-5">
          <span>Catégorie : </span>
          <span className="p-1 rounded-md OrangeToPink">{post.category}</span>
        </p>

        <div className="space-x-2">
          <button
            className="p-2 mt-5 font-bold border-2 border-orange-500 rounded-full Dark bg-cyan-500"
            onClick={() => handleNavigate(post)}
          >
            <IoEyeSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
