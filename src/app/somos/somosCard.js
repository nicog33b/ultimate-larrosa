import React from 'react';
import Image from 'next/image';

function SomosCard({ imageDirection, imageSrc, cardDescription }) {
  // Alternar la dirección de la imagen en función de imageDirection
  const imageAlignment = imageDirection === 'right' ? 'md:order-last' : 'md:order-first';

  return (
    <div className={`flex ${imageDirection === 'left' ? 'flex-row' : 'flex-row-reverse'} my-4 md:my-6 lg:my-8 items-center justify-center`}>
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center hover:shadow-2xl transition-shadow duration-300">
        <div className={`${imageAlignment} w-1/3`}>
          <Image
            src={imageSrc}
            alt="Imagen descriptiva"
            width={150}
            height={150}
            layout="responsive"
            className="rounded-lg shadow-black"
          />
        </div>
        <div className="w-full md:w-2/3 p-4 text-left">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-mono leading-relaxed">
            {cardDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SomosCard;
