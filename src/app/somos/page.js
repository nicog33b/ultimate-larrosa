import React from "react";
import SomosCard from "./somosCard";

const Somos = () => {
  const aboutCardData = [
    {
      imageDirection: 'left',
      imageSrc: '/images/localIcon.jpg',
      cardDescription: 'Desde 2016, nuestro local se encuentra en el corazón de Pando, dedicado a la promoción y venta de productos naturales de la más alta calidad.',
    },
    {
      imageDirection: 'right',
      imageSrc: '/images/ecoIcon2.jpg',
      cardDescription: 'Comprar nuestros productos impacta positivamente en el medio ambiente, gracias a nuestra dedicación a prácticas sostenibles y eco-amigables.',
    },
    {
      imageDirection: 'left',
      imageSrc: '/images/veganFree.jpg',
      cardDescription: 'Nos comprometemos con la inclusividad, por eso ofrecemos productos aptos para personas con dietas sin gluten y veganas.',
    },
    {
      imageDirection: 'right',
      imageSrc: '/images/marcaPersonalIcon.png',
      cardDescription: 'Además de trabajar con los mejores proveedores y sus productos, también ofrecemos nuestra propia marca exclusiva.',
    },
    // Agrega más items si es necesario
  ];


    return (
      <div className="space-y-4 md:space-y-6 lg:space-y-8 mb-3">
        {aboutCardData.map((item, index) => (
          <SomosCard
            key={index}
            imageDirection={item.imageDirection}
            imageSrc={item.imageSrc}
            cardDescription={item.cardDescription}
          />
        ))}
      </div>
    );
  };
  
  export default Somos;
  