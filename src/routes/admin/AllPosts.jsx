// import React from "react";

import { toast } from "react-toastify";
import { getAllPosts } from "../../hook/hook";
import { useEffect, useState } from "react";
import PostCard from "../../composants/PostCard";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  // récuperer tous les post
  const getPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      toast.error("erreur de récupération");
      console.log(error.message);
    }
  };

  // appeler la fonction getPosts au chargement du composant
  useEffect(() => {
    getPosts();
  }, [posts]);

  // console.log(posts);
  return (
    <main className="p-10 mb-20 lg:mb-0">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </main>
  );
};

export default AllPosts;
