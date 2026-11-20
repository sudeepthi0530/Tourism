
"use client";

import Link from "next/link";

const pageFont = '"Bell MT", "Baskerville", "Georgia", serif';

const photos = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sammilan_Shetty_Butterfly_park_banner_in_the_Butterfly_park.jpg",
  plants:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Nector_plants_in_Sammilan_Shetty_Butterfly_park.jpg",
  butterfly:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Malabar_Banded_Peacock_nectaring_on_Clerodendrum_viscosum.jpg",
};

const galleryPhotos = [
  {
    src: photos.hero,
    alt: "Sammilan Shetty Butterfly Park banner",
    source:
      "https://commons.wikimedia.org/wiki/File:Sammilan_Shetty_Butterfly_park_banner_in_the_Butterfly_park.jpg",
  },
  {
    src: photos.plants,
    alt: "Nectar plants at Sammilan Shetty Butterfly Park",
    source:
      "https://commons.wikimedia.org/wiki/File:Nector_plants_in_Sammilan_Shetty_Butterfly_park.jpg",
  },
  {
    src: photos.butterfly,
    alt: "Malabar Banded Peacock butterfly at Sammilan Shetty's Butterfly Park",
    source:
      "https://commons.wikimedia.org/wiki/File:Malabar_Banded_Peacock_nectaring_on_Clerodendrum_viscosum.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Nawab_at_Sammilan_Shetty%27s_Butterfly_Park.jpg",
    alt: "Blue Nawab butterfly at Sammilan Shetty's Butterfly Park",
    source:
      "https://commons.wikimedia.org/wiki/File:Blue_Nawab_at_Sammilan_Shetty%27s_Butterfly_Park.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Common_mormon_in_Sammilan_Shetty_Butterfly_park.jpg",
    alt: "Common Mormon butterfly at Sammilan Shetty Butterfly Park",
    source:
      "https://commons.wikimedia.org/wiki/File:Common_mormon_in_Sammilan_Shetty_Butterfly_park.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dark_blue_tiger_butterfly_as_found_in_Sammilan_Shetty_butterfly_park.jpg",
    alt: "Dark Blue Tiger butterfly at Sammilan Shetty Butterfly Park",
    source:
      "https://commons.wikimedia.org/wiki/File:Dark_blue_tiger_butterfly_as_found_in_Sammilan_Shetty_butterfly_park.jpg",
  },
];

const experiences = [
  {
    title: "Butterfly Walkthrough",
    description:
      "Walk through the natural habitat and observe butterflies flying, feeding and interacting with their surroundings.",
  },
  {
    title: "Discover Butterfly Species",
    description:
      "Learn about the different butterfly species found in the Western Ghats region, including colourful and fascinating local varieties.",
  },
  {
    title: "Understand the Life Cycle",
    description:
      "Observe different stages of butterfly development, including eggs, caterpillars, pupae and adult butterflies.",
  },
  {
    title: "Educational Presentation",
    description:
      "Attend an informative presentation about butterfly species, their behaviour, habitats and importance in the ecosystem.",
  },
  {
    title: "Butterfly Photography",
    description:
      "Capture the beauty of butterflies in their natural surroundings while following the park's photography guidelines.",
  },
  {
    title: "Learn About Conservation",
    description:
      "Understand the importance of host plants, nectar plants and protecting natural habitats for butterfly survival.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Sammilan Shetty's Butterfly Park, Park Road, Belvai, near Moodabidri, Dakshina Kannada, Karnataka, India – 574213.",
  },
  {
    title: "Opening Hours",
    description:
      "Open every day from 9:00 AM to 1:00 PM according to the official website. Confirm your visit slot before travelling.",
  },
  {
    title: "Registration",
    description:
      "Advance registration is mandatory. Contact the park at +91 9845993292 before planning your visit.",
  },
  {
    title: "Entry Fee",
    description:
      "The current registration or entry fee is not listed on the official website. Contact the park directly for the latest charges.",
  },
  {
    title: "Best Time to Visit",
    description:
      "June to November is a particularly interesting period for butterfly activity. Morning visits are recommended for observing butterflies.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Respect butterflies and their natural habitat. Avoid touching or disturbing them, do not damage plants and follow the instructions of the park guide.",
  },
];

export default function ButterflyParkPage() {
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
          backgroundImage: `linear-gradient(rgba(25,12,19,0.55), rgba(25,12,19,0.75)), url("${photos.butterfly}")`,
        }}
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            A Paradise for Butterflies
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Sammilan Shetty's Butterfly Park
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed md:text-2xl">
            Discover the colourful world of butterflies and experience
            nature conservation at the foothills of the Western Ghats.
          </p>

          <p className="mt-8 text-sm tracking-widest text-[#D6AE70]">
            BELVAI · MOODABIDRI · DAKSHINA KANNADA
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            A World of Wings
          </p>

          <h2 className="mb-7 text-4xl font-bold text-[#27151F] md:text-5xl">
            About Sammilan Shetty's Butterfly Park
          </h2>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            Sammilan Shetty's Butterfly Park is located at Belvai near
            Moodabidri, at the foothills of the Western Ghats in Dakshina
            Kannada. Established in 2011 by nature enthusiast Sammilan
            Shetty, the park is dedicated to butterfly conservation,
            education and research.
          </p>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            Unlike conventional butterfly houses, the park does not use
            enclosed domes to keep butterflies captive. Instead, it
            maintains natural greenery and suitable conditions that
            encourage butterflies to visit and live freely in their
            natural habitat.
          </p>

          <p className="text-lg leading-8 text-[#514047]">
            The park provides visitors with opportunities to learn about
            butterfly species, their life cycles and their relationship
            with host and nectar plants. It also conducts educational
            presentations, guided walkthroughs and photography activities.
          </p>
        </div>

        <div className="overflow-hidden border-8 border-[#D6AE70]/40 shadow-2xl">
          <img
            src={photos.plants}
            alt="Nectar plants at Sammilan Shetty's Butterfly Park"
            className="h-[430px] w-full object-cover"
          />
        </div>
      </section>

      {/* Historical Highlight */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9]">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#D6AE70]">
            Nature Conservation
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Protecting Butterflies in Their Natural Habitat
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-9 text-[#E5D5C4]">
            Butterflies play an important role in nature through
            pollination and their contribution to healthy ecosystems.
            Their survival depends on suitable host plants, nectar sources
            and safe natural habitats. Sammilan Shetty's Butterfly Park
            focuses on creating these conditions and spreading awareness
            about the need to conserve butterfly diversity in the Western
            Ghats region.
          </p>

          <div className="mx-auto mt-10 h-1 w-24 bg-[#D6AE70]" />
        </div>
      </section>

      {/* Experiences */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover the Butterfly World
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
              href="https://www.google.com/maps/search/?api=1&query=Sammilan+Shetty%27s+Butterfly+Park+Belvai"
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
            {galleryPhotos.map((photo, index) => (
              <li key={photo.source}>
                {index + 1}.{" "}
                <a
                  href={photo.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#A64F3C]"
                >
                  {photo.alt}
                </a>{" "}
                — Wikimedia Commons. Refer to the individual file page for
                creator and licence information.
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm leading-6 text-[#6B5960]">
            Photographs are credited to their respective creators.
            Please check the individual Wikimedia Commons file pages
            for licence conditions and attribution requirements before
            publishing.
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
