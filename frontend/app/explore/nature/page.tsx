
const naturePlaces = [
  {
    name: "Pilikula Nisargadhama",
    location: "Moodushedde, Mangaluru",
    description:
      "A popular eco-education and tourism destination featuring a biological park, lake, botanical garden and heritage village.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/pilikula-nisargadhama",
  },
  {
    name: "Kadri Park",
    location: "Kadri, Mangaluru",
    description:
      "A peaceful urban park with green spaces, walking paths and recreational areas for families.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/kadri-park",
  },
  {
    name: "Tannirbhavi Tree Park",
    location: "Tannirbhavi, Mangaluru",
    description:
      "A coastal green space with native trees and natural surroundings, offering a relaxing outdoor experience.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/tannirbhavi-tree-park",
  },
  {
    name: "Sammilan Shetty's Butterfly Park",
    location: "Belvai, Moodabidri",
    description:
      "A nature attraction dedicated to butterflies, offering visitors an opportunity to learn about their life cycles and habitats.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/butterfly-park",
  },
  {
    name: "Adyar Falls",
    location: "Adyar, Mangaluru",
    description:
      "A scenic natural spot surrounded by greenery, popular with visitors who enjoy peaceful outdoor locations.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/adyar-falls",
  },
  {
    name: "Soans Farm",
    location: "Moodabidri, Dakshina Kannada",
    description:
      "A farm attraction known for its greenery, plantations and agricultural surroundings.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/soans-farm",
  },
];

export default function NaturePage() {
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
          Natural Beauty
        </p>
        <h1 className="text-4xl font-bold text-[#27151F] md:text-6xl">
          Nature & Parks
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#75665D]">
          Experience the natural beauty of Dakshina Kannada through its green
          spaces, waterfalls, gardens and wildlife attractions.
        </p>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {naturePlaces.map((place) => (
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
