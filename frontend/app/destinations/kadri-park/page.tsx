
"use client";

import Link from "next/link";

const pageFont = '"Bell MT", "Baskerville", "Georgia", serif';

const photos = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kadri_Public_Park,_Kadri,_Mangalore,_Karnataka,_India_01.jpg",
  garden:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kadri_Park_in_Mangalore_-_Near_the_circular_garden_-_1.jpg",
  walkway:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kadri_Park_in_Mangalore_-_Alley.jpg",
};

const galleryPhotos = [
  {
    src: photos.hero,
    alt: "Main entrance of Kadri Public Park",
  },
  {
    src: photos.garden,
    alt: "Circular garden at Kadri Park",
  },
  {
    src: photos.walkway,
    alt: "Tree-lined walkway at Kadri Park",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kadri_Park_in_Mangalore_-_Children%27s_play_area.jpg",
    alt: "Children's play area at Kadri Park",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Children%27s_train_%27Balamangala_Express%27_at_Kadri_Park_in_Mangalore.jpg",
    alt: "Balamangala Express children's train at Kadri Park",
  },
];

const experiences = [
  {
    title: "Enjoy the Green Gardens",
    description:
      "Take a relaxing walk through the landscaped gardens and enjoy the greenery, trees and colourful plants within the park.",
  },
  {
    title: "Explore the Circular Garden",
    description:
      "Discover the park's circular garden, ornamental plants and topiary displays that add character to its landscaped surroundings.",
  },
  {
    title: "Enjoy the Children's Play Area",
    description:
      "Families can spend time in the children's play area, which provides outdoor recreational space for younger visitors.",
  },
  {
    title: "Ride the Children's Train",
    description:
      "Look out for the Balamangala Express, a miniature train attraction that has been one of the park's familiar features.",
  },
  {
    title: "Walk Along the Tree-lined Paths",
    description:
      "Enjoy a peaceful stroll along the park's pathways, surrounded by trees and natural greenery.",
  },
  {
    title: "Spend Time with Family",
    description:
      "Relax in the open spaces, enjoy the surroundings and spend quality time with family and friends.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Kadri Public Park, Kadri, Mangaluru, Dakshina Kannada, Karnataka, India.",
  },
  {
    title: "Opening Hours",
    description:
      "Opening and closing hours may vary. Please check the latest timings displayed at the park entrance before visiting.",
  },
  {
    title: "Entry Fee",
    description:
      "Current general entry charges and any separate activity charges are not reliably confirmed. Please enquire at the entrance.",
  },
  {
    title: "How to Reach",
    description:
      "Kadri Park is situated in the Kadri area of Mangaluru. It can be reached by local buses, auto-rickshaws, taxis and private vehicles.",
  },
  {
    title: "Best Time to Visit",
    description:
      "Early mornings and evenings are generally comfortable for walking and enjoying the outdoor surroundings. October to February is usually pleasant.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Keep the park clean, use designated walking areas, supervise children in play zones and follow instructions displayed by park authorities.",
  },
];

export default function KadriParkPage() {
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
            Green Escape of Mangaluru
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Kadri Park
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed md:text-2xl">
            Discover a peaceful urban green space with landscaped gardens,
            tree-lined pathways and recreational experiences for families.
          </p>

          <p className="mt-8 text-sm tracking-widest text-[#D6AE70]">
            KADRI · MANGALURU · DAKSHINA KANNADA
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            A Green Retreat
          </p>

          <h2 className="mb-7 text-4xl font-bold text-[#27151F] md:text-5xl">
            About Kadri Park
          </h2>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            Kadri Public Park is a popular urban recreational space located
            in the Kadri neighbourhood of Mangaluru. Known for its landscaped
            gardens, trees and open spaces, the park provides a refreshing
            environment away from the busy city surroundings.
          </p>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            The park features walking pathways, ornamental gardens, a
            children's play area and recreational attractions. Its greenery
            and landscaped sections make it a pleasant place for morning
            walks, relaxation and family outings.
          </p>

          <p className="text-lg leading-8 text-[#514047]">
            Kadri Park is also known for its circular garden and the
            Balamangala Express miniature train attraction. It remains one
            of the familiar public leisure spaces in Mangaluru.
          </p>
        </div>

        <div className="overflow-hidden border-8 border-[#D6AE70]/40 shadow-2xl">
          <img
            src={photos.garden}
            alt="Landscaped circular garden at Kadri Park"
            className="h-[430px] w-full object-cover"
          />
        </div>
      </section>

      {/* Historical Highlight */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9]">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#D6AE70]">
            A City Green Space
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Nature Amidst the City
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-9 text-[#E5D5C4]">
            In a growing coastal city like Mangaluru, public parks provide
            valuable spaces for recreation, relaxation and outdoor activity.
            Kadri Park brings together landscaped greenery, walking paths
            and family-friendly attractions, offering residents and visitors
            a place to slow down and enjoy the outdoors.
          </p>

          <div className="mx-auto mt-10 h-1 w-24 bg-[#D6AE70]" />
        </div>
      </section>

      {/* Experiences */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover the Park
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
              href="https://www.google.com/maps/search/?api=1&query=Kadri+Public+Park+Mangaluru"
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
                href="https://commons.wikimedia.org/wiki/File:Kadri_Public_Park,_Kadri,_Mangalore,_Karnataka,_India_01.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Kadri Public Park — Main Entrance
              </a>{" "}
              — Photograph by Ravi Mundkur, CC BY-SA 4.0.
            </li>

            <li>
              2.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Kadri_Park_in_Mangalore_-_Near_the_circular_garden_-_1.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Kadri Park — Near the Circular Garden
              </a>{" "}
              — Photograph by Aviator423, CC BY-SA 4.0.
            </li>

            <li>
              3.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Kadri_Park_in_Mangalore_-_Alley.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Kadri Park — Tree-lined Alley
              </a>{" "}
              — Photograph by Aviator423, CC BY-SA 4.0.
            </li>

            <li>
              4.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Kadri_Park_in_Mangalore_-_Children%27s_play_area.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Kadri Park — Children's Play Area
              </a>{" "}
              — Photograph by Aviator423, CC BY-SA 4.0.
            </li>

            <li>
              5.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Children%27s_train_%27Balamangala_Express%27_at_Kadri_Park_in_Mangalore.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Balamangala Express — Children's Train
              </a>{" "}
              — Wikimedia Commons.
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
