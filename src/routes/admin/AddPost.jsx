// import React from "react";

import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoIosCloudUpload } from "react-icons/io";
import { db, storage } from "../../firebaseConfig/firebase";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
// import Image from "../../assets/images.png";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    choix: "",
    image: "",
    typeOf: "",
    createdAt: Date.now().toLocaleString(),
  });

  // console.log(post.image);

  const [loading, setLoading] = useState(false);

  // enregister les valeurs du formulaire
  const handleInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // enregistrer l'image du post
  // const handleImageChange = (e) => {
  //   setPost({ ...post, image: e.target.files[0] });
  // };

  // soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    // verifier si tous les champs sont saisies
    if (
      !post.title ||
      !post.content ||
      !post.author ||
      !post.category ||
      !post.choix ||
      !post.image ||
      !post.typeOf
    ) {
      toast.error("Tous les champs doivent être remplis");
      return;
    }
    // console.log(post);

    // creer la référence du post dans la base de données
    const postRef = collection(db, "posts");

    // enregistrer les données du post dans la base de données
    try {
      await addDoc(postRef, post);
      toast.success("post enregistré avec succès");
      setPost({
        title: "",
        content: "",
        author: "",
        category: "",
        choix: "",
        image: "",
        link: "",
        typeOf: "",
      });
    } catch (error) {
      toast.error("erreur dans l'enregistremement");
      console.log(error.message);
    }
  };

  // console.log(post.image);

  // function pour uploader l'image
  const handleImageChange = (e) => {
    // stocker l'image dans une variable
    const imageFile = e.target.files[0];

    // creer un reference pour le storage
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);

    // importer l'image
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    // suivre l'avancée du téléversement
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // stocker l'url de l'image dans la state
          setPost({ ...post, image: downloadURL });
          // setUrlImage(downloadURL);
          const nameFile = uploadTask.snapshot.ref.name;
          toast.success(`${nameFile} uploaded successfully`);
          setTimeout(() => {
            setLoading(true);
          }, 500);
        });
      }
    );
  };

  // supprimer l'image dans le storage
  const deleteImage = () => {
    const storageRef = ref(storage, `${post.image}`);

    deleteObject(storageRef)
      .then(() => {
        toast.warning("Image supprimée avec succès");
        setLoading(false);
        setPost({ ...post, photo: null });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <main className="flex items-center justify-center min-h-screen mt-10 mb-28 lg:my-10">
      <div className="w-full lg:w-[70%] py-10 lg!bg-black px-10 flex flex-col justify-center items-center lg:rounded-lg">
        <h1 className="mb-5 text-center text-transparent OrangeToPink bg-clip-text">
          Ajouter un post
        </h1>
        <form className="w-full lg:w-[70%] flex flex-col gap-5">
          {/* Image du post */}
          <div className="h-[200px] border border-dashed rounded-lg relative">
            <label>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <IoIosCloudUpload size={40} />
                <p>Téléverser une image</p>
              </div>
              <input
                type="file"
                name="image"
                className="hidden w-full h-full"
                // value={Image}
                onChange={(e) => handleImageChange(e)}
              />
              {loading && (
                <img
                  src={post.image}
                  alt="img"
                  className="absolute inset-0 object-cover w-full h-full rounded-lg"
                />
              )}
            </label>{" "}
            {/* Bouton supprimer l'image */}
            <AiFillDelete
              size={30}
              className="absolute p-1 rounded-full bottom-2 right-2 OrangeToPink"
              onClick={deleteImage}
            />
            <br />
          </div>

          {/* Titre du post */}
          <div>
            <label htmlFor="title">Titre du post</label> <br />
            <input
              type="text"
              name="title"
              placeholder="Titre du post"
              onChange={(e) => handleInputChange(e)}
              value={post.title}
              className="w-full px-3 py-2 border rounded-lg outline-none Dark focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Auteur du post */}
          <div>
            <label htmlFor="author">Auteur du post</label> <br />
            <input
              type="text"
              name="author"
              placeholder="Auteur du post"
              onChange={(e) => handleInputChange(e)}
              value={post.author}
              className="w-full px-3 py-2 border rounded-lg outline-none Dark focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Catégorie du post */}
          <div>
            <label htmlFor="category">Catégorie du post</label> <br />
            <input
              type="text"
              name="category"
              placeholder="Catégorie du post"
              onChange={(e) => handleInputChange(e)}
              value={post.category}
              className="w-full px-3 py-2 border rounded-lg outline-none Dark focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Contenu du post */}
          <div>
            <label htmlFor="content">Contenu du post</label> <br />
            <textarea
              type="text"
              name="content"
              placeholder="Contenu du post"
              onChange={(e) => handleInputChange(e)}
              value={post.content}
              className="w-full px-3 py-2 border rounded-lg outline-none Dark focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* lien vers le post */}
          <div>
            <label htmlFor="link">Lien du post</label> <br />
            <input
              type="text"
              name="link"
              placeholder="Lien du post"
              onChange={(e) => handleInputChange(e)}
              value={post.link}
              className="w-full px-3 py-2 border rounded-lg outline-none Dark focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* type du post */}
          <div>
            <label htmlFor="typeOf">Type du post</label> <br />
            <input
              type="text"
              name="typeOf"
              placeholder="Type du post"
              onChange={(e) => handleInputChange(e)}
              value={post.typeOf}
              className="w-full px-3 py-2 border rounded-lg outline-none Dark focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <select
              name="choix"
              id="choix"
              onChange={handleInputChange}
              value={post.choix}
              className="py-1 border rounded-lg Dark"
            >
              <option value="">Nouveauté</option>
              <option value="non" className="text-black">
                Non
              </option>
              <option value="oui" className="text-black">
                Oui
              </option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 font-bold text-white bg-pink-500 rounded-lg hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              onClick={handleSubmit}
            >
              Ajouter le post
            </button>{" "}
            <div />
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddPost;
