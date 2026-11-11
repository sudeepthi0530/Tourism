
const experiences = [
  {
    title: "Temple Architecture",
    description:
      "Admire the traditional temple architecture and peaceful surroundings of this historic shrine.",
  },
  {
    title: "Spiritual Experience",
    description:
      "Experience the peaceful atmosphere and participate in the temple's daily worship.",
  },
  {
    title: "Historical Significance",
    description:
      "Learn about the temple dedicated to Goddess Mangaladevi, associated with the history of Mangaluru.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description: "Bolara, Mangaluru, Dakshina Kannada.",
    link: "https://www.google.com/maps/search/?api=1&query=Mangaladevi+Temple+Mangaluru",
    linkText: "View on Google Maps",
  },
  {
    title: "Visiting Hours",
    description:
      "Temple timings may vary according to daily rituals and special occasions. Check with the temple before visiting.",
  },
  {
    title: "Entry Fee",
    description: "General temple entry is free. Special services may have separate charges.",
  },
  {
    title: "How to Reach",
    description:
      "The temple is accessible by local buses, auto-rickshaws and taxis from different parts of Mangaluru.",
  },
  {
    title: "Best Time to Visit",
    description:
      "October to February offers pleasant weather. Navaratri is an especially important festival period.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Wear modest traditional clothing, maintain silence and respect temple customs and photography restrictions.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    alt: "Traditional Indian temple architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=80",
    alt: "Traditional temple structure",
  },
  {
    src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
    alt: "Historic temple architecture",
  },
];

export default function MangaladeviTemplePage() {
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
            "linear-gradient(rgba(39,21,31,0.55), rgba(39,21,31,0.75)), url('https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="max-w-4xl text-[#F3E9D9]">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6AE70]">
            Sacred Heritage of Mangaluru
          </p>
          <h1 className="text-5xl font-bold md:text-7xl">
            Mangaladevi Temple
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#F3E9D9]/90">
            Discover the spiritual and historical significance of one of
            Mangaluru's most revered temples.
          </p>
          <p className="mt-5 text-sm tracking-widest text-[#D6AE70]">
            ◆ BOLARA, MANGALURU ◆
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          About the Destination
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          A Temple Rooted in History and Devotion
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="leading-8 text-[#75665D]">
            <p>
              Mangaladevi Temple is an important Hindu pilgrimage destination
              located in Bolara, Mangaluru. The temple is dedicated to Goddess
              Mangaladevi and holds a special place in the cultural and
              religious history of the region.
            </p>
            <p className="mt-5">
              The city of Mangaluru is traditionally associated with the
              temple's presiding deity. Devotees visit throughout the year to
              offer prayers and experience its peaceful spiritual atmosphere.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=80"
            alt="Traditional Indian temple architecture"
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
