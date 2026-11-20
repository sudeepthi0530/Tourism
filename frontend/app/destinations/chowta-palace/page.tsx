
"use client";

import Link from "next/link";

const pageFont = '"Bell MT", "Baskerville", "Georgia", serif';

const photos = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Chowta_palace_Moodbidri.jpg",
  palace: "https://commons.wikimedia.org/wiki/Special:FilePath/Chowta_palace_Moodbidri_2.jpg",
  courtyard:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Inner_Courtyard_of_Chowtar%27s_Palace_at_Mudabidri_N-KA-B203.JPG",
};

const galleryPhotos = [
  {
    src: photos.hero,
    alt: "Chowta Palace at Moodabidri",
  },
  {
    src: photos.palace,
    alt: "Another view of Chowta Palace",
  },
  
];

const experiences = [
  {
    title: "Explore the Chowta Dynasty",
    description:
      "Learn about the Jain Chowta ruling family and Moodabidri's role as an important centre of their administration.",
  },
  {
    title: "Admire Traditional Woodwork",
    description:
      "Discover the palace's carved wooden pillars, decorative ceiling panels and traditional architectural details.",
  },
  {
    title: "Look for Nava Nari Kunjara",
    description:
      "Learn about the remarkable composite carving in which nine women are arranged to form the shape of an elephant.",
  },
  {
    title: "Discover Panchanari Turaga",
    description:
      "Explore the traditional carving described as five women forming the shape of a horse.",
  },
  {
    title: "Understand Moodabidri's Heritage",
    description:
      "Connect the palace's history with the Jain basadis and cultural heritage of Moodabidri.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Chowta Palace (Chowtara Aramane), Moodabidri, Dakshina Kannada, Karnataka, India.",
  },
  {
    title: "Visiting Hours",
    description:
      "Public visiting hours are not reliably confirmed. Please contact the local authorities or palace representatives before planning a visit.",
  },
  {
    title: "Entry Fee",
    description:
      "Entry fee information is not confirmed. Please enquire before visiting.",
  },
  {
    title: "How to Reach",
    description:
      "Moodabidri is connected by road to Mangaluru and other towns in Dakshina Kannada. Local taxis and buses can be used to reach the town.",
  },
  {
    title: "Best Time to Visit",
    description:
      "The cooler months from October to February are generally comfortable for exploring Moodabidri and its heritage sites.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "The palace is associated with the descendants of the Chowta family and includes private residential areas. Do not enter restricted sections. Confirm permission before visiting and follow local instructions.",
  },
];

export default function ChowtaPalacePage() {
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
              href="/explore/heritage"
              className="transition hover:text-[#D6AE70]"
            >
              Heritage
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
            Heritage of Moodabidri
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Chowta Palace
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed md:text-2xl">
            Discover the legacy of the Chowta rulers through the palace's
            remarkable wooden craftsmanship and traditional heritage.
          </p>

          <p className="mt-8 text-sm tracking-widest text-[#D6AE70]">
            MOODABIDRI · DAKSHINA KANNADA
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            A Royal Legacy
          </p>

          <h2 className="mb-7 text-4xl font-bold text-[#27151F] md:text-5xl">
            About Chowta Palace
          </h2>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            Chowta Palace, also known as Chowtara Aramane, is a historic
            residence associated with the Jain Chowta ruling family of
            coastal Karnataka. The family moved its capital to Moodabidri
            around 1603, making the town an important centre of its rule.
          </p>

          <p className="mb-5 text-lg leading-8 text-[#514047]">
            The palace is remembered for its beautifully carved wooden
            pillars and ornate ceiling. Its interior contains remarkable
            traditional sculptural panels, including the Nava Nari Kunjara
            and Panchanari Turaga.
          </p>

          <p className="text-lg leading-8 text-[#514047]">
            The descendants of the Chowta family continue to live in the
            palace. Its surviving architectural details offer a glimpse
            into the artistic traditions and royal heritage of Moodabidri.
          </p>
        </div>

        <div className="overflow-hidden border-8 border-[#D6AE70]/40 shadow-2xl">
          <img
            src={photos.palace}
            alt="Chowta Palace in Moodabidri"
            className="h-[430px] w-full object-cover"
          />
        </div>
      </section>

      {/* Historical Highlight */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9]">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#D6AE70]">
            Architectural Wonder
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Nava Nari Kunjara
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-9 text-[#E5D5C4]">
            One of the palace's most celebrated artistic features is the
            Nava Nari Kunjara. It is a composite carving in which nine
            women are arranged to create the appearance of an elephant.
            The design demonstrates the imagination and craftsmanship
            of traditional wood carving.
          </p>

          <div className="mx-auto mt-10 h-1 w-24 bg-[#D6AE70]" />
        </div>
      </section>

      {/* Experiences */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover the Palace
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
              href="https://www.google.com/maps/search/?api=1&query=Chowta+Palace+Moodabidri"
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
                href="https://commons.wikimedia.org/wiki/File:Chowta_palace_Moodbidri.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Chowta Palace, Moodbidri
              </a>{" "}
              — Photograph by Darshan Shetty12, CC BY-SA 4.0.
            </li>

            <li>
              2.{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Chowta_palace_Moodbidri_2.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A64F3C]"
              >
                Chowta Palace, Moodbidri — second view
              </a>{" "}
              — Photograph by Darshan Shetty12, CC BY-SA 4.0.
            </li>

            
          </ul>

          <p className="mt-4 text-sm leading-6 text-[#6B5960]">
            The photographs are credited to their respective creators.
            They are shared under the licences stated on their Wikimedia
            Commons file pages. Any changes to the photographs should be
            indicated when required by the licence.
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
