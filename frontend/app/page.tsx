
"use client";

import CinematicIntro from "../components/CinematicIntro";
import { useState } from "react";

const destinations = [
  {
    name: "Panambur Beach",
    category: "Beaches",
    location: "Mangaluru",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Panambur_Beach.jpg?width=1200",
    description: "Experience the beauty of the coastline and peaceful sunsets.",
  },
  {
    name: "Kudroli Temple",
    category: "Temples",
    location: "Mangaluru",
    image: "https://mangaluru.adaniairports.com/-/media/Images/AdaniAirMangalore/All-Latest/In-the-City/KUDROLI.png",
    description: "Discover the beauty of traditional temple architecture.",
  },
  {
    name: "St. Aloysius Chapel",
    category: "Heritage",
    location: "Mangaluru",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/St.Aloysius_Chapel,Mangalore.jpg?width=1200",
    description: "Explore history, architecture and beautiful artwork.",
  },
  
  {
    name: "Tannirbhavi Beach",
    category: "Beaches",
    location: "Mangaluru",
    image: "https://web-cms.karnatakatourism.org/wp-content/uploads/2025/06/Tannirbhavi-Beach-e1750678541671.jpg?v=2",
    description: "Enjoy a peaceful escape along the coastal landscape.",
  },

];

const categories = ["All Places", "Beaches", "Temples", "Heritage"];

const gold = "#C6A16B";
const ivory = "#F3E9D9";
const burgundy = "#27151F";

