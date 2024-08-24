// import React from 'react'

import { ImHtmlFive } from "react-icons/im";
import Photo from "../assets/profile.webp";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
// import { progress } from "framer-motion";

const Portfolio = () => {
  const languagesFront = [
    {
      lang: "HTML",
      icon: <ImHtmlFive className="w-8 h-8 text-orange-500" />,
      progress: 90,
    },
    {
      lang: "CSS",
      icon: <FaCss3Alt className="w-8 h-8 text-cyan-500" />,
      progress: 90,
    },
    {
      lang: "TAILWINDCSS",
      icon: <RiTailwindCssFill className="w-8 h-8 text-cyan-500" />,
      progress: 90,
    },

    {
      lang: "JAVASCRIPT",
      icon: <TbBrandJavascript className="w-8 h-8 text-yellow-500" />,
      progress: 70,
    },
    {
      lang: "TYPESCRIPT",
      icon: <SiTypescript className="w-8 h-8 text-yellow-500" />,
      progress: 50,
    },
    {
      lang: "REACT",
      icon: <SiReact className="w-8 h-8 text-blue-500" />,
      progress: 80,
    },
  ];

  const languagesBack = [
    {
      lang: "NODEJS",
      icon: <SiNodedotjs className="w-8 h-8 text-green-500" />,
      progress: 70,
    },
    {
      lang: "FIREBASE",
      icon: <IoLogoFirebase className="w-8 h-8 text-purple-500" />,
      progress: 70,
    },
    {
      lang: "MONGODB",
      icon: <SiMongodb className="w-8 h-8 text-green-500" />,
      progress: 65,
    },
  ];

  const education = [
    {
      school: "HEC ABIDJAN",
      degree: "Master I en Informatique",
      year: "2023 - 2024",
    },
    {
      school: "INSTITUT SUPERIEUR DES TECHNOLOGIES ET DU MANAGEMENT(ISTM)",
      degree: "Licence en Genie Logiciel",
      year: "2022 - 2023",
    },
    {
      school: "LYCEE MODERNE DE TREICHVILLE",
      degree: "Baccalaureat Serie C",
      year: "2015 - 2016",
    },
  ];

  const skills = [
    {
      part: "Frontend",
      module: (
        <ul className="space-y-2 font-normal">
          <li>
            HTML/CSS : Maîtrise de la structure et du style des pages web.
          </li>
          <li>
            JavaScript ES6+ : Bonne compréhension des fonctionnalités modernes
            de JavaScript.
          </li>
          <li>
            Frameworks/Libraries : Expérience avec React.js ou Vue.js pour le
            développement d’interfaces utilisateur dynamiques.
          </li>
          <li>
            Responsive Design : Création de sites web adaptatifs utilisant des
            frameworks Tailwind CSS.
          </li>
          <li>
            Gestion de l'état : Utilisation de Redux, Context API ou Vuex pour
            gérer l'état des applications
          </li>
        </ul>
      ),
    },

    {
      part: "Back-end",
      module: (
        <ul className="space-y-2 font-normal">
          <li>Node.js : Développement de serveurs et d’API RESTful.</li>
          <li>
            Frameworks : Utilisation de Express.js pour créer des applications
            backend légères.
          </li>
          <li>
            Bases de données : Connaissance de MongoDB, et Firebase pour la
            gestion des données.
          </li>
          <li>
            Authentification & Sécurité : Implémentation de JWT ou OAuth pour la
            sécurité des applications.
          </li>
          <li>
            APIs REST : Création et consommation d’APIs pour la communication
            entre le frontend et le backend.
          </li>
        </ul>
      ),
    },

    {
      part: "Softs skills",
      module: (
        <ul className="space-y-2 font-normal">
          <li>
            Résolution de problèmes : Capacité à analyser et résoudre
            efficacement les bugs et les défis techniques.
          </li>
          <li>
            Communication : Compétences en collaboration avec des équipes
            pluridisciplinaires (designers, développeurs, clients).
          </li>
          <li>
            Autonomie et apprentissage continu : Capacité à apprendre de
            nouvelles technologies rapidement.
          </li>
        </ul>
      ),
    },

    {
      part: "Outils & Méthodologies",
      module: (
        <ul className="space-y-2 font-normal">
          <li>Git/GitHub : Gestion de versions et collaboration en équipe.</li>
        </ul>
      ),
    },
  ];

  return (
    <main className="pb-20 font-body">
      <div>
        <div className="flex flex-col lg:flex-row">
          {/* left */}
          <div className="lg:w-[30%] lg:h-screen relative ">
            {/* image */}
            <img
              src={Photo}
              alt="photo-profil"
              className="object-cover w-full h-full saturate-0"
            />
            {/* fond noir */}
            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40"></div>

            {/* Niveau étude */}
            <div className="absolute bottom-0 flex flex-col items-center w-full py-2 border-t-2 border-b-2 border-pink-600 Darkness">
              <p className="">MASTER I en Informatique à HEC ABIDJAN</p>
            </div>
          </div>

          {/* right */}
          <div className="p-3 lg:p-10 lg:w-[70%] ">
            {/* spécialisation */}
            <h1 className="flex items-center text-transparent mb-7 lg:text-start font-poppins VioletToIndigo bg-clip-text">
              <span>Je suis </span>
              <span className="ml-3 text-transparent OrangeToPink bg-clip-text">
                Développeur Fullstack JS
              </span>
            </h1>

            {/* Frontend */}
            <div className="w-full px-2 py-5 border-b-2 Dark border-stone-300">
              <h2 className="px-2 mb-2 text-xl font-bold border-l-4 border-cyan-500">
                Développement Frontend
              </h2>
              <div className="grid grid-cols-2 mt-5 gap-y-5 lg:gap-5 lg:grid-cols-3">
                {languagesFront.map((language, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <p>{language.icon}</p>
                    <span className="text-[8px] lg:text-[12px]">
                      {language.lang}
                    </span>
                    <progress value={language.progress} max={100} />
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="w-full px-2 py-5 mt-10 border-b-2 Dark border-stone-300">
              <h2 className="px-2 mb-2 text-xl font-bold border-l-4 border-cyan-500">
                Développement Backend
              </h2>
              <div className="grid grid-cols-2 mt-5 gap-y-5 lg:gap-5 lg:grid-cols-3">
                {languagesBack.map((language, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <p>{language.icon}</p>
                    <span className="text-[8px] lg:text-[12px]">
                      {language.lang}
                    </span>
                    <progress value={language.progress} max={100} />
                  </div>
                ))}
              </div>
            </div>

            {/* Profil */}
            <div className="my-10">
              <h3 className="mb-4 text-3xl font-black text-stone-400">
                01.Profil
              </h3>
              <p className="text-justify">
                Développeur JavaScript Junior passionné et motivé, avec une
                solide compréhension des technologies web front-end et back-end.
                Maîtrise des langages comme JavaScript, HTML, et CSS, ainsi que
                des frameworks tels que React et Node.js. Fort d'une expérience
                pratique dans la création d'applications web dynamiques et
                interactives, je suis capable de collaborer efficacement en
                équipe pour résoudre des défis techniques. Je suis à la
                recherche d'opportunités pour continuer à développer mes
                compétences et contribuer à des projets innovants.
              </p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col justify-between gap-5 px-3 py-10 text-black bg-white lg:px-20 lg:flex-row">
          {/* competences */}
          <div className="lg:w-[60%]">
            <h2>COMPETENCES</h2>
            <div>
              {skills.map((skill, index) => (
                <div key={index} className="font-semibold">
                  <h4 className="my-2 font-bold text-transparent OrangeToPink bg-clip-text">
                    {skill.part}
                  </h4>
                  <p>{skill.module} </p>
                </div>
              ))}
            </div>
          </div>

          {/* education */}
          <div className="lg:w-[40%]">
            <div className="flex flex-col gap-5 py-5 ">
              <h2>EDUCATION</h2>
              {education.map((education, index) => (
                <div key={index}>
                  <h3 className="font-bold text-transparent OrangeToPink bg-clip-text">
                    {education.school}
                  </h3>
                  <p>{education.degree}</p>
                  <p>{education.year}</p>
                </div>
              ))}
            </div>

            <div className="my-10">
              <h3 className="mb-4 text-3xl font-black text-stone-400">
                02.Hobbies
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <p className="text-justify">
                    <strong>Veille technologique</strong> : Passion pour la
                    découverte des dernières tendances en développement web et
                    des nouvelles technologies.
                  </p>
                </li>

                <li>
                  <p className="text-justify">
                    <strong>Lecture de blogs tech </strong> : Suivi des blogs et
                    podcasts spécialisés pour rester à jour sur les bonnes
                    pratiques et les innovations.
                  </p>
                </li>

                <li>
                  <p>
                    <strong>Participation à des hackathons</strong> : Goût pour
                    la compétition et le travail d’équipe autour de projets
                    créatifs et innovants.
                  </p>
                </li>
              </ul>
            </div>

            <button className="px-3 py-5 font-bold text-white OrangeToPink hover:VioletToIndigo">
              <a
                href="CV_OUATTARA_IBRAHIM_STAGE.pdf"
                download="CV_OUATTARA_IBRAHIM_STAGE.pdf"
              >
                Télecharger mon CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
