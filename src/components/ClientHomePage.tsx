"use client";

import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Contact from "./Contact";
import Cursor from "./Cursor";
import Intro from "./Intro";
import Services from "./Services";
import Stats from "./Stats";
import Who from "./WhoAmI";

export default function ClientHomePage() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Cursor />

      <div data-scroll-container ref={containerRef}>
        <Intro />
        <Who />
        <Stats />
        <Services />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
}
