
const experiences = [
  {
    title: "The Sacred Cave Shrine",
    description:
      "Explore the natural cave that forms the heart of Nellithirtha Temple. Visitors descend into the cave through a narrow entrance to reach the sacred shrine dedicated to Lord Somanatheshwara.",
  },
  {
    title: "Darshan of Lord Somanatheshwara",
    description:
      "Experience worship at the ancient Shiva shrine located inside the cave. The naturally formed surroundings create a distinctive atmosphere for prayer and devotion.",
  },
  {
    title: "The Sacred Water Pond",
    description:
      "Discover the water pond inside the cave, traditionally associated with the temple's religious practices. Its natural setting adds to the spiritual significance of the cave.",
  },
  {
    title: "The Cave Exploration",
    description:
      "Experience the unusual journey through the cave passage. Visitors should be prepared for narrow, uneven and sometimes wet surfaces while following the temple's safety instructions.",
  },
  {
    title: "Annual Temple Festival",
    description:
      "Learn about the temple's annual religious celebrations dedicated to Lord Somanatheshwara, when devotees gather for special worship and traditional ceremonies.",
  },
  {
    title: "A Natural and Spiritual Setting",
    description:
      "Enjoy the peaceful surroundings of Nellithirtha, where the forest landscape and natural cave formation create a memorable combination of nature and spirituality.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Nellithirtha, near Kateel, Dakshina Kannada district, Karnataka.",
    link: "https://www.google.com/maps/search/?api=1&query=Nellithirtha+Somanatheshwara+Guhalaya",
    linkText: "View on Google Maps",
  },
  {
    title: "Visiting Hours",
    description:
      "Cave access is subject to temple opening hours and local conditions. Confirm the current timings and cave entry arrangements before travelling.",
  },
  {
    title: "Entry Fee",
    description:
      "Temple darshan and cave access arrangements may differ. Check with temple authorities for any applicable charges.",
  },
  {
    title: "How to Reach",
    description:
      "Nellithirtha is accessible from Mangaluru and surrounding towns by road. Visitors can travel by private vehicle or taxi and use local transport where available.",
  },
  {
    title: "Best Time to Visit",
    description:
      "October to February is generally suitable for exploring the area. Avoid entering the cave during heavy rainfall or whenever access is restricted.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Wear comfortable clothing with suitable footwear for the approach. Follow cave safety instructions, watch your footing on wet surfaces and do not enter restricted areas.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    alt: "Natural landscape surrounding a temple",
  },
  {
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    alt: "Green forest surroundings",
  },
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=80",
    alt: "Natural landscape and greenery",
  },
];

export default function NellithirthaTemplePage() {
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

      {/* Hero Section */}
      <section
        className="relative flex min-h-[65vh] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(39,21,31,0.55), rgba(39,21,31,0.75)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="max-w-4xl text-[#F3E9D9]">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6AE70]">
            Natural Cave Heritage
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Nellithirtha Shri Somanatheshwara Guhalaya
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#F3E9D9]/90">
            Discover a unique cave temple where natural rock formations
            surround an ancient shrine dedicated to Lord Shiva.
          </p>
          <p className="mt-5 text-sm tracking-widest text-[#D6AE70]">
            ◆ NELLITHIRTHA, DAKSHINA KANNADA ◆
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          About the Destination
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          A Temple Hidden Within a Natural Cave
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="leading-8 text-[#75665D]">
            <p>
              Nellithirtha Shri Somanatheshwara Guhalaya is a distinctive
              cave temple in Dakshina Kannada, dedicated to Lord Shiva.
              Unlike conventional temple complexes, its main shrine is
              located within a natural cave formed by rock formations.
            </p>
            <p className="mt-5">
              Visitors traditionally enter the cave through a narrow
              passage and descend towards the sacred shrine. The natural
              water and unusual cave surroundings make Nellithirtha
              a memorable destination for devotees and visitors
              interested in the region's natural and religious heritage.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80"
            alt="Green natural surroundings"
            className="h-80 w-full border border-[#C6A16B]/50 object-cover"
          />
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-[#E9DDCC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Experiences to Explore
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {experiences.map((item) => (
              <div
                key={item.title}
                className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-2xl text-[#C6A16B]">✦</span>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#75665D]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          Plan Your Visit
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          Visitor Information
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visitorInfo.map((item) => (
            <div
              key={item.title}
              className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-6"
            >
              <h3 className="text-xl font-bold text-[#27151F]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-[#75665D]">
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-[#A64F3C] underline underline-offset-4"
                >
                  {item.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#E9DDCC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Visual Journey
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Photo Gallery
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {gallery.map((image) => (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="h-72 w-full border border-[#C6A16B]/50 object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#C6A16B]/40 bg-[#27151F] px-6 py-8 text-center text-sm text-[#D6AE70]">
        © 2026 Namma Dakshina. Discover the beauty of Dakshina Kannada.
      </footer>
    </main>
  );
}
