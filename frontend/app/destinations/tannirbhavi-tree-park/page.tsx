
"use client";

import Link from "next/link";

const pageFont = '"Bell MT", "Baskerville", "Georgia", serif';

const photos = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Tannirbhavi_Tree_Park.jpg",
  entrance:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Entrance_of_the_Tannirbhavi_Tree_Park_in_Mangalore.jpg",
  bandstand:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Bandstand_at_Tannirbhavi_Tree_Park_in_Mangalore.jpg",
};

const galleryPhotos = [
  {
    src: photos.hero,
    alt: "Tannirbhavi Tree Park in Mangaluru",
  },
  {
    src: photos.entrance,
    alt: "Entrance of Tannirbhavi Tree Park",
  },
  {
    src: photos.bandstand,
    alt: "Bandstand at Tannirbhavi Tree Park",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Thannirbavi_Tree_Park_Mangaluru_15.jpg",
    alt: "Natural surroundings at Tannirbhavi Tree Park",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Thannirbavi_Tree_Park_Mangaluru_16.jpg",
    alt: "Green surroundings at Tannirbhavi Tree Park",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Thannirbavi_Tree_Park_Mangaluru_21.jpg",
    alt: "Another view of Tannirbhavi Tree Park",
  },
];

const experiences = [
  {
    title: "Explore the Botanical Garden",
    description:
      "Discover a collection of trees and plants, including medicinal and endemic species associated with the Western Ghats.",
  },
  {
    title: "Walk Along Shaded Paths",
    description:
      "Enjoy a peaceful walk through the park's green surroundings and shaded pathways while experiencing the coastal natural environment.",
  },
  {
    title: "Discover Native Trees",
    description:
      "Observe different tree species and learn about the importance of native vegetation and biodiversity.",
  },
  {
    title: "Enjoy the Park's Bandstand",
    description:
      "Visit the bandstand, one of the identifiable features photographed within Tannirbhavi Tree Park.",
  },
  {
    title: "Learn About Plant Conservation",
    description:
      "Understand the importance of protecting medicinal plants, native trees and the natural ecosystems of the Western Ghats.",
  },
  {
    title: "Experience Coastal Nature",
    description:
      "Enjoy the green surroundings of the park, located close to Tannirbhavi Beach and the coastal landscape of Mangaluru.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Tannirbhavi Tree Park, Tannirbhavi, Mangaluru, Dakshina Kannada, Karnataka, India.",
  },
  {
    title: "Opening Hours",
    description:
      "Current official opening and closing timings are not reliably confirmed. Please check with the local park authorities before visiting.",
  },
  {
    title: "Entry Fee",
    description:
      "Current entry charges are not reliably confirmed. Please enquire locally before planning your visit.",
  },
  {
    title: "How to Reach",
    description:
      "The park is located near Tannirbhavi Beach in Mangaluru. Visitors can reach the area by road using taxis and private vehicles. Local transport options are also available.",
  },
  {
    title: "Best Time to Visit",
    description:
      "October to February is generally comfortable for exploring outdoor attractions in coastal Karnataka. Morning and evening visits can be pleasant.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Avoid damaging plants or trees, do not litter, respect the natural surroundings and follow instructions displayed by park authorities.",
  },
];

