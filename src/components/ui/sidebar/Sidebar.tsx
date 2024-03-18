"use client";

import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

import { useUIStore } from "@/store";
import clsx from "clsx";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed right-0 top-0 w-[400px] h-screen bg-white z-20 px-8 transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-4 right-5 cursor-pointer  hover:text-red-400"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-20">
          <IoSearchOutline size={20} className="absolute top-1 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-100 rounded pl-10 pr-10 border-b-2 text-xl border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}
        <Link
          href="/"
          className="flex items-center mt-8 p-2 hover:bg-gray-200 rounded transition-all "
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-lg">Perfil</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-8 p-2 hover:bg-gray-200 rounded transition-all "
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-lg">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-8 p-2 hover:bg-gray-200 rounded transition-all "
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-lg">Ingresar</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-8 p-2 hover:bg-gray-200 rounded transition-all "
        >
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-lg">Salir</span>
        </Link>

        {/* Line Separator */}

        <div className="w-full h-1 bg-gray-300 rounded my-10" />

        <Link
          href="/"
          className="flex items-center mt-8 p-2 hover:bg-gray-200 rounded transition-all "
        >
          <IoShirtOutline size={30} />
          <span className="ml-3 text-lg">Productos</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-8 p-2 hover:bg-gray-200 rounded transition-all "
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-lg">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-8 p-2 hover:bg-gray-200 rounded transition-all "
        >
          <IoPeopleOutline size={30} />
          <span className="ml-3 text-lg">Clientes</span>
        </Link>
      </nav>
    </div>
  );
};
