

const temples = [
  {
    name: "Kudroli Gokarnath Temple",
    location: "Mangaluru",
    description:
      "A beautiful temple known for its colourful architecture and grand Mangaluru Dasara celebrations.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/kudroli-temple",
  },
  {
    name: "Kadri Manjunatha Temple",
    location: "Kadri, Mangaluru",
    description:
      "An ancient temple dedicated to Lord Manjunatha, known for its historic surroundings and sacred ponds.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/kadri-manjunatha-temple",
  },
  {
    name: "Kateel Durga Parameshwari Temple",
    location: "Kateel, Dakshina Kannada",
    description:
      "A famous temple dedicated to Goddess Durga Parameshwari, situated on the banks of the Nandini River.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/kateel-temple",
  },
  {
    name: "Mangaladevi Temple",
    location: "Mangaluru",
    description:
      "A historic temple dedicated to Goddess Mangaladevi, associated with the origin of the name Mangaluru.",
    image: "https://images.unsplash.com/photo-1604608672516-4d5d8c5c7b7e?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/mangaladevi-temple",
  },
  {
    name: "Shri Ananthapadmanabha Swamy Temple",
    location: "Kudupu, Mangaluru",
    description:
      "A sacred temple dedicated to Lord Ananthapadmanabha, known for its spiritual importance.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/ananthapadmanabha-temple",
  },
  {
    name: "Southadka Shri Mahaganapathi Temple",
    location: "Southadka, Belthangady",
    description:
      "A unique open-air temple dedicated to Lord Ganesha, surrounded by beautiful natural scenery.",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/southadka-temple",
  },
  {
    name: "Sharavu Mahaganapathi Temple",
    location: "Mangaluru",
    description:
      "A well-known temple dedicated to Lord Mahaganapathi and an important centre of devotion in Mangaluru.",
    image: "https://images.unsplash.com/photo-1590123702193-5f5a8c6f8f3b?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/sharavu-temple",
  },
  {
    name: "Bappanadu Shri Durga Parameshwari Temple",
    location: "Mulki, Dakshina Kannada",
    description:
      "A famous temple dedicated to Goddess Durga Parameshwari, located near the Shambhavi River.",
    image: "https://images.unsplash.com/photo-1600100397608-f010e0a9a6e4?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/bappanadu-temple",
  },
  {
    name: "Polali Rajarajeshwari Temple",
    location: "Polali, Bantwal",
    description:
      "An ancient temple dedicated to Goddess Rajarajeshwari, known for its traditional architecture and annual festivals.",
    image: "https://images.unsplash.com/photo-1604608672516-4d5d8c5c7b7e?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/polali-temple",
  },
  {
    name: "Nellithirtha Shri Somanatheshwara Guhalaya",
    location: "Nellithirtha, Dakshina Kannada",
    description:
      "A unique cave temple dedicated to Lord Somanatheshwara, known for its natural cave and spiritual significance.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    link: "/destinations/nellithirtha-temple",
  },
];


export default function TemplesPage() {
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
          Spiritual Heritage
        </p>
        <h1 className="text-4xl font-bold text-[#27151F] md:text-6xl">
          Sacred Temples
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#75665D]">
          Discover the sacred temples of Dakshina Kannada, where devotion,
          history and beautiful architecture come together.
        </p>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {temples.map((temple) => (
            <article
              key={temple.name}
              className="group overflow-hidden border border-[#C6A16B]/50 bg-[#F8F1E7] transition-all duration-500 hover:-translate-y-2 hover:border-[#A64F3C] hover:shadow-2xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#27151F]">
                  {temple.name}
                </h2>
                <p className="mt-3 flex items-center gap-2 text-sm text-[#897A70]">
                  <span className="text-[#C6A16B]">◆</span>
                  {temple.location}
                </p>
                <p className="mt-4 leading-7 text-[#75665D]">
                  {temple.description}
                </p>
                <a
                  href={temple.link}
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
