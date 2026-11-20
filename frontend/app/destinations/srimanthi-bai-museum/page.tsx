
"use client";

import Link from "next/link";

const pageFont = '"Bell MT", "Baskerville", "Georgia", serif';

const photos = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Seemanthi_Bai_Government_Museum_Bejai_Mangaluru_-_2.jpg",
  about:
    "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_131121_Museum2.jpg",
};

const galleryPhotos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Seemanthi_Bai_Government_Museum_Bejai_Mangaluru_-_2.jpg",
    alt: "Srimanthi Bai Government Museum building",
  },
  {
    src: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_131121_Museum3.jpg",
    alt: "Museum display with traditional sculptures",
  },
  {
    src: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_131121_Museum4.jpg",
    alt: "Traditional figurines displayed in museum cabinets",
  },
  {
    src: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_131121_Museum5.jpg",
    alt: "Museum outdoor grounds and sculpture",
  },
  {
    src: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_131121_Museum6.jpg",
    alt: "Traditional carved wooden window display",
  },
  {
    src: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_131121_Museum1.jpg",
    alt: "Museum grounds and historic cannon",
  },
];

const experiences = [
  {
    title: "Explore Historical Artefacts",
    description:
      "Discover archaeological objects, stone sculptures, metal objects and other historical artefacts representing different periods and cultures.",
  },
  {
    title: "Discover Traditional Wood Carvings",
    description:
      "Observe traditional wooden objects and carved figures that reflect the artistic traditions and craftsmanship of different regions.",
  },
  {
    title: "Explore the Coin Collection",
    description:
      "Learn about historical currencies and coins, including examples associated with different regions and periods.",
  },
  {
    title: "Admire Paintings and Manuscripts",
    description:
      "Explore paintings, palm-leaf manuscripts, paper documents and other historical materials preserved in the museum.",
  },
  {
    title: "Learn About Colonel Mirajkar",
    description:
      "Discover the story of Colonel V. R. Mirajkar, the former owner of the building whose collection helped establish the museum.",
  },
  {
    title: "Experience the Museum Architecture",
    description:
      "Explore the distinctive historic residence, known locally as Mirajkar Bungalow, and its unusual architectural character.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    value:
      "Bejai, Mangaluru, Dakshina Kannada, Karnataka – 575004, India.",
  },
  {
    title: "Visiting Hours",
    value:
      "10:00 AM – 5:00 PM. Closed on Mondays, according to the Government of India's 2023 museum directory. Confirm current hours before visiting.",
  },
  {
    title: "Entry Fee",
    value:
      "The Government of India's 2023 museum directory lists free admission. Confirm the current entry policy before your visit.",
  },
  {
    title: "Contact",
    value: "+91 824 221 1106",
  },
  {
    title: "How to Reach",
    value:
      "The museum is located in Bejai, approximately 1 km east of the KSRTC Bus Stand. Local buses, auto-rickshaws and taxis can be used to reach it.",
  },
  {
    title: "Photography",
    value:
      "Photography restrictions have been reported inside the museum. Please ask museum staff for permission before taking photographs.",
  },
  {
    title: "Best Time to Visit",
    value:
      "Weekday mornings are a good option for a quieter visit. Avoid Mondays when the museum is listed as closed.",
  },
  {
    title: "Nearby Attraction",
    value:
      "The museum is situated within Mangaluru city and can be included in a city heritage tour.",
  },
];

