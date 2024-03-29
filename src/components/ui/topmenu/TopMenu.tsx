"use client";

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex py-4 bg-slate-100 px-5 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold `}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      <div className=" hidden sm:block">
        <Link
          className="m-3 p-2 rounded-md transition-all bg-gray-300 hover:bg-gray-200"
          href="/category/men"
        >
          Hombres
        </Link>
        <Link
          className="m-3 p-2 rounded-md transition-all bg-gray-300 hover:bg-gray-200"
          href="/category/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-3 p-2 rounded-md transition-all bg-gray-300 hover:bg-gray-200"
          href="/category/kid"
        >
          Niños
        </Link>
      </div>

      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-6 h-6" />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs bg-blue-700 text-white rounded-full px-1 font-bold -top-2 -right-2">
              3
            </span>
            <IoCartOutline className="w-6 h-6" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200 "
          onClick={openMenu}
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
