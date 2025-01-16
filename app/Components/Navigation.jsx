"use client";
import Image from "next/image";
import Button1 from "../ComponentesIndividuales/Button1";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-[#f8fffd] w-full shadow-lg h-[5rem]  text-[#00231b] fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:h-full">
        <div className="flex items-center justify-between lg:h-full ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              width={80}
              height={60}
              src={"/novaLogo.png"}
              alt="Logo de Empresa"
              className="p-1"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-6  ">
            <ul className="flex flex-row items-center justify-center gap-2 font-bakbak md:text-xl">
              <li
                className="hover:text-[#554dfe] hover:font-bold
                 hover:scale-105 cursor-pointer font-medium w-32 p-1 flex justify-center"
              >
                <a href="#hero">Inicio</a>
              </li>
              <li className="hover:text-[#554dfe] hover:font-bold hover:scale-105 cursor-pointer font-medium w-32 p-1 flex justify-center">
                <a href="#caracteristicas">Sobre Nova</a>
              </li>
              <li className="hover:text-[#554dfe] hover:font-bold hover:scale-105 cursor-pointer font-medium w-32 p-1 flex justify-center">
                <a href="#precios">Precios</a>
              </li>
              <li className="hover:text-[#554dfe] hover:font-bold hover:scale-105 cursor-pointer font-medium w-32 p-1 flex justify-center">
                <a href="#formulario">Contacto</a>
              </li>
            </ul>

            <div>
              <Button1 text="Login" href="https://app.novagestion.net.ar" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden  ${openMenu ? "left-[25rem]" : "left-[11rem]"} border
       border-black absolute h-screen-plus-10 pt-12 -top-11 text-white  duration-100 ease-in-out w-60 bg-[#554dfe]`}
        id="mobile-menu"
      >
        {/* Mobile Menu Button */}
        <div className={`flex md:hidden relative left-36  ${openMenu ? "hidden": ""} `}>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <span className="sr-only">Close main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="px-2 pt-2 pb-3 space-y-1 font-bakbak">
          <li className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#554dfe]">
          <a href="#hero">Inicio</a>
          </li>
          <li className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#8c87f1]">
          <a href="#caracteristicas">Sobre Nova</a>
          </li>
          <li className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#554dfe]">
          <a href="#precios">Precios</a>
          </li>
          <li className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#554dfe]">
          <a href="#formulario">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
