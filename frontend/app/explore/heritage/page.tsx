
const heritagePlaces = [
  {
    name: "St. Aloysius Chapel",
    location: "Mangaluru",
    description:
      "Famous for its beautiful interior paintings and remarkable European-style architecture.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/St.Aloysius_Chapel%2CMangalore.jpg",
    link: "/destinations/st-aloysius-chapel",
  },
  {
    name: "Saavira Kambada Basadi",
    location: "Moodabidri",
    description:
      "A historic Jain temple renowned for its thousand intricately carved pillars and traditional architecture.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/1000-Pillar-Temple-Moodbidri-Left-Side-View.JPG",
    link: "/destinations/saavira-kambada-basadi",
  },
  {
    name: "Sultan Battery",
    location: "Boloor, Mangaluru",
    description:
      "A historic watchtower built during the reign of Tipu Sultan, overlooking the Gurupura River.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sultan_Battery%2C_Mangaluru_2.jpg",
    link: "/destinations/sultan-battery",
  },
  {
    name: "Rosario Cathedral",
    location: "Mangaluru",
    description:
      "One of the historic churches of Mangaluru, known for its religious importance and architecture.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rosario_Cathedral.jpg",
    link: "/destinations/rosario-cathedral",
  },
  {
    name: "Milagres Church",
    location: "Hampankatta, Mangaluru",
    description:
      "A historic church in the heart of Mangaluru, admired for its architecture and heritage.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Milagres_Church_Mangalore.jpg",
    link: "/destinations/milagres-church",
  },
  {
    name: "Venur Bahubali Statue",
    location: "Venur, Belthangady",
    description:
      "A historic monolithic statue of Lord Bahubali, representing Jain heritage and architecture.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Venur_-_Bahubali.JPG",
    link: "/destinations/venur-bahubali",
  },
  {
    name: "Jamalabad Fort",
    location: "Belthangady",
    description:
      "A historic hilltop fort associated with Tipu Sultan, offering a glimpse into the region's past.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gadaikallu_entrance.JPG",
    link: "/destinations/jamalabad-fort",
  },
  {
    name: "Guru Basadi",
    location: "Moodabidri",
    description:
      "An ancient Jain basadi known for its historical importance and connection with Jain manuscripts.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gurubasati_front_view%2C.JPG",
    link: "/destinations/guru-basadi",
  },
  {
    name: "Karinjeshwara Temple",
    location: "Karinje, Bantwal",
    description:
      "A historic hilltop temple surrounded by natural beauty and scenic landscapes.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Karinjeshwara_top_temple.jpg",
    link: "/destinations/karinjeshwara-temple",
  },
  {
    name: "Narahari Parvatha Sadashiva Temple",
    location: "Bantwal",
    description:
      "A historic hilltop temple known for its peaceful surroundings, sacred ponds and panoramic views.",
    image:
      "https://narahariparvatha.vercel.app/_next/image?q=75&url=%2Fimages%2Ftemple-image.png&w=1200",
    link: "/destinations/narahari-parvatha",
  },
  {
    name: "Srimanthi Bai Memorial Government Museum",
    location: "Mangaluru",
    description:
      "A museum preserving historical artefacts and collections connected with the region's cultural heritage.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Seemanthi_Bai_Government_Museum_Bejai_Mangaluru_-_2.jpg",
    link: "/destinations/srimanthi-bai-museum",
  },
  {
    name: "Chowta Palace",
    location: "Moodabidri",
    description:
      "A historic palace associated with the Chowta dynasty, reflecting the traditional heritage of the region.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chowta_palace_Moodbidri.jpg",
    link: "/destinations/chowta-palace",
  },
];

export default function HeritagePage() {
  return (
    <main
      className="min-h-screen bg-[#F3E9D9] text-[#27151F]"
      style={{
        fontFamily: '"Bell MT", "Baskerville", "Georgia", serif',
      }}
    >
      <nav className="flex items-center justify-between border-b border-[#C6A16B]/40 bg-[#27151F] px-6 py-5 text-[#F3E9D9] md:px-16">
        <a
          href="/"
          className="text-2xl font-bold tracking-wide text-[#D6AE70]"
        >
          Namma Dakshina
        </a>

        <div className="flex gap-6 text-sm">
          <a href="/" className="transition hover:text-[#D6AE70]">
            Home
          </a>
          <a
            href="/explore"
            className="transition hover:text-[#D6AE70]"
          >
            Explore Places
          </a>
        </div>
      </nav>

      <section className="px-6 py-16 text-center md:px-16">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          History & Architecture
        </p>

        <h1 className="text-4xl font-bold text-[#27151F] md:text-6xl">
          Heritage of Dakshina Kannada
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#75665D]">
          Explore the historic landmarks, sacred architecture and cultural
          treasures that tell the story of our region.
        </p>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {heritagePlaces.map((place) => (
            <article
              key={place.name}
              className="group overflow-hidden border border-[#C6A16B]/50 bg-[#F8F1E7] transition-all duration-500 hover:-translate-y-2 hover:border-[#A64F3C] hover:shadow-2xl"
            >
              <div className="h-64 overflow-hidden bg-[#E9DCCB]">
                <img
                  src={place.image}
                  alt={place.name}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-1000 group-hover:scale-105 ${
                    place.name === "Venur Bahubali Statue"
                      ? "object-contain"
                      : "object-cover"
                  }`}
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#27151F]">
                  {place.name}
                </h2>

                <p className="mt-3 flex items-center gap-2 text-sm text-[#897A70]">
                  <span className="text-[#C6A16B]">◆</span>
                  {place.location}
                </p>

                <p className="mt-4 leading-7 text-[#75665D]">
                  {place.description}
                </p>

                <a
                  href={place.link}
                  className="mt-6 inline-block border border-[#C6A16B] bg-transparent px-5 py-3 text-sm tracking-wide text-[#A64F3C] transition-all duration-300 hover:bg-[#27151F] hover:text-[#D6AE70]"
                >
                  Discover More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#C6A16B]/40 bg-[#27151F] px-6 py-8 text-center text-sm text-[#D6AE70]">
        © 2026 Namma Dakshina. Discover the beauty of Dakshina Kannada.
      </footer>
    </main>
  );
}
