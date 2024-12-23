import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Typed from "typed.js";

const Navigation = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Welcome to SamarCrypto",
        "Track Crypto Prices in Real-time",
        "Explore Trending Cryptocurrencies",
        "Save Your Favorites",
      ],
      typeSpeed: 12,
      backSpeed: 12,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="text-2xl font-bold text-center text-lg text-blue flex items-center mt-12">
        <span ref={typedElement}></span>
      </div>
      <nav
        className="w-[40%] mt-8 flex justify-around align-middle
    border border-blue rounded-lg
    "
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) => {
            return `w-full text-base text-center font-nunito m-2.5

${isActive
                ? "bg-blue text-gray-300"
                : "bg-gray-200 text-gray-100hover:text-blue active:bg-blue active:text-gray-300"
              }
    border-0 cursor-pointer rounded capitalize font-semibold`;
          }}
        >
          Crypto
        </NavLink>

        <NavLink
          to="/trending"
          className={({ isActive }) => {
            return `w-full text-base text-center font-nunito m-2.5

${isActive
                ? "bg-blue text-gray-300"
                : "bg-gray-200 text-gray-100hover:text-blue active:bg-blue active:text-gray-300"
              }
    border-0 cursor-pointer rounded capitalize font-semibold`;
          }}
        >
          trending
        </NavLink>

        <NavLink
          to="/saved"
          className={({ isActive }) => {
            return `w-full text-base text-center font-nunito m-2.5

${isActive
                ? "bg-blue text-gray-300"
                : "bg-gray-200 text-gray-100hover:text-blue active:bg-blue active:text-gray-300"
              }
    border-0 cursor-pointer rounded capitalize font-semibold`;
          }}
        >
          saved
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
