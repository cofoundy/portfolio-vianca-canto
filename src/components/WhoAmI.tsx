"use client";

import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full object-cover border-4 border-gold/30"
        src="/profile.png"
        alt="Vianca Canto"
        width={225}
        height={225}
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Sobre <span className="text-gold">Mí</span>
        </h1>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Soy Vianca Canto, agente inmobiliaria y CEO de{" "}
          <span className="text-gold font-semibold">Inmobiliaria Gaia Peru</span>.
          Con más de 5 años de experiencia en el mercado inmobiliario peruano,
          me especializo en brindarte seguridad y rentabilidad en tus inversiones.
          He concretado la venta de más de 15 propiedades y gestiono alquileres
          con un enfoque personalizado. Mi misión es acompañarte en cada paso,
          desde la evaluación hasta la firma de escrituras públicas.
        </p>
      </div>
    </div>
  );
};

export default Who;
