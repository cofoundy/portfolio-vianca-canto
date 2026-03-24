"use client";

import { FC } from "react";
import { SOCIAL_LINKS } from "../data/social-links";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram, FaTiktok, FaFacebook, FaGlobe } from "react-icons/fa6";

const iconMap: Record<string, FC<{ size?: number }>> = {
  email: HiOutlineMail,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  facebook: FaFacebook,
  web: FaGlobe,
};

const Contact: FC = () => {
  return (
    <div className="pb-20">
      <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
        <span className="text-gold">Contáctame</span>
      </h1>
      <div
        data-scroll
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-8"
      >
        <div className="w-full max-w-[600px] text-center">
          <p className="text-lg mb-8 text-gray-400">
            ¿Buscas comprar, vender o alquilar una propiedad? Estoy aquí para
            ayudarte a tomar la mejor decisión de inversión.
          </p>

          <a
            href="https://wa.me/51901229963"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-lg transition duration-300 mb-12 text-lg font-medium"
          >
            <FaWhatsapp size={24} />
            Escríbeme por WhatsApp
          </a>

          <div className="border-t border-gray-700 pt-8">
            <h2 className="text-xl mb-6">Sígueme en</h2>
            <div className="flex justify-center gap-6 flex-wrap">
              {SOCIAL_LINKS.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 hover:bg-slate-900 p-4 rounded-lg transition duration-300 min-w-[80px] group"
                  >
                    {Icon && (
                      <Icon size={32} />
                    )}
                    <span className="text-sm text-gray-400 group-hover:text-gold transition duration-300">
                      {item.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
