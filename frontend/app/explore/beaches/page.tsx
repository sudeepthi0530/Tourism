
const beaches = [
  {
    name: "Panambur Beach",
    location: "Mangaluru",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Panambur_Beach.jpg?width=1200",
    description: "Known for its beautiful coastline, beach activities and spectacular sunsets.",
    href: "/destinations/panambur-beach",
  },
  {
    name: "Tannirbhavi Beach",
    location: "Mangaluru",
    image: "https://web-cms.karnatakatourism.org/wp-content/uploads/2025/06/Tannirbhavi-Beach-e1750678541671.jpg?v=2",
    description: "Enjoy a peaceful coastline, golden sands and scenic sunset views.",
    href: "/destinations/tannirbhavi-beach",
  },
  {
    name: "Someshwar Beach",
    location: "Ullal",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200",
    description: "Explore the scenic shoreline and the famous Rudra Shile rock formation.",
    href: "/destinations/someshwar-beach",
  },
  {
    name: "Surathkal Beach",
    location: "Surathkal",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    description: "Discover a beautiful beach known for its lighthouse and coastal views.",
    href: "/destinations/surathkal-beach",
  },
  {
    name: "Sasihithlu Beach",
    location: "Sasihithlu",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200",
    description: "Experience a peaceful coastal destination surrounded by natural beauty.",
    href: "/destinations/sasihithlu-beach",
  },
];

export default function BeachesPage() {
  return (
    <main
      className="min-h-screen bg-[#F3E9D9] text-[#27151F]"
      style={{ fontFamily: '"Bell MT", "Baskerville", "Georgia", serif' }}
    >
      <nav className="flex items-center justify-between bg-[#27151F] px-8 py-5 text-[#F3E9D9]">
        <a href="/" className="text-2xl tracking-widest text-[#D6AE70]">
          NAMMA DAKSHINA
        </a>
        <a href="/explore" className="text-sm hover:text-[#D6AE70]">
          ← Back to Explore
        </a>
      </nav>

      <section className="px-6 py-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#A64F3C]">
          Discover the Coast
        </p>
        <h1 className="text-5xl md:text-6xl">Beautiful Beaches</h1>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#65534D]">
          Explore the beautiful beaches of Dakshina Kannada,
          from lively coastlines to peaceful seaside escapes.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {beaches.map((beach) => (
            <article
              key={beach.name}
              className="group overflow-hidden border border-[#C6A16B]/50 bg-[#F8F1E7] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${beach.image})` }}
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl">{beach.name}</h2>
                <p className="mt-3 text-sm text-[#897A70]">
                  <span className="text-[#C6A16B]">◆</span> {beach.location}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#65534D]">
                  {beach.description}
                </p>
                <a
                  href={beach.href}
                  className="mt-6 inline-block border border-[#C6A16B] px-5 py-3 text-sm text-[#A64F3C] transition hover:bg-[#27151F] hover:text-[#D6AE70]"
                >
                  Discover More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[#27151F] px-6 py-8 text-center text-[#F3E9D9]">
        <p className="text-lg tracking-widest text-[#D6AE70]">
          NAMMA DAKSHINA
        </p>
        <p className="mt-2 text-sm text-[#C6A16B]">
          Discover the beauty and heritage of Dakshina Kannada.
        </p>
      </footer>
    </main>
  );
}