const bellFont = {
  fontFamily: '"Bell MT", "Baskerville", "Georgia", serif',
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Places");

  const filteredPlaces = destinations.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Places" || place.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#F3E9D9] text-[#27151F]"
      style={bellFont}
    >
      <CinematicIntro />

      {/* NAVIGATION */}
      <nav className="relative z-20 flex items-center justify-between border-b border-[#C6A16B]/30 bg-[#27151F] px-6 py-5 text-[#F3E9D9] md:px-16">
        <a href="#" className="text-2xl tracking-wide md:text-3xl">
          <span className="text-[#D6AE70]">Namma</span> Dakshina
          <span className="text-[#D6AE70]">.</span>
        </a>

        <div className="hidden items-center gap-9 text-sm tracking-wider md:flex">
          <a href="#" className="text-[#D6AE70]">
            Home
          </a>
          <a href="#destinations" className="transition hover:text-[#D6AE70]">
            Explore Places
          </a>
          <a href="#about" className="transition hover:text-[#D6AE70]">
            Our Story
          </a>
        </div>

        <a
          href="#destinations"
          className="border border-[#C6A16B] px-5 py-3 text-sm tracking-wider text-[#D6AE70] transition hover:bg-[#C6A16B] hover:text-[#27151F]"
        >
          EXPLORE
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative mx-3 mt-3 flex min-h-[620px] items-center overflow-hidden rounded-sm bg-[#27151F] md:mx-6 md:min-h-[700px]">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/cultural-bg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#27151F]/75" />

        <div className="absolute inset-5 border border-[#C6A16B]/40 md:inset-8" />

        <div className="relative z-10 mx-auto max-w-5xl px-8 py-24 text-center text-[#F3E9D9]">
          <p className="mb-7 text-xs uppercase tracking-[0.45em] text-[#D6AE70] md:text-sm">
            A journey through coastal Karnataka
          </p>

          <h1
            className="text-6xl font-normal leading-tight tracking-wide md:text-8xl"
            style={bellFont}
          >
            Discover
            <span className="mt-2 block italic text-[#D6AE70]">
              Namma Dakshina
            </span>
          </h1>

          <div className="mx-auto my-8 h-px w-28 bg-[#C6A16B]" />

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#F3E9D9]/85 md:text-lg">
            A land of timeless traditions, beautiful coastlines and stories
            waiting to be discovered. Explore the culture, history and
            hidden treasures of Dakshina Kannada.
          </p>

          <a
            href="#destinations"
            className="mt-10 inline-block border border-[#D6AE70] bg-[#C6A16B] px-9 py-4 text-sm tracking-[0.15em] text-[#27151F] transition hover:bg-transparent hover:text-[#D6AE70]"
          >
            BEGIN YOUR JOURNEY →
          </a>
        </div>
      </section>

      {/* CULTURAL INTRODUCTION */}
      <section className="px-6 py-20 text-center md:px-16 md:py-28">
        <p className="text-xs uppercase tracking-[0.4em] text-[#A64F3C]">
          The spirit of our land
        </p>

        <h2
          className="mt-5 text-4xl leading-tight md:text-6xl"
          style={bellFont}
        >
          More than a destination.
          <span className="mt-2 block italic text-[#9A6B42]">
            A cultural experience.
          </span>
        </h2>

        <div className="mx-auto my-7 h-px w-20 bg-[#C6A16B]" />

        <p className="mx-auto max-w-2xl text-base leading-8 text-[#65534D]">
          From the vibrant traditions of Yakshagana and Bhoota Kola to
          peaceful beaches and magnificent temples, every corner of
          Dakshina Kannada has a story worth experiencing.
        </p>
      </section>

      {/* DESTINATIONS */}
      <section
        id="destinations"
        className="border-y border-[#C6A16B]/30 bg-[#EDE0CE] px-6 py-20 md:px-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#A64F3C]">
              Explore our heritage
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl" style={bellFont}>
              Places to discover
            </h2>

            <p className="mt-4 text-[#65534D]">
              Find beautiful places and create unforgettable memories.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mx-auto mb-8 max-w-xl">
            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-[#C6A16B]/60 bg-[#F8F1E7] px-6 py-4 text-[#27151F] outline-none placeholder:text-[#897A70] focus:border-[#A64F3C]"
              style={bellFont}
            />
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`border px-6 py-3 text-sm tracking-wide transition ${
                  category === item
                    ? "border-[#27151F] bg-[#27151F] text-[#D6AE70]"
                    : "border-[#C6A16B] bg-transparent text-[#65534D] hover:bg-[#27151F] hover:text-[#D6AE70]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* DESTINATION CARDS */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPlaces.map((place) => (
              <article
                key={place.name}
                className="group overflow-hidden border border-[#C6A16B]/40 bg-[#F8F1E7] transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${place.image})`,
                    }}
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A64F3C]">
                    {place.category}
                  </p>

                  <h3
                    className="mt-3 text-2xl text-[#27151F]"
                    style={bellFont}
                  >
                    {place.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#897A70]">
                    {place.location}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#65534D]">
                    {place.description}
                  </p>

                 {place.name === "Panambur Beach" ||
place.name === "Kudroli Temple" ||
place.name === "St. Aloysius Chapel" ||
place.name === "Tannirbhavi Beach" ? (
  <a
    href={
      place.name === "Panambur Beach"
        ? "/destinations/panambur-beach"
        : place.name === "Kudroli Temple"
        ? "/destinations/kudroli-temple"
        : place.name === "St. Aloysius Chapel"
        ? "/destinations/st-aloysius-chapel"
        : "/destinations/tannirbhavi-beach"
    }
    className="mt-6 inline-block border-b border-[#A64F3C] pb-1 text-sm tracking-wide text-[#A64F3C] transition hover:text-[#27151F]"
  >
    Discover More →
  </a>
) : (
  <button className="mt-6 border-b border-[#A64F3C] pb-1 text-sm tracking-wide text-[#A64F3C] transition hover:text-[#27151F]">
    Discover More →
  </button>
)}
                </div>
              </article>
            ))}
          </div>

          {filteredPlaces.length === 0 && (
            <p className="py-12 text-center text-[#65534D]">
              No destinations found. Try another search.
            </p>
          )}
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="bg-[#27151F] px-6 py-24 text-center text-[#F3E9D9] md:px-16">
        <p className="text-xs uppercase tracking-[0.4em] text-[#D6AE70]">
          Tradition • Art • Heritage
        </p>

        <h2 className="mt-5 text-4xl md:text-6xl" style={bellFont}>
          A heritage that lives forever.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#F3E9D9]/75">
          Experience the vibrant art forms, timeless architecture,
          spiritual traditions and coastal beauty that make Dakshina
          Kannada truly special.
        </p>

        <div className="mx-auto mt-9 h-px w-24 bg-[#C6A16B]" />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#F3E9D9] px-6 py-24 text-center md:px-16"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[#A64F3C]">
          Our vision
        </p>

        <h2 className="mt-5 text-4xl md:text-5xl" style={bellFont}>
          Discover before you travel.
        </h2>

        <div className="mx-auto my-7 h-px w-20 bg-[#C6A16B]" />

        <p className="mx-auto max-w-2xl text-base leading-8 text-[#65534D]">
          Namma Dakshina brings the beauty, culture and history of
          Dakshina Kannada together in one place. Discover destinations
          through photographs, maps, historical information and immersive
          virtual experiences.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#C6A16B]/30 bg-[#27151F] px-6 py-12 text-center text-[#F3E9D9]">
        <h2 className="text-3xl tracking-wide" style={bellFont}>
          Namma <span className="text-[#D6AE70]">Dakshina</span>
        </h2>

        <p className="mt-4 text-sm tracking-wider text-[#D6AE70]">
          Discover Our Land. Experience Its Beauty.
        </p>

        <div className="mx-auto my-6 h-px w-20 bg-[#C6A16B]" />

        <p className="text-xs text-[#F3E9D9]/60">
          © 2026 Namma Dakshina. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