export default function TannirbhaviTreeParkPage() {
  return (
    <main
      className="min-h-screen bg-[#F3E9D9] text-[#27151F]"
      style={{ fontFamily: pageFont }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#C6A16B]/40 bg-[#27151F]/95 text-[#F3E9D9] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-[#D6AE70]"
          >
            NAMMA DAKSHINA
          </Link>

          <div className="flex gap-5 text-sm md:gap-8 md:text-base">
            <Link href="/" className="transition hover:text-[#D6AE70]">
              Home
            </Link>
            <Link
              href="/explore"
              className="transition hover:text-[#D6AE70]"
            >
              Explore Places
            </Link>
            <Link
              href="/explore/nature"
              className="transition hover:text-[#D6AE70]"
            >
              Nature & Parks
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative flex min-h-[75vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(25,12,19,0.55), rgba(25,12,19,0.75)), url("${photos.hero}")`,
        }}
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            Nature's Green Escape
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Tannirbhavi Tree Park
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed md:text-2xl">
            Discover a coastal botanical garden filled with native trees,
            medicinal plants and the natural beauty of the Western Ghats.
          </p>

          <p className="mt-8 text-sm tracking-widest text-[#D6AE70]">
            TANNIRBHAVI · MANGALURU · DAKSHINA KANNADA
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            A Coastal Green Retreat
          </p>

          <h2 className="mb-7 text-4xl font-bold text-[#27151F] md:text-5xl">
            About Tannirbhavi Tree Park
          </h2>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            Tannirbhavi Tree Park is a botanical garden located near
            Tannirbhavi Beach in Mangaluru, Dakshina Kannada. Spread across
            approximately 15 acres, the park showcases the natural
            vegetation and plant diversity of the coastal region.
          </p>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            The park features medicinal and endemic trees associated with
            the Western Ghats. Its green surroundings and shaded pathways
            provide visitors with an opportunity to explore and appreciate
            the importance of native plant species.
          </p>

          <p className="text-lg leading-8 text-[#514047]">
            Located close to the Arabian Sea, Tannirbhavi Tree Park offers
            a different experience from the nearby beach. It is a place
            where visitors can discover botanical diversity, enjoy nature
            walks and learn about environmental conservation.
          </p>
        </div>

        <div className="overflow-hidden border-8 border-[#D6AE70]/40 shadow-2xl">
          <img
            src={photos.entrance}
            alt="Entrance of Tannirbhavi Tree Park"
            className="h-[430px] w-full object-cover"
          />
        </div>
      </section>

      {/* Historical Highlight */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9]">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#D6AE70]">
            Botanical Diversity
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            A Garden of Native Trees
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-9 text-[#E5D5C4]">
            The Western Ghats are recognised for their remarkable
            biodiversity and diverse plant life. Tannirbhavi Tree Park
            highlights this natural richness through its collection of
            medicinal and endemic trees. The garden provides an opportunity
            to appreciate native vegetation and understand the importance
            of conserving the region's natural ecosystems.
          </p>

          <div className="mx-auto mt-10 h-1 w-24 bg-[#D6AE70]" />
        </div>
      </section>

      {/* Experiences */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover the Greenery
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Highlights & Experiences
          </h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <div
              key={item.title}
              className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="mb-5 text-3xl text-[#A64F3C]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-4 text-2xl font-bold text-[#27151F]">
                {item.title}
              </h3>
              <p className="leading-7 text-[#514047]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visitor Information */}
      <section className="bg-[#E9DCCB] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
              Plan Your Visit
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Visitor Information
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visitorInfo.map((item) => (
              <div
                key={item.title}
                className="border border-[#C6A16B]/60 bg-[#F8F1E7] p-7 shadow-sm"
              >
                <h3 className="mb-4 text-2xl font-bold text-[#7B3546]">
                  {item.title}
                </h3>
                <p className="leading-7 text-[#514047]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tannirbhavi+Tree+Park+Mangaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#7B3546] bg-[#7B3546] px-8 py-3 text-lg text-[#F3E9D9] transition hover:bg-[#27151F]"
            >
              View Location on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            Through the Lens
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Photo Gallery
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.src}
              className="group overflow-hidden border-4 border-[#D6AE70]/40 shadow-lg"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Photograph Sources */}
        <div className="mt-12 border-t border-[#C6A16B]/60 pt-7">
          <h3 className="mb-4 text-2xl font-bold text-[#7B3546]">
            Photograph sources:
          </h3>

          <ul className="space-y-3 text-sm leading-7 text-[#514047]">
            <li>
              1.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Tannirbhavi_Tree_Park.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Tannirbhavi Tree Park
              </a>{" "}
              — Photograph by Dhanalakshmi .K. T, CC BY-SA 4.0.
            </li>

            <li>
              2.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Entrance_of_the_Tannirbhavi_Tree_Park_in_Mangalore.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Entrance of Tannirbhavi Tree Park
              </a>{" "}
              — Photograph by Aviator423, CC BY-SA 4.0.
            </li>

            <li>
              3.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Bandstand_at_Tannirbhavi_Tree_Park_in_Mangalore.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Bandstand at Tannirbhavi Tree Park
              </a>{" "}
              — Wikimedia Commons, CC BY-SA 4.0.
            </li>

            <li>
              4.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Thannirbavi_Tree_Park_Mangaluru_15.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Tannirbhavi Tree Park Mangaluru 15
              </a>{" "}
              — Photograph by Pavanaja, CC BY-SA 4.0.
            </li>

            <li>
              5.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Thannirbavi_Tree_Park_Mangaluru_16.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Tannirbhavi Tree Park Mangaluru 16
              </a>{" "}
              — Photograph by Pavanaja, CC BY-SA 4.0.
            </li>

            <li>
              6.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Thannirbavi_Tree_Park_Mangaluru_21.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Tannirbhavi Tree Park Mangaluru 21
              </a>{" "}
              — Photograph by Pavanaja, CC BY-SA 4.0.
            </li>
          </ul>

          <p className="mt-4 text-sm leading-6 text-[#6B5960]">
            Photographs are credited to their respective creators. Please
            check the individual Wikimedia Commons file pages for licence
            conditions and attribution requirements before publishing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#27151F] px-6 py-10 text-center text-[#F3E9D9]">
        <Link
          href="/"
          className="text-2xl font-bold tracking-widest text-[#D6AE70]"
        >
          NAMMA DAKSHINA
        </Link>

        <p className="mt-4 text-sm tracking-wide text-[#D9C8B8]">
          Discover the heritage, culture and beauty of Dakshina Kannada.
        </p>

        <p className="mt-6 text-xs text-[#BDA99A]">
          © {new Date().getFullYear()} Namma Dakshina. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
