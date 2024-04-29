import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/002/885/318/non_2x/nature-green-tree-fresh-leaf-on-beautiful-blurred-soft-bokeh-sunlight-background-with-free-copy-space-spring-summer-or-environment-cover-page-template-web-banner-and-header-free-photo.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto text-center py-24 lg:py-48 w-full">
      <h1 className="mb-4 text-4xl md:text-6xl lg:text-5xl bg-black bg-opacity-60 font-extrabold tracking-tight text-white p-6 font-roboto-slab select-none rounded-xl">
  Homeopatía Larrosa
</h1>
<p className="mb-8 text-sm md:text-lg lg:text-xl text-gray-300 px-4 md:px-16 lg:px-32 font-lora  select-none">
  Explora nuestra gama de productos naturales: desde homeopatía y cosmética natural hasta aromaterapia, suplementos y más.
</p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" className="font-lora inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-900" aria-label="Ver Productos">
            Productos
            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="#" className="font-lora inline-flex items-center justify-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-400" aria-label="Conocer más sobre Quién somos">
            ¿Quién somos?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
