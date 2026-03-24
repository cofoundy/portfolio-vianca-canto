"use client";

import { FC } from "react";
import { BiChevronsDown } from "react-icons/bi";
import { m } from "framer-motion";

const Intro: FC = () => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5 overflow-hidden">
      {/* Geometric gold triangles background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <polygon points="100,700 250,400 400,700" fill="#d4af37" opacity="0.3" />
          <polygon points="600,600 700,300 800,600" fill="#d4af37" opacity="0.2" />
          <polygon points="900,750 1000,450 1100,750" fill="#d4af37" opacity="0.25" />
          <polygon points="300,200 400,50 500,200" fill="#d4af37" opacity="0.15" />
          <polygon points="800,150 880,0 960,150" fill="#d4af37" opacity="0.2" />
          <polygon points="50,400 130,200 210,400" fill="#d4af37" opacity="0.15" />
          <polygon points="1000,350 1060,200 1120,350" fill="#d4af37" opacity="0.2" />
        </svg>
      </div>

      <div className="relative z-[1] text-center">
        <m.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Inmobiliaria Gaia Peru
        </m.p>
        {/* Outline layer */}
        <m.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, times: [0, 0.2, 0.6, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-transparent absolute left-1/2 -translate-x-1/2"
          style={{
            WebkitTextStroke: "2px #d4af37",
          }}
        >
          Vianca Canto
        </m.h1>
        {/* Fill layer */}
        <m.h1
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white"
        >
          Vianca Canto
        </m.h1>
      </div>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="text-lg md:text-2xl text-center z-[1] text-gray-300 px-4"
      >
        <m.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="inline-block overflow-hidden whitespace-nowrap"
        >
          Seguridad y rentabilidad en tus inversiones
        </m.span>
      </m.p>

      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer text-gold"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
