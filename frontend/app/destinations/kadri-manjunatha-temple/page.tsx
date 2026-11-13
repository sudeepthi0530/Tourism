
const experiences = [
  {
    title: "The Ancient History of Kadri",
    description:
      "Explore the temple's long history and its connections with Buddhist traditions. Kadri is known for its historical importance and its evolution into an important centre of Shaivite worship.",
  },
  {
    title: "The Bronze Lokeshwara Statue",
    description:
      "Discover the famous bronze statue of Lokeshwara, also known as Avalokiteshvara. This remarkable sculpture is one of the temple's most celebrated historical and artistic treasures.",
  },
  {
    title: "The Seven Sacred Water Tanks",
    description:
      "Visit the seven sacred water tanks located near the temple. These water bodies are an important part of the temple's traditional religious setting.",
  },
  {
    title: "The Natural Gomukha Spring",
    description:
      "See the natural spring from which water flows through a cow-shaped structure. The spring adds to the temple's distinctive spiritual atmosphere.",
  },
  {
    title: "Annual Car Festival",
    description:
      "Experience the temple's annual festival celebrations, including traditional religious ceremonies and the chariot procession that brings devotees together.",
  },
  {
    title: "Pandava Caves",
    description:
      "Explore the nearby rock-cut caves traditionally associated with the Pandavas. They add another layer of historical interest to the Kadri hill area.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Kadri Hills, Mangaluru, Dakshina Kannada, Karnataka 575004.",
    link: "https://www.google.com/maps/search/?api=1&query=Kadri+Manjunatha+Temple+Mangaluru",
    linkText: "View on Google Maps",
  },
  {
    title: "Visiting Hours",
    description:
      "Temple timings may vary according to daily rituals and special occasions. Confirm the current schedule with temple authorities before visiting.",
  },
  {
    title: "Entry Fee",
    description:
      "General temple darshan is generally free. Special poojas and religious services may have separate charges.",
  },
  {
    title: "How to Reach",
    description:
      "Kadri Temple is accessible from central Mangaluru by local buses, auto-rickshaws and taxis. Visitors can use Kadri Hills as their destination.",
  },
  {
    title: "Best Time to Visit",
    description:
      "October to February is generally pleasant for exploring the temple and its surroundings. Festival periods offer an opportunity to experience local traditions.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Wear modest clothing, maintain cleanliness and respect temple customs. Follow instructions regarding photography and access to religious areas.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    alt: "Traditional Indian temple architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=80",
    alt: "Traditional religious architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
    alt: "Historic temple surroundings",
  },
];

export default function KadriManjunathaTemplePage() {
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
            Ancient Heritage of Mangaluru
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Kadri Manjunatha Temple
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#F3E9D9]/90">
            Discover an ancient hilltop temple known for its spiritual
            traditions, historical sculptures and sacred natural springs.
          </p>
          <p className="mt-5 text-sm tracking-widest text-[#D6AE70]">
            ◆ KADRI HILLS, MANGALURU ◆
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          About the Destination
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          Where Ancient History Meets Spirituality
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="leading-8 text-[#75665D]">
            <p>
              Kadri Manjunatha Temple is an important historical and
              religious landmark situated on Kadri Hills in Mangaluru.
              Dedicated to Lord Manjunatha, a form of Lord Shiva, the
              temple is known for its ancient traditions and distinctive
              architectural features.
            </p>
            <p className="mt-5">
              The temple is particularly notable for its historical
              connections with Buddhist traditions and its celebrated
              bronze Lokeshwara sculpture. Its seven sacred water tanks
              and natural Gomukha spring make the temple surroundings
              especially distinctive. Kadri remains an important
              destination for devotees, history enthusiasts and visitors
              interested in the heritage of Dakshina Kannada.
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
