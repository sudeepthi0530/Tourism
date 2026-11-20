
const temples = [
  {
    name: "Kudroli Gokarnath Temple",
    location: "Mangaluru",
    description:
      "A beautiful temple known for its colourful architecture and grand Mangaluru Dasara celebrations.",
    image:
      "https://www.mangalurutaxi.com/uploads/image/top-travel-packages/famous-temples-in-around-mangalore/kudroli-gokarnath-temple.jpg?utm_source=chatgpt.com ",
    link: "/destinations/kudroli-temple",
  },
  {
    name: "Kadri Manjunatha Temple",
    location: "Kadri, Mangaluru",
    description:
      "An ancient temple dedicated to Lord Manjunatha, known for its historic surroundings and sacred ponds.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kadri_Manjunatha_Temple.jpg",
    link: "/destinations/kadri-manjunatha-temple",
  },
  {
    name: "Kateel Durga Parameshwari Temple",
    location: "Kateel, Dakshina Kannada",
    description:
      "A famous temple dedicated to Goddess Durga Parameshwari, situated on the banks of the Nandini River.",
    image:
      "https://www.mappls.com/place/35WFDC_1735174565706_0.jpg?utm_source=chatgpt.com",
    link: "/destinations/kateel-temple",
  },
  {
    name: "Mangaladevi Temple",
    location: "Mangaluru",
    description:
      "A historic temple dedicated to Goddess Mangaladevi, associated with the origin of the name Mangaluru.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mangaladevi_Temple_entrance%2C_Mangaladevi%2C_Mangalore.jpg",
    link: "/destinations/mangaladevi-temple",
  },
  {
    name: "Shri Ananthapadmanabha Swamy Temple",
    location: "Kudupu, Mangaluru",
    description:
      "A sacred temple dedicated to Lord Ananthapadmanabha, known for its spiritual importance.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kudupu_Shree_Ananthapadhmanabha_Temple%2C_Mangalore.jpg",
    link: "/destinations/ananthapadmanabha-temple",
  },
  {
    name: "Southadka Shri Mahaganapathi Temple",
    location: "Southadka, Belthangady",
    description:
      "A unique open-air temple dedicated to Lord Ganesha, surrounded by beautiful natural scenery.",
    // Image needs authentic photograph verification.
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/f6/0f/b1/bells.jpg?utm_source=chatgpt.com",
    link: "/destinations/southadka-temple",
  },
  {
    name: "Sharavu Mahaganapathi Temple",
    location: "Mangaluru",
    description:
      "A well-known temple dedicated to Lord Mahaganapathi and an important centre of devotion in Mangaluru.",
    // Replace after verifying an authentic Sharavu Temple photograph.
    image:
      "https://templeinkarnataka.com/wp-content/uploads/2024/08/Shree-Sharavu-Mahaganapathi-Temple-Mangalore.jpg?utm_source=chatgpt.com",
    link: "/destinations/sharavu-temple",
  },
  {
    name: "Bappanadu Shri Durga Parameshwari Temple",
    location: "Mulki, Dakshina Kannada",
    description:
      "A famous temple dedicated to Goddess Durga Parameshwari, located near the Shambhavi River.",
    image:
      "https://palmbreezebeachresort.com/wp-content/uploads/2025/04/bappanadu-sri-durga-parameshwari-temple.webp?utm_source=chatgpt.com",
    link: "/destinations/bappanadu-temple",
  },
  {
    name: "Polali Rajarajeshwari Temple",
    location: "Polali, Bantwal",
    description:
      "An ancient temple dedicated to Goddess Rajarajeshwari, known for its traditional architecture and annual festivals.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Shree_Rajarajeshwari_Temple%2C_Polali.jpg",
    link: "/destinations/polali-temple",
  },
  {
    name: "Nellithirtha Shri Somanatheshwara Guhalaya",
    location: "Nellithirtha, Dakshina Kannada",
    description:
      "A unique cave temple dedicated to Lord Somanatheshwara, known for its natural cave and spiritual significance.",
    // Replace after verifying an authentic Nellithirtha Temple photograph.
    image:
      "https://nellitheerthacavetemple.com/wp-content/uploads/2024/09/donation2.jpg",
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
      {/* Navigation */}
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

      {/* Page Heading */}
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

      {/* Temple Cards */}
      <section className="px-6 pb-20 md:px-16">
        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {temples.map((temple) => (
            <article
              key={temple.name}
              className="group flex h-full flex-col overflow-hidden border border-[#C6A16B]/50 bg-[#F8F1E7] transition-all duration-500 hover:-translate-y-2 hover:border-[#A64F3C] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="h-64 shrink-0 overflow-hidden bg-[#E9DCCB]">
                <img
                  src={temple.image}
                  alt={temple.name}
                  loading="lazy"
                  className="block h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="min-h-[3.5rem] line-clamp-2 text-2xl font-bold text-[#27151F]">
                  {temple.name}
                </h2>

                <p className="mt-3 flex min-h-6 items-center gap-2 text-sm text-[#897A70]">
                  <span className="text-[#C6A16B]">◆</span>
                  {temple.location}
                </p>

                <p className="mt-4 min-h-[5.25rem] line-clamp-3 leading-7 text-[#75665D]">
                  {temple.description}
                </p>

                {/* Button */}
                <a
                  href={temple.link}
                  className="mt-auto inline-block self-start border border-[#C6A16B] bg-transparent px-5 py-3 text-sm tracking-wide text-[#A64F3C] transition-all duration-300 hover:bg-[#27151F] hover:text-[#D6AE70]"
                >
                  Discover More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C6A16B]/40 bg-[#27151F] px-6 py-8 text-center text-sm text-[#D6AE70]">
        © 2026 Namma Dakshina. Discover the beauty of Dakshina Kannada.
      </footer>
    </main>
  );
}
