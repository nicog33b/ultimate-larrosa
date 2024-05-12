import React, { useState } from "react";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlinePageview } from "react-icons/md";

const ProductCard = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md max-w-sm mx-auto p-4 cursor-pointer hover:shadow-lg transform hover:scale-101 transition duration-300">
      <div className="flex flex-col items-center">
        <Image
          src="/aceitedecoco.webp"
          alt="Producto Increíble"
          width={300}
          height={300}
          objectFit="cover"
          className="rounded-lg mb-4"
        />
        <div className="text-center">
          <h3 className="text-sm font-serif mb-2 kalam-light">Producto Increíble</h3>
     
        </div>     <p className="text-zinc-900 font-serif text-sm border p-2 rounded" ><span className="text-green-800 mr-1">$</span>19.99</p>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 bg-emerald-800 opacity-0  group-hover:opacity-100 transition duration-300`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-center items-center space-x-2 p-2">
          <button className="bg-transparent hover:bg-gray-200 text-white  rounded-full p-2 hover:text-black">
            <FaCartPlus className="text-xl " />
          </button>
          <button className="bg-transparent hover:bg-gray-200 text-white rounded-full p-2 hover:text-black">
            <MdOutlinePageview className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
