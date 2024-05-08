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
        <div className="md:w-1/4 p-4 bg-gray-100">
  <h2 className="text-3xl font-semibold text-center mb-3">Categorías</h2>
  <hr className="mb-3" />
  <ul className="grid grid-cols-2 md:grid-cols-1  sm:grid-cols-2 gap-2">
    <li className="mb-2 text-center">
      <a href="#" className="hover:text-emerald-500">
        Homeopatia
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="hover:text-blue-500">
        Suplementos
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="hover:text-blue-500">
        Veterinaria
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="hover:text-blue-500">
        Aromaterapia
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="hover:text-blue-500">
        Hierbas
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="hover:text-blue-500">
        Tés
      </a>
    </li>
    <li className="mb-2 text-center">
      <a href="#" className="hover:text-blue-500">
        Cosmética
      </a>
    </li>
  </ul>
</div>


        {/* Cuadrícula de productos a la derecha */}
        <div className="md:w-3/4 p-4 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
