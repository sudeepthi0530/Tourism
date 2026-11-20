
"use client";

import Link from "next/link";

const pageFont = '"Bell MT", "Baskerville", "Georgia", serif';

const photos = {
  hero:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2a/58/45/soans-farm.jpg?h=-1&s=1&w=1200",
  plantation:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f7/0d/84/soans-farm.jpg?h=-1&s=1&w=1200",
  pineapple:
    "https://media-cdn.tripadvisor.com/media/photo-w/1a/aa/1e/f1/ananas.jpg",
};

const galleryPhotos = [
  {
    src: photos.hero,
    alt: "Tropical plantation pathway at Soans Farm",
    source: "https://www.tripadvisor.in/Attraction_Review-g297627-d3444743-Reviews-Soans_Farm-Karnataka.html",
  },
  {
    src: photos.plantation,
    alt: "Coconut plantation at Soans Farm",
    source: "https://www.tripadvisor.in/Hotel_Review-g2334926-d1935580-Reviews-SOANS_FARM-Moodabidri_Dakshina_Kannada_District_Karnataka.html",
  },
  {
    src: photos.pineapple,
    alt: "Pineapple plantation at Soans Farm",
    source: "https://airial.travel/attractions/india/beluvai/soans-farm-moodabidri-JJKleLvK",
  },
  {
    src: "https://media.assettype.com/gulfnews%2F2024-11-18%2F8t77ow90%2FWIN_INDIA_fruit_2_1676534506426_186593e63db_original_ratio.jpg",
    alt: "Pomelo fruits growing in the Soans Farm orchard",
    source: "https://gulfnews.com/world/asia/india/why-mangalore-is-indias-exotic-fruit-basket-1.93865664",
  },
  {
    src: "https://soans.com/images/Cottage-1.jpg",
    alt: "Cottage at Soans Farm",
    source: "https://soans.com/soans_resorts.html",
  },
];

const experiences = [
  {
    title: "Explore Tropical Fruit Plantations",
    description:
      "Discover a variety of tropical fruit trees and crops, including pineapple, rambutan, mangosteen, durian, mango and other exotic fruits.",
  },
  {
    title: "Experience a Spice Tour",
    description:
      "Learn about plantation crops such as vanilla and pepper and understand how different spices are cultivated and maintained.",
  },
  {
    title: "Discover Agricultural Diversity",
    description:
      "Explore the farm's wide collection of fruit trees, ornamental plants and other varieties that demonstrate horticultural diversity.",
  },
  {
    title: "Enjoy Bird Watching",
    description:
      "Observe birds in the farm surroundings. The farm's official website mentions more than 100 species of exotic birds and commonly sighted peacocks.",
  },
  {
    title: "Explore the Farm Pathways",
    description:
      "Walk along plantation-lined avenues and enjoy the peaceful surroundings, greenery and countryside atmosphere.",
  },
  {
    title: "Discover Farm Products",
    description:
      "Explore seasonal fruits, fresh pineapple juice and other farm products, subject to availability during your visit.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Soans Farm, Bannadka, Belvai, Moodabidri, Dakshina Kannada, Karnataka, India – 574213.",
  },
  {
    title: "Opening Hours",
    description:
      "Published listings show approximately 8:00 AM to 6:00 PM. Confirm the current farm visiting hours directly before travelling.",
  },
  {
    title: "Entry Fee",
    description:
      "Current admission and guided-tour charges are not confirmed. Contact the farm to enquire about entry, tours and other activities.",
  },
  {
    title: "How to Reach",
    description:
      "Soans Farm is located near Moodabidri on the Moodabidri–Karkala route. It can be reached by road from Mangaluru using taxis or private vehicles.",
  },
  {
    title: "Best Time to Visit",
    description:
      "October to February is generally comfortable for exploring the farm. Fruit availability varies by season, so enquire before planning a visit.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Respect the cultivated plants, follow farm staff instructions, avoid damaging crops and check in advance about photography and guided tours.",
  },
];

export default function SoansFarmPage() {
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
            A World of Agricultural Diversity
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Soans Farm
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed md:text-2xl">
            Discover an extraordinary world of tropical fruits, spice
            plantations and horticultural diversity in the countryside
            of Moodabidri.
          </p>

          <p className="mt-8 text-sm tracking-widest text-[#D6AE70]">
            BANNDKA · MOODABIDRI · DAKSHINA KANNADA
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            A Horticultural Heritage
          </p>

          <h2 className="mb-7 text-4xl font-bold text-[#27151F] md:text-5xl">
            About Soans Farm
          </h2>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            Soans Farm is a well-known horticultural destination located
            at Bannadka near Moodabidri in Dakshina Kannada. Its history
            dates back to 1926, when the land was developed for agricultural
            and horticultural activities.
          </p>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            Originally started as a coconut garden, the farm gradually
            developed into a diverse plantation. Pineapple became one of
            its major crops, alongside a wide variety of tropical fruits,
            spices and other plants.
          </p>

          <p className="text-lg leading-8 text-[#514047]">
            Today, Soans Farm is recognised for its horticultural diversity,
            including pineapple, rambutan, mangosteen, durian, vanilla,
            pepper, mango, nutmeg and other exotic fruit varieties.
            Its plantation surroundings provide an interesting experience
            for nature lovers and visitors interested in agriculture.
          </p>
        </div>

        <div className="overflow-hidden border-8 border-[#D6AE70]/40 shadow-2xl">
          <img
            src={photos.plantation}
            alt="Tropical plantation at Soans Farm"
            className="h-[430px] w-full object-cover"
          />
        </div>
      </section>

      {/* Historical Highlight */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9]">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#D6AE70]">
            Since 1926
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            A Legacy of Horticultural Innovation
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-9 text-[#E5D5C4]">
            Soans Farm has played an important role in introducing and
            cultivating a variety of tropical and exotic fruit plants
            in the region. Through generations of agricultural development,
            the farm has become known for its diverse crops and horticultural
            practices. Its contribution to pineapple cultivation and the
            introduction of unusual fruit varieties have made it a notable
            agricultural destination in Dakshina Kannada.
          </p>

          <div className="mx-auto mt-10 h-1 w-24 bg-[#D6AE70]" />
        </div>
      </section>

      {/* Experiences */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover the Farm
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
              href="https://www.google.com/maps/search/?api=1&query=Soans+Farm+Moodabidri"
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
                — Original photograph source.
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm leading-6 text-[#6B5960]">
            Photographs are linked to their respective source pages.
            Please check the original creator's usage and attribution
            requirements before publishing.
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
