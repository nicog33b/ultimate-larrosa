import React from "react";
import Navbar from "@/components/UI/navbar";
import Footer from "@/components/UI/footer";
import ProductCard from "./productCard";

const TiendaMain = () => {
  return (
    <section id="Tienda">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        {/* Categorías a la izquierda */}
        <div className="md:w-1/4 p-4 bg-white">
  <h2 className="text-xl font-semibold text-center mb-3">CATEGORIAS</h2>
  <hr className="mb-3" />
  <ul className="grid grid-cols-2 md:grid-cols-1  sm:grid-cols-2 gap-2">
    <li className="mb-2 text-center">
      <a href="#" className="text-lg  text-gray-500 hover:text-zinc-800 roboto-regular">
        Homeopatia
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="text-lg  text-gray-500 hover:text-zinc-800 roboto-regular">
        Suplementos
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="text-lg text-gray-500 hover:text-zinc-800 roboto-regular">
        Veterinaria
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="text-lg  text-gray-500 hover:text-zinc-800 roboto-regular">
        Aromaterapia
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="text-lg  text-gray-500 hover:text-zinc-800 roboto-regular">
        Hierbas
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="text-lg  text-gray-500 hover:text-zinc-800 roboto-regular">
        Tés
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="text-xl text-gray-500 hover:text-zinc-800 roboto-regular">
        Cosmética
      </a>
    </li>
  </ul>
</div>


        {/* Cuadrícula de productos a la derecha */}
        <div className="md:w-3/4 p-4 bg-white">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default TiendaMain;
