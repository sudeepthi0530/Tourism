
"use client";

import Link from "next/link";

const pageFont = '"Bell MT", "Baskerville", "Georgia", serif';

const photos = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Adayar_Falls_Mnagalore.jpg",
  waterfall:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Adyar_falls.jpg",
  scenic:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Scenic_view_from_Adyar_falls_Mangalore.jpg",
};

const galleryPhotos = [
  {
    src: photos.hero,
    alt: "Adyar Falls near Mangaluru",
    source:
      "https://commons.wikimedia.org/wiki/File:Adayar_Falls_Mnagalore.jpg",
  },
  {
    src: photos.waterfall,
    alt: "Water flowing over the rocks at Adyar Falls",
    source: "https://commons.wikimedia.org/wiki/File:Adyar_falls.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Adyar_falls%28_A_small_portion_of_it%29.jpg",
    alt: "A small portion of Adyar Falls",
    source:
      "https://commons.wikimedia.org/wiki/File:Adyar_falls(_A_small_portion_of_it).jpg",
  },
  {
    src: photos.scenic,
    alt: "Scenic view from Adyar Falls",
    source:
      "https://commons.wikimedia.org/wiki/File:Scenic_view_from_Adyar_falls_Mangalore.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Scenic_view_of_Mangalore_from_Adyar_Falls.jpg",
    alt: "View of Mangaluru from Adyar Falls",
    source:
      "https://commons.wikimedia.org/wiki/File:Scenic_view_of_Mangalore_from_Adyar_Falls.jpg",
  },
];

const experiences = [
  {
    title: "Witness the Waterfall",
    description:
      "Experience the natural beauty of water cascading over rocky formations surrounded by dense greenery.",
  },
  {
    title: "Explore the Two Cascades",
    description:
      "Discover the two distinct cascades of Adyar Falls, located approximately 200 metres apart.",
  },
  {
    title: "Enjoy the Monsoon Scenery",
    description:
      "Observe the waterfall in its fuller seasonal flow during the monsoon, when the surrounding vegetation becomes especially lush.",
  },
  {
    title: "Experience the Natural Surroundings",
    description:
      "Enjoy the greenery, rocky landscape and peaceful atmosphere around this natural attraction near Mangaluru.",
  },
  {
    title: "Photography and Nature Views",
    description:
      "Capture the waterfall, flowing water and surrounding landscape from safe and permitted viewing areas.",
  },
  {
    title: "Discover a Local Nature Escape",
    description:
      "Explore a natural attraction located close to Mangaluru and enjoy a short outdoor excursion away from the city.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Adyar Falls, Adyar area near Mangaluru, Dakshina Kannada, Karnataka, India.",
  },
  {
    title: "Opening Hours",
    description:
      "Official visiting hours are not reliably confirmed. Check local access conditions before travelling.",
  },
  {
    title: "Entry Fee",
    description:
      "No reliably confirmed official entry-fee information is available. Enquire locally before visiting.",
  },
  {
    title: "How to Reach",
    description:
      "Adyar Falls is approximately 12 km from Mangaluru city. Visitors can travel towards the Adyar area by road and check the local route and access conditions before starting the journey.",
  },
  {
    title: "Best Time to Visit",
    description:
      "The monsoon and post-monsoon seasons generally bring stronger water flow and greener surroundings. Water levels and access conditions can change significantly during heavy rain.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Rocks near waterfalls can be slippery. Avoid entering strong currents, climbing wet rocks or visiting during dangerous weather. Do not litter and follow local safety instructions.",
  },
];

export default function AdyarFallsPage() {
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
            Hidden Natural Beauty
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Adyar Falls
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed md:text-2xl">
            Discover a beautiful natural waterfall surrounded by rocky
            landscapes and lush greenery near Mangaluru.
          </p>

          <p className="mt-8 text-sm tracking-widest text-[#D6AE70]">
            ADYAR · MANGALURU · DAKSHINA KANNADA
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            A Natural Retreat
          </p>

          <h2 className="mb-7 text-4xl font-bold text-[#27151F] md:text-5xl">
            About Adyar Falls
          </h2>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            Adyar Falls is a natural waterfall located in the Adyar area
            near Mangaluru in Dakshina Kannada district. Situated
            approximately 12 kilometres from the city, it is a popular
            nature attraction known for its rocky landscape and green
            surroundings.
          </p>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            The waterfall consists of two distinct cascades located
            approximately 200 metres apart. Water flows over rocky
            formations, creating a scenic natural setting surrounded by
            vegetation.
          </p>

          <p className="text-lg leading-8 text-[#514047]">
            During the monsoon season, the waterfall becomes more active
            as rainfall increases the water flow. Its natural surroundings
            make it an interesting outdoor destination for visitors who
            enjoy waterfalls and nature.
          </p>
        </div>

        <div className="overflow-hidden border-8 border-[#D6AE70]/40 shadow-2xl">
          <img
            src={photos.waterfall}
            alt="Water cascading over the rocks at Adyar Falls"
            className="h-[430px] w-full object-cover"
          />
        </div>
      </section>

      {/* Historical Highlight */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9]">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#D6AE70]">
            Nature's Seasonal Beauty
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            The Beauty of the Monsoon
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-9 text-[#E5D5C4]">
            Adyar Falls displays a changing natural landscape throughout
            the year. During the monsoon, increased rainfall brings a
            stronger flow of water over its rocky cascades. The surrounding
            greenery becomes more vibrant, creating a beautiful contrast
            between the flowing water, dark rocks and dense vegetation.
            This seasonal transformation makes the waterfall especially
            scenic, while also requiring visitors to take extra care
            around slippery rocks and strong currents.
          </p>

          <div className="mx-auto mt-10 h-1 w-24 bg-[#D6AE70]" />
        </div>
      </section>

      {/* Experiences */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover the Waterfall
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
              href="https://www.google.com/maps/search/?api=1&query=Adyar+Falls+Mangaluru"
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
                href="https://commons.wikimedia.org/wiki/File:Adayar_Falls_Mnagalore.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Adayar Falls, Mangalore
              </a>{" "}
              — Photograph by Vinay bhat, CC BY-SA 4.0.
            </li>

            <li>
              2.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Adyar_falls.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Adyar Falls
              </a>{" "}
              — Photograph by Vinay bhat, CC BY-SA 4.0.
            </li>

            <li>
              3.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Adyar_falls(_A_small_portion_of_it).jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Adyar Falls — A Small Portion
              </a>{" "}
              — Photograph by Vinay bhat, CC BY-SA 4.0.
            </li>

            <li>
              4.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Scenic_view_from_Adyar_falls_Mangalore.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Scenic View from Adyar Falls, Mangalore
              </a>{" "}
              — Photograph by Vinay bhat, CC BY-SA 4.0.
            </li>

            <li>
              5.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Scenic_view_of_Mangalore_from_Adyar_Falls.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Scenic View of Mangalore from Adyar Falls
              </a>{" "}
              — Photograph by Vinay bhat, CC BY-SA 4.0.
            </li>
          </ul>

          <p className="mt-4 text-sm leading-6 text-[#6B5960]">
            Photographs are credited to their respective creators and
            shared under the licences stated on their Wikimedia Commons
            file pages. Any changes to the photographs should be indicated
            when required by the licence.
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
