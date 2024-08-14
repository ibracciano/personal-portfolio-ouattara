// import React from 'react'
import { ImHtmlFive } from "react-icons/im";
import Photo from "../assets/profile.webp";
import Gomycode from "../assets/gomycode.jpg";
import Academy from "../assets/academy.png";
import Rac from "../assets/rac.jpg";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { RiTailwindCssFill } from "react-icons/ri";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Développeur Web", "Développeur React", "Développeur Frontend"],
    loop: true,
    cursor: <Cursor className="text-white" />,
    delay: 1000,
    deleteSpeed: 150,
  });
  const languages = [
    {
      lang: "HTML",
      icon: <ImHtmlFive className="w-8 h-8 text-orange-500" />,
    },
    {
      lang: "CSS",
      icon: <FaCss3Alt className="w-8 h-8 text-cyan-500" />,
    },
    {
      lang: "TAILWINDCSS",
      icon: <RiTailwindCssFill className="w-8 h-8 text-cyan-500" />,
    },

    {
      lang: "JAVASCRIPT",
      icon: <TbBrandJavascript className="w-8 h-8 text-yellow-500" />,
    },
    {
      lang: "TYPESCRIPT",
      icon: <SiTypescript className="w-8 h-8 text-yellow-500" />,
    },
    {
      lang: "REACT",
      icon: <SiReact className="w-8 h-8 text-blue-500" />,
    },

    {
      lang: "NODEJS",
      icon: <SiNodedotjs className="w-8 h-8 text-green-500" />,
    },
    {
      lang: "FIREBASE",
      icon: <IoLogoFirebase className="w-8 h-8 text-purple-500" />,
    },
    {
      lang: "MONGODB",
      icon: <SiMongodb className="w-8 h-8 text-green-500" />,
    },
  ];

  //   settings pour react slick
  let settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slideRef = useRef(null);
  //   console.log(slideRef);

  return (
    <main className="px-5 pt-5 pb-24 lg:p-10 font-body">
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
        {/* left */}
        <div className="lg:w-[50%]">
          <h1 className="mb-5 text-center text-transparent lg:text-start font-poppins VioletToIndigo bg-clip-text">
            Je suis <span>{typeEffect}</span>
            <Cursor />
          </h1>
          <hr />
          <h2 className="flex items-center justify-center gap-5 my-5 lg:justify-start">
            OUATTARA IBRAHIM YACOUBA
          </h2>
          <hr />
          <div className="grid justify-between grid-cols-3 mt-5 gap-y-5 lg:gap-3 lg:grid-cols-4">
            {languages.map((language, index) => (
              <div key={index} className="flex items-center gap-2">
                <p>{language.icon}</p>
                <span className="text-[8px] lg:text-[12px]">
                  {language.lang}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between gap-12 py-3 mt-10 border-t-4 border-b-4 border-cyan-600 Darkness">
            <div className="">
              <p className="text-6xl font-bold text-transparent RedToOrange bg-clip-text">
                1+
              </p>
              <p className="text-[12px] lg:text-base">An d'expérience</p>
            </div>

            <div className="">
              <p className="text-6xl font-bold text-transparent VioletToRed bg-clip-text">
                10+
              </p>
              <p className="text-[12px] lg:text-base">Mini Projets Réalisés</p>
            </div>

            <div className="">
              <p className="text-6xl font-bold text-transparent OrangeToPink bg-clip-text">
                2+
              </p>
              <p className="text-[12px] lg:text-base">
                En cours de réalisation
              </p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="lg:w-[50%] lg:h-[500px]">
          <img
            src={Photo}
            alt="photo"
            className="object-cover w-full h-full border-4 border-white rounded-lg shadow saturate-150 "
          />
          <h2 className="text-4xl font-bold"></h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-5" onClick={() => slideRef.current.slickPrev()}>
          <IoIosArrowBack size={40} className="p-2 rounded-lg VioletToIndigo" />
        </button>

        <Slider
          {...settings}
          className="mt-10 w-[70%] lg:w-[40%] mx-auto"
          ref={slideRef}
        >
          {/* form 1 */}
          <div>
            <div className="flex items-center gap-3 lg:flex-row">
              <img
                src={Rac}
                alt="gomycode Logo"
                className="w-[100px] rounded-lg"
              />
              <div>
                <h2 className="text-transparent VioletToIndigo bg-clip-text">
                  Certifié Fullstack Js
                </h2>
                <span className="text-transparent VioletToIndigo bg-clip-text">
                  en 2024
                </span>
              </div>
            </div>
          </div>

          {/* form 2 */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={Gomycode}
                alt="gomycode Logo"
                className="w-[100px] rounded-lg"
              />
              <div>
                <h2 className="text-transparent VioletToIndigo bg-clip-text">
                  Certifié Fullstack Js
                </h2>
                <span className="text-transparent VioletToIndigo bg-clip-text">
                  en 2022
                </span>
              </div>
            </div>
          </div>

          {/* form 3 */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={Academy}
                alt="gomycode Logo"
                className="w-[100px] rounded-lg"
              />
              <div>
                <h2 className="text-transparent VioletToIndigo bg-clip-text">
                  Certifié Référent Digital
                </h2>
                <span className="text-transparent VioletToIndigo bg-clip-text">
                  en 2021
                </span>
              </div>
            </div>
          </div>
        </Slider>
        <button className="mt-5" onClick={() => slideRef.current.slickNext()}>
          <IoIosArrowForward
            size={40}
            className="p-2 rounded-lg VioletToIndigo"
          />
        </button>
      </div>
    </main>
  );
};

export default Home;
