
const heritagePlaces = [
  {
    name: "St. Aloysius Chapel",
    location: "Mangaluru",
    description:
      "Famous for its beautiful interior paintings and remarkable European-style architecture.",
    image: "https://images.unsplash.com/photo-1514894780887-121968d00567?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/st-aloysius-chapel",
  },
  {
    name: "Saavira Kambada Basadi",
    location: "Moodabidri",
    description:
      "A historic Jain temple renowned for its thousand intricately carved pillars and traditional architecture.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/saavira-kambada-basadi",
  },
  {
    name: "Sultan Battery",
    location: "Boloor, Mangaluru",
    description:
      "A historic watchtower built during the reign of Tipu Sultan, overlooking the Gurupura River.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/sultan-battery",
  },
  {
    name: "Rosario Cathedral",
    location: "Mangaluru",
    description:
      "One of the historic churches of Mangaluru, known for its religious importance and architecture.",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c34a?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/rosario-cathedral",
  },
  {
    name: "Milagres Church",
    location: "Hampankatta, Mangaluru",
    description:
      "A historic church in the heart of Mangaluru, admired for its architecture and heritage.",
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/milagres-church",
  },
  {
    name: "Venur Bahubali Statue",
    location: "Venur, Belthangady",
    description:
      "A historic monolithic statue of Lord Bahubali, representing Jain heritage and architecture.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/venur-bahubali",
  },
  {
    name: "Jamalabad Fort",
    location: "Belthangady",
    description:
      "A historic hilltop fort associated with Tipu Sultan, offering a glimpse into the region's past.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/jamalabad-fort",
  },
  {
    name: "Guru Basadi",
    location: "Moodabidri",
    description:
      "An ancient Jain basadi known for its historical importance and connection with Jain manuscripts.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/guru-basadi",
  },
  {
    name: "Karinjeshwara Temple",
    location: "Karinje, Bantwal",
    description:
      "A historic hilltop temple surrounded by natural beauty and scenic landscapes.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/karinjeshwara-temple",
  },
  {
    name: "Narahari Parvatha Sadashiva Temple",
    location: "Bantwal",
    description:
      "A historic hilltop temple known for its peaceful surroundings, sacred ponds and panoramic views.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/narahari-parvatha",
  },
  {
    name: "Srimanthi Bai Memorial Government Museum",
    location: "Mangaluru",
    description:
      "A museum preserving historical artefacts and collections connected with the region's cultural heritage.",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/srimanthi-bai-museum",
  },
  {
    name: "Chowta Palace",
    location: "Moodabidri",
    description:
      "A historic palace associated with the Chowta dynasty, reflecting the traditional heritage of the region.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=80",
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
        <a href="/" className="text-2xl font-bold tracking-wide text-[#D6AE70]">
          Namma Dakshina
        </a>
        <div className="flex gap-6 text-sm">
          <a href="/" className="transition hover:text-[#D6AE70]">
            Home
          </a>
          <a href="/explore" className="transition hover:text-[#D6AE70]">
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
              <div className="h-64 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
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