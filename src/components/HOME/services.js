import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section id='services' className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
      <h2 class="font-merriweather cursor-pointer hover:scale-105 text-3xl select-none font-serif font-semibold text-center my-8 py-4 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white shadow-lg rounded-lg">
  NUESTROS SERVICIOS
  <hr class="border-t-2 border-emerald-300 mx-24 mt-2"></hr>
  </h2>
     
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Array of services */}
          {[
{ title: "Homeopatía", description: "Explora tratamientos personalizados que estimulan la capacidad de autocuración del cuerpo, utilizando remedios naturales basados en principios homeopáticos.", img: "/images/servicios/homeopatia.jpg" },
{ title: "Flores de Bach", description: "Benefíciate de las esencias naturales de las Flores de Bach, diseñadas para mejorar el bienestar emocional y equilibrar tus estados de ánimo.", img: "/images/servicios/flores de buch.jpg" },
{ title: "Flores de Bush", description: "Descubre el poder curativo de las Flores de Bush australianas, perfectas para armonizar y fortalecer la mente y el espíritu.", img: "/images/servicios/flores de bush.jpg" },
{ title: "Suplementos", description: "Encuentra una amplia gama de suplementos nutricionales para apoyar tu salud física y mental, cuidadosamente seleccionados para complementar tu dieta diaria.", img: "/images/servicios/asd.jpg" },
{ title: "Harinas", description: "Explora nuestra selección de harinas especiales, ideales para dietas específicas y cocinas creativas, asegurando productos de la más alta calidad.", img: "/images/servicios/harinas.jpg" },
{ title: "Aromaterapia", description: "Sumérgete en el mundo de la aromaterapia con nuestros aceites esenciales puros y mezclas, ideales para mejorar tu ambiente y bienestar emocional.", img: "/images/servicios/aromaterapia.jpg" }

          ].map(service => (
            <div key={service.title} className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-800 mb-5 select-none font-roboto-slab shadow-sm">{service.title}</h3>
            <p className="text-gray-600 mb-6 font-lora select-none">{service.description}</p>
            <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-inner">
              <Image
                src={service.img}
                alt={service.title}
                height={800}
                width={800}
                objectFit="cover"
                className="transition duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