export default function SrimanthiBaiMuseumPage() {
  return (
    <main
      className="min-h-screen bg-[#F3E9D9] text-[#27151F]"
      style={{ fontFamily: pageFont }}
    >
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-[#C6A16B]/40 bg-[#27151F] px-6 py-5 text-[#F3E9D9] md:px-12">
        <Link href="/" className="text-2xl tracking-wide">
          NAMMA DAKSHINA
        </Link>

        <div className="flex gap-5 text-sm md:gap-8">
          <Link href="/" className="transition hover:text-[#D6AE70]">
            Home
          </Link>

          <Link href="/explore" className="transition hover:text-[#D6AE70]">
            Explore
          </Link>

          <Link
            href="/explore/heritage"
            className="transition hover:text-[#D6AE70]"
          >
            Heritage
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex min-h-[570px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(39,21,31,0.55), rgba(39,21,31,0.80)), url('${photos.hero}')`,
        }}
      >
        <div className="max-w-4xl text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#D6AE70]">
            History · Art · Archaeology
          </p>

          <h1 className="mb-6 text-5xl leading-tight md:text-7xl">
            Srimanthi Bai
            <br />
            Memorial Government Museum
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#F3E9D9]/90 md:text-lg">
            Discover the history of Mangaluru through fascinating
            collections of sculptures, paintings, coins, manuscripts and
            traditional artefacts at the historic Bejai Museum.
          </p>

          <a
            href="#about"
            className="mt-9 inline-block border border-[#D6AE70] px-8 py-3 text-sm uppercase tracking-widest text-[#D6AE70] transition hover:bg-[#D6AE70] hover:text-[#27151F]"
          >
            Explore the Museum
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10"
      >
        <div className="mb-5 text-center text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          A Treasure of History
        </div>

        <h2 className="mb-10 text-center text-4xl md:text-5xl">
          About the Museum
        </h2>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-sm shadow-xl">
            <img
              src={photos.about}
              alt="Historic building of Srimanthi Bai Memorial Government Museum"
              className="h-[350px] w-full object-cover"
            />
          </div>

          <div className="space-y-5 text-[16px] leading-8 text-[#55434A]">
            <p>
              Srimanthi Bai Memorial Government Museum, popularly known as
              Bejai Museum, is located in Bejai, Mangaluru. It is an
              archaeological and historical museum preserving a diverse
              collection of objects connected with art, culture and history.
            </p>

            <p>
              The museum is associated with Colonel V. R. Mirajkar, who
              donated his residence and collection to the Government in
              1955. The museum was formally inaugurated on 4 May 1960 and
              named in memory of his mother, Srimanthi Bai.
            </p>

            <p>
              Its collections include stone sculptures, wooden objects,
              porcelain, paintings, coins, palm-leaf manuscripts, metal
              objects, historical documents and other artefacts.
            </p>

            <p>
              The building itself is an interesting part of the museum's
              heritage. It was originally the residence of Colonel Mirajkar
              and is locally known as Mirajkar Bungalow.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            Discover the Collections
          </p>

          <h2 className="mb-12 text-center text-4xl md:text-5xl">
            What to Experience
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item, index) => (
              <div
                key={item.title}
                className="border border-[#C6A16B]/40 bg-[#351F2B] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D6AE70]"
              >
                <p className="mb-5 text-3xl text-[#D6AE70]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mb-4 text-2xl text-[#D6AE70]">
                  {item.title}
                </h3>

                <p className="leading-7 text-[#F3E9D9]/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          Plan Your Visit
        </p>

        <h2 className="mb-12 text-center text-4xl md:text-5xl">
          Visitor Information
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {visitorInfo.map((item) => (
            <div
              key={item.title}
              className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7 shadow-sm"
            >
              <h3 className="mb-3 text-2xl text-[#8C4A45]">
                {item.title}
              </h3>

              <p className="leading-7 text-[#55434A]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Srimanthi+Bai+Memorial+Government+Museum+Bejai+Mangaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#8C4A45] bg-[#8C4A45] px-8 py-3 text-sm uppercase tracking-widest text-white transition hover:bg-[#27151F]"
          >
            View on Google Maps
          </a>

          <a
            href="https://archaeology.karnataka.gov.in/page/Government+Museums/Shreemanthi+Bai+Memorial+Government+Museum+Mangaluru/en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#8C4A45] px-8 py-3 text-sm uppercase tracking-widest text-[#8C4A45] transition hover:bg-[#8C4A45] hover:text-white"
          >
            Official Museum Website
          </a>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            Glimpses of History
          </p>

          <h2 className="mb-12 text-center text-4xl md:text-5xl">
            Photo Gallery
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.src}
                className="group overflow-hidden border border-[#C6A16B]/40"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photograph Sources */}
      <section className="bg-[#F3E9D9] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-6xl text-[#55434A]">
          <h3 className="mb-5 text-lg">
            Photograph sources:
          </h3>

          <div className="space-y-3 text-sm">
            <p>
              Museum exterior:{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Seemanthi_Bai_Government_Museum_Bejai_Mangaluru_-_2.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#A64F3C]"
              >
                Bharathesha Alasandemajalu – Wikimedia Commons (CC0)
              </a>
            </p>

            <p>
              Museum building and collection photographs:{" "}
              <a
                href="https://www.daijiworld.com/news/newsDisplay?newsID=893239"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#A64F3C]"
              >
                Daijiworld – Shobha Rao Smilemaker's photo report (2021)
              </a>
            </p>
          </div>

          <p className="mt-5 text-xs leading-6 text-[#55434A]/80">
            The Wikimedia Commons photograph is published under the CC0
            Public Domain Dedication. The other photographs are from the
            linked Daijiworld report. Their reuse permission has not been
            established; obtain permission from the copyright holder before
            republishing or using them commercially.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#27151F] px-6 py-10 text-center text-[#F3E9D9]">
        <p className="mb-3 text-2xl tracking-wide text-[#D6AE70]">
          NAMMA DAKSHINA
        </p>

        <p className="text-sm text-[#F3E9D9]/70">
          Discover the heritage, culture and beauty of Dakshina Kannada.
        </p>

        <p className="mt-5 text-xs text-[#F3E9D9]/50">
          © 2026 Namma Dakshina. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
