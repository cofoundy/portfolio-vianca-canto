"use client";

import { FC } from "react";
import { SERVICES } from "../data/services";

const Services: FC = () => {
  return (
    <div className="px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-0.6"
        className="text-center text-3xl lg:text-4xl"
      >
        Mis <span className="text-gold">Servicios</span>
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="0.6"
        className="text-lg text-center my-[30px] text-gray-400"
      >
        Soluciones integrales para tu inversión inmobiliaria
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] w-full">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group p-6 rounded-xl border border-gray-800 hover:border-gold/40 transition duration-300 hover:bg-gold/5"
          >
            <span className="text-3xl mb-3 block">{service.icon}</span>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-gold transition duration-300">
              {service.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
