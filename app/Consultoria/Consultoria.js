import Image from "next/image";
import React from "react";

const Consultoria = () => {
  return (
    <section className="overflow-hidden bg-gray-50¿ sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            En Instegrasys se maneja las consultorias en estos servicios
          </h2>

          <p className="hidden text-gray-500 dark:text-gray-300 md:mt-4 md:block">
           <ul>
            <li>Sistemas de gestion para la agricultura de precision</li>
            <br/>
            <li>Sistema de gestion de la informacion</li>
            <br/>
            <li>Desarrollo de formularios para recoleccion de datos</li>
            <br/>
            <li>Informes de gestion</li>
            <br/>
            <li>Informes de rendimiento y productividas</li>
           </ul>
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded px-12 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring"
            >
              Iniciemos Hoy
            </a>
          </div>
        </div>
      </div >
        <Image src="/images/agent.jpg"
          alt="negociante"
          width={300}
          height={300}
          className="h-56 w-full object-cover sm:h-full"
        />
      
    </section>
  );
};

export default Consultoria;
