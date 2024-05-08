import React, { useState } from "react";
import Image from "next/image";

import '../pages.css';


const ProductCard = () => {
    const [showButtons, setShowButtons] = useState(false);

    const handleMouseEnter = () => {
        setShowButtons(true);
    };

    const handleMouseLeave = () => {
        setShowButtons(false);
    };

    return (
        <div className="max-w-md mx-auto p-4 shadow-md relative">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative rounded overflow-hidden"
            >
                <Image
                    src="/aceitedecoco.webp"
                    alt="Producto Increíble"
                    layout="responsive"
                    width={400}
                    height={400}
                    objectFit="cover"
                />
                {showButtons && (
                    <div className="absolute top-4 right-4 flex flex-col space-y-2">
                        <button className="bg-emerald-500 hover:bg-green-600 text-white px-3 py-2 rounded-md">
                         
                        </button>
                        <button className="bg-yellow-600 hover:bg-amber-400 text-white px-3 py-2 rounded-md">
                       
                        </button>
                    </div>
                )}
            </div>
            <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold mb-2">Producto Increíble</h2>
                <p className="text-gray-600 mb-4">$19.99</p>
                <div className="flex justify-center space-x-4">
                    {/* Resto del código de los botones y cantidad */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
