import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section>
      <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32 ">
        <div>
          <div className="flex flex-wrap py-8 md:flex-nowrap">
            <div className="flex flex-col flex-shrink-0 px-4 mb-6 md:w-64 md:mb-0">
              <strong className="flex text-3xl font-thin leading-none text-left text-neutral-600 lg:text-4xl">
                {" "}
                <span className="text-sm"></span>
              </strong>
              <Image
                src="/images/agent.jpg"
                alt="imagen"
                width={400}
                height={400}
                priority={false}
              />
              <span className="mt-1 text-xs font-normal leading-relaxed text-gray-700"></span>
            </div>
            <div className="prose md:flex-grow prose-md">
              <p>
                {" "}
                Bienvenido a Integrasys, tu aliado estratégico en la búsqueda
                constante de la excelencia en la gestión.
                <br />
                <br />
                En Integrasys, nos enorgullecemos de ofrecer servicios de
                consultoría de primer nivel en sistemas de gestión a empresas de
                todos los tamaños y sectores. Nuestro compromiso es ayudarte a
                optimizar tus procesos, mejorar tu rendimiento y alcanzar los
                más altos estándares de calidad y eficiencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
