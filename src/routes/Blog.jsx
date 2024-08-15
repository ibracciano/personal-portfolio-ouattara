// import React from 'react'

import { useState } from "react";
import { IoSettings } from "react-icons/io5";
import { auth, db, googleProvider } from "../firebaseConfig/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/slice";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Blog = () => {
  const { userInfo } = useSelector((state) => state.portfolio);
  //   console.log(userInfo);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  //   connexion via google
  const loginAtGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        // console.log(res.user);

        // stocker l'utilisateur connecté dans une variable user
        const user = res.user;

        // vérifier si l'utilisateur existe déjà dans la base de données
        const userRef = doc(db, "users", user.uid); // referencer le document

        // récupérer les données de l'utilisateur
        const userSnap = await getDoc(userRef);
        // console.log(userSnap);

        // vérifier si l'utilisateur existe déjà dans la base de données
        if (userSnap.exists()) {
          const userExist = { id: userSnap.id, ...userSnap.data() };

          dispatch(addUser(userExist));

          toast.warning("C'est bien de vous revoir 👏");
        } else {
          const newUser = {
            role: "client",
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          };
          // ajouter l'utilisateur à la base de données
          await setDoc(userRef, newUser);

          // mettre l'utilisateur dans le store
          dispatch(addUser(newUser));

          toast.success("Bienvenue à vous! 🤚");
        }
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  // se deconnecter
  const logoutAtGoogle = async () => {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());

        toast.error("Bye 😒");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <main>
      <div className="relative min-h-screen">
        <div
          className={`${
            open
              ? "w-[180px] h-[50px] justify-between "
              : "w-[60px] h-[60px] justify-center"
          } transition-all duration-500 VioletToIndigo bg-black flex items-center absolute top-[45%]`}
        >
          {userInfo && (
            <button
              className="flex items-center px-2 font-semibold"
              onClick={logoutAtGoogle}
            >
              {open && "Deconnexion"}
            </button>
          )}

          {!userInfo && (
            <button
              className="flex items-center px-2 font-semibold"
              onClick={loginAtGoogle}
            >
              {open && "Connexion"}
            </button>
          )}

          {/* {open && (
            <button
              className="flex items-center px-2 font-semibold"
              onClick={loginAtGoogle}
            >
              Connexion via
            </button>
          )} */}

          <button
            className={`bg-white text-cyan-500 w-[50px] h-[50px] flex items-center justify-center`}
            onClick={toggleOpen}
          >
            <IoSettings size={30} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Blog;
