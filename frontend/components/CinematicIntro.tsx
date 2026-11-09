
"use client";

import { useEffect, useState } from "react";

export default function CinematicIntro() {
  const [visible, setVisible] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("namma-intro-shown");

    if (!alreadyShown) {
      setShowIntro(true);
      setVisible(true);
      sessionStorage.setItem("namma-intro-shown", "true");

      const fadeTimer = setTimeout(() => {
        setVisible(false);
      }, 2600);

      const removeTimer = setTimeout(() => {
        setShowIntro(false);
      }, 3500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  if (!showIntro) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center
      overflow-hidden bg-[#27151F] transition-opacity duration-1000
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* Cultural background */}
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center blur-[3px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(39,21,31,0.65), rgba(39,21,31,0.85)),
            url('/cultural-bg.jpg')
          `,
        }}
      />

      {/* Decorative golden glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,138,82,0.18),transparent_65%)]" />

      {/* Decorative borders */}
      <div className="absolute inset-5 border border-[#B58A52]/40 md:inset-10" />
      <div className="absolute inset-7 border border-[#B58A52]/20 md:inset-12" />

      {/* Title */}
      <div className="relative z-10 px-5 text-center">
        <div className="mb-5 text-sm uppercase tracking-[0.6em] text-[#D6AE70]">
          Discover • Experience • Celebrate
        </div>

        <h1
          className="font-['Bell_MT',Georgia,serif] text-5xl font-normal
          tracking-[0.08em] text-[#E3BD7B] drop-shadow-lg
          sm:text-7xl md:text-8xl"
        >
          NAMMA
          <span className="mt-2 block text-4xl tracking-[0.16em] sm:text-6xl md:text-7xl">
            DAKSHINA
          </span>
        </h1>

        <div className="mx-auto mt-7 h-px w-32 bg-[#B58A52]" />

        <p className="mt-6 font-['Bell_MT',Georgia,serif] text-lg italic tracking-wider text-[#F3E9D9] sm:text-xl">
          Where every place has a story.
        </p>
      </div>

      {/* Skip intro */}
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => setShowIntro(false), 700);
        }}
        className="absolute bottom-10 right-10 z-20 text-xs uppercase
        tracking-[0.25em] text-[#F3E9D9]/70 transition-colors
        hover:text-[#D6AE70]"
      >
        Skip Intro →
      </button>
    </div>
  );
}
