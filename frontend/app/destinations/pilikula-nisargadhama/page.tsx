
"use client";

import Link from "next/link";

const pageFont = '"Bell MT", "Baskerville", "Georgia", serif';

const photos = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pilikula_Nisargadhama.jpg",
  lake:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pilikula_Botanical_Garden_-_Lake_and_Tree_Cover.jpg",
  heritage:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pilikula_Nisargadhama_-_Heritage_Village_or_Guthu_Mane_01.jpg",
  bear:
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_bear_from_Pilikula.jpg",
  weaving:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Weaver_Charaka_Heritage_Village,_Pilikula_Nisargadhama_ನೇಕಾರಿಕೆ_1.jpg",
};

const galleryPhotos = [
  {
    src: photos.hero,
    alt: "Pilikula Nisargadhama",
  },
  {
    src: photos.lake,
    alt: "Lake and tree cover at Pilikula Botanical Garden",
  },
  {
    src: photos.heritage,
    alt: "Traditional Guthu Mane at Pilikula Heritage Village",
  },
  {
    src: photos.bear,
    alt: "Bear at Pilikula Biological Park",
  },
  {
    src: photos.weaving,
    alt: "Traditional weaving at Pilikula Heritage Village",
  },
];

const experiences = [
  {
    title: "Explore the Biological Park",
    description:
      "Discover mammals, reptiles and birds at the zoological park, where animals are housed in enclosures designed to resemble their natural habitats.",
  },
  {
    title: "Discover the Botanical Garden",
    description:
      "Explore a collection of plants, trees and medicinal species while enjoying the natural surroundings of the garden.",
  },
  {
    title: "Visit the Heritage Village",
    description:
      "Experience the traditional Guthu Mane and learn about the architecture, household objects and cultural practices of coastal Karnataka.",
  },
  {
    title: "Experience Traditional Crafts",
    description:
      "Observe traditional skills and artisan activities such as pottery, handloom weaving, blacksmithing and other local crafts.",
  },
  {
    title: "Enjoy the Lake and Boating",
    description:
      "Spend time around Pilikula Lake and enjoy the peaceful natural setting and boating facilities when available.",
  },
  {
    title: "Explore Science and Learning",
    description:
      "Visit the Regional Science Centre and other educational attractions that make Pilikula an interesting destination for students and families.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Pilikula Nisargadhama, Mudushedde Post, Mangaluru, Dakshina Kannada, Karnataka, India.",
  },
  {
    title: "Biological Park Timings",
    description:
      "10:00 AM to 5:00 PM. Weekly holiday is Monday. The Biological Park is open on other days, including public holidays.",
  },
  {
    title: "Biological Park Entry Fee",
    description:
      "Adults above 10 years: ₹80. Children between 3 and 10 years: ₹50. Camera and video camera charges may apply separately.",
  },
  {
    title: "Heritage Village Timings",
    description:
      "10:00 AM to 5:00 PM. The Heritage Village is closed on Mondays. Check the latest timings before visiting.",
  },
  {
    title: "How to Reach",
    description:
      "Pilikula is located around 10 km from Mangaluru and is accessible by road. Visitors can use local buses, taxis and private vehicles.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Follow the rules of each attraction, avoid feeding or disturbing animals, respect the heritage displays and check individual attraction timings before planning your visit.",
  },
];

export default function PilikulaPage() {
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
            Nature, Wildlife & Heritage
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Pilikula Nisargadhama
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed md:text-2xl">
            Discover the natural beauty, wildlife, science and traditional
            culture of coastal Karnataka at one remarkable destination.
          </p>

          <p className="mt-8 text-sm tracking-widest text-[#D6AE70]">
            MUDUSHEDDE · DAKSHINA KANNADA
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            A World of Nature
          </p>

          <h2 className="mb-7 text-4xl font-bold text-[#27151F] md:text-5xl">
            About Pilikula Nisargadhama
          </h2>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            Pilikula Nisargadhama is an integrated eco-education and tourism
            destination developed by the Dakshina Kannada district
            administration. Located at Mudushedde near Mangaluru, it brings
            together nature, wildlife, science and the cultural heritage of
            coastal Karnataka.
          </p>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            The name Pilikula comes from the Tulu words "Pili", meaning tiger,
            and "Kula", meaning pond. According to local tradition, tigers
            once visited a pond in this area to drink water.
          </p>

          <p className="text-lg leading-8 text-[#514047]">
            Spread across a large area along the Gurupura River, Pilikula
            includes a Biological Park, Botanical and Medicinal Gardens,
            Heritage and Artisan Village, Regional Science Centre, lake
            garden and other recreational attractions.
          </p>
        </div>

        <div className="overflow-hidden border-8 border-[#D6AE70]/40 shadow-2xl">
          <img
            src={photos.lake}
            alt="Pilikula Botanical Garden lake and tree cover"
            className="h-[430px] w-full object-cover"
          />
        </div>
      </section>

      {/* Historical Highlight */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9]">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#D6AE70]">
            The Meaning Behind the Name
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            The Story of Pilikula
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-9 text-[#E5D5C4]">
            The name Pilikula reflects a local story preserved through
            generations. In Tulu, "Pili" means tiger and "Kula" means pond.
            It is believed that tigers once came to a large pond in this
            locality to drink water. Today, Pilikula carries this connection
            with nature forward through its wildlife conservation,
            environmental education and cultural attractions.
          </p>

          <div className="mx-auto mt-10 h-1 w-24 bg-[#D6AE70]" />
        </div>
      </section>

      {/* Experiences */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover Pilikula
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
              href="https://www.google.com/maps/search/?api=1&query=Pilikula+Nisargadhama+Mangaluru"
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
                href="https://commons.wikimedia.org/wiki/File:Pilikula_Nisargadhama.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Pilikula Nisargadhama
              </a>{" "}
              — Photograph by Firozrahiman, released into the public domain.
            </li>

            <li>
              2.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/Category:Pilikula_Botanical_Garden"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Pilikula Botanical Garden photographs
              </a>{" "}
              — Lake and tree cover.
            </li>

            <li>
              3.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Pilikula_Nisargadhama_-_Heritage_Village_or_Guthu_Mane_01.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Pilikula Heritage Village or Guthu Mane
              </a>{" "}
              — Photograph by Vishwanatha Badikana, CC BY-SA 4.0.
            </li>

            <li>
              4.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:A_bear_from_Pilikula.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                A bear from Pilikula
              </a>{" "}
              — Wikimedia Commons.
            </li>

            <li>
              5.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Weaver_Charaka_Heritage_Village,_Pilikula_Nisargadhama_%E0%B2%A8%E0%B3%87%E0%B2%95%E0%B2%BE%E0%B2%B0%E0%B2%BF%E0%B2%95%E0%B3%86_1.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Weaver Charaka, Pilikula Heritage Village
              </a>{" "}
              — Photograph by Vishwanatha Badikana.
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
