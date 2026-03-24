"use client";

import { FC } from "react";
import { STATS } from "../data/stats";

const Stats: FC = () => {
  return (
    <div className="flex justify-center px-[5vw] py-16">
      <div
        data-scroll
        data-scroll-speed="1"
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] w-full"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-gold">
              {stat.value}
            </p>
            <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
