// import React from 'react'

const Contact = () => {
  return (
    <main className="font-body">
      <div className="py-10 bg-cover bg-pattern">
        <h1 className="text-center text-transparent OrangeToPink bg-clip-text">
          Contactez moi
        </h1>
        <form className="flex flex-col lg:w-[40%] gap-5 mx-auto mt-10 p-10 Darkness border-t-4 border-b-4 border-cyan-500">
          <input
            type="text"
            name="nom"
            id="nom"
            className="p-3 bg-black border-b-4 border-white outline-none"
            placeholder="votre nom complet"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="p-3 bg-black border-b-4 border-white outline-none"
            placeholder="votre adresse email"
          />

          <input
            type="text"
            name="subject"
            id="subject"
            className="p-3 bg-black border-b-4 border-white outline-none"
            placeholder="votre sujet"
          />

          <textarea
            name="message"
            id="message"
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
