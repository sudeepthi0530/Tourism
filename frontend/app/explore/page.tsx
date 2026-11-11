
const categories = [
  {
    name: "Beaches",
    description: "Discover beautiful beaches and peaceful coastal landscapes.",
    image: "https://web-cms.karnatakatourism.org/wp-content/uploads/2025/06/Tannirbhavi-Beach-e1750678541671.jpg?v=2",
    href: "/explore/beaches",
  },
  {
    name: "Temples",
    description: "Explore ancient temples and spiritual destinations.",
    image: "https://mangaluru.adaniairports.com/-/media/Images/AdaniAirMangalore/All-Latest/In-the-City/KUDROLI.png",
    href: "/explore/temples",
  },
  {
    name: "Heritage",
    description: "Experience the history and architecture of our region.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/St.Aloysius_Chapel,Mangalore.jpg?width=1200",
    href: "/explore/heritage",
  },
  {
    name: "Nature & Parks",
    description: "Enjoy green spaces, wildlife and natural attractions.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200",
    href: "/explore/nature",
  },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#F3E9D9] text-[#27151F]"
      style={{ fontFamily: '"Bell MT", "Baskerville", "Georgia", serif' }}>

      <nav className="flex items-center justify-between bg-[#27151F] px-8 py-5 text-[#F3E9D9]">
        <a href="/" className="text-2xl tracking-widest text-[#D6AE70]">
          NAMMA DAKSHINA
        </a>
        <a href="/" className="text-sm hover:text-[#D6AE70]">
          ← Back to Home
        </a>
      </nav>

      <section className="px-6 py-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#A64F3C]">
          Discover Our Land
        </p>

        <h1 className="text-5xl md:text-6xl">
          Explore Dakshina Kannada
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#65534D]">
          From beautiful coastlines and historic temples to cultural
          landmarks and natural attractions, discover the treasures
          of Dakshina Kannada.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group overflow-hidden border border-[#C6A16B]/50 bg-[#F8F1E7] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl text-[#27151F]">
                  {category.name}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#65534D]">
                  {category.description}
                </p>

                <span className="mt-6 inline-block border border-[#C6A16B] px-5 py-3 text-sm text-[#A64F3C] transition hover:bg-[#27151F] hover:text-[#D6AE70]">
                  Explore More →
                </span>
              </div>
            </a>
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
