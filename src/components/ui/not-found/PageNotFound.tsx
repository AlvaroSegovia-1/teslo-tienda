import { titleFont } from "@/config/fonts";
import Link from "next/link";
import Image from "next/image";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-6xl`}>404</h2>
        <p className="font-semibold text-xl"> Ooops! Lo sentimos mucho. </p>
        {/* <img src="donkey" alt="donkey" /> */}
        <br />

        <div className="flex justify-center">
          <Image
            src="/imgs/pink-donkey.png"
            alt="imagen"
            width={100}
            height={100}
          />
        </div>

        <br />
        <p>
          <span>Puedes regresar al </span>
          <Link
            href="/"
            className="font-normal text-blue-400 hover:underline transition-all"
          >
            inicio
          </Link>
        </p>
      </div>
    </div>
  );
};
