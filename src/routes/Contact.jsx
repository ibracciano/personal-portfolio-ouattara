// import React from 'react'
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [infos, setInfos] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    setInfos({ ...infos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email with template parameters
    const templateParams = {
      user_subject: infos.sujet,
      user_fullName: infos.nom,
      user_email: infos.email,
      user_message: infos.message,
    };

    // id necessary for the email
    const serviceID = "service_64vg614";
    const templateID = "template_wy4w258";
    const publicKey = "47nC5aw39-KiJ11yO";

    // sendEmail
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success("Email envoyé avec succès");
        setInfos({
          nom: "",
          email: "",
          sujet: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };

  // console.log(infos)

  return (
    <main className="font-body">
      <div className="py-10 bg-cover bg-pattern">
        <h1 className="text-center text-transparent OrangeToPink bg-clip-text">
          Contactez moi
        </h1>
        <form
          className="flex flex-col lg:w-[40%] gap-5 mx-auto mt-10 p-10 Darkness border-t-4 border-b-4 border-cyan-500"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="nom"
            id="nom"
            value={infos.nom}
            onChange={handleChange}
            className="p-3 bg-black border-b-4 border-white outline-none"
            placeholder="votre nom complet"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={infos.email}
            onChange={handleChange}
            className="p-3 bg-black border-b-4 border-white outline-none"
            placeholder="votre adresse email"
          />

          <input
            type="text"
            name="sujet"
            id="sujet"
            value={infos.sujet}
            onChange={handleChange}
            className="p-3 bg-black border-b-4 border-white outline-none"
            placeholder="votre sujet"
          />

          <textarea
            name="message"
            id="message"
            value={infos.message}
            onChange={handleChange}
            placeholder="votre message"
            className="p-3 bg-black border-b-4 border-white outline-none"
          ></textarea>

          <button
            type="submit"
            className="py-2 font-bold OrangeToPink focus:ring-2 focus:ring-white"
          >
            Envoyer
          </button>
          <div />
        </form>
      </div>
    </main>
  );
};

export default Contact;
