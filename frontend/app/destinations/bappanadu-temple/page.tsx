
const experiences = [
  {
    title: "The Legend of Bappu Byari",
    description:
      "Discover the traditional story of Bappu Byari, a Muslim merchant whose encounter on the Shambhavi River is connected with the establishment of this temple. According to the temple's history, he approached the Jain Saavanta rulers of Mulki for support in building the shrine.",
  },
  {
    title: "The Famous Bappanadu Dolu",
    description:
      "Experience the distinctive tradition of Bappanadu Dolu, the large ceremonial drums played during temple festivals and processions. Their powerful rhythms are an important part of the temple's cultural identity.",
  },
  {
    title: "Brahmarathotsava",
    description:
      "Witness the annual grand chariot festival, featuring religious ceremonies, traditional processions and the participation of devotees from surrounding villages.",
  },
  {
    title: "A Tradition of Religious Harmony",
    description:
      "Learn about the temple's distinctive tradition of community participation. The historical account remembers the contribution of Bappu Byari, and members of his family continue to be associated with festival customs.",
  },
  {
    title: "Shambhavi River",
    description:
      "Explore the surroundings of the temple near the Shambhavi River, which forms an important part of the traditional origin story and the natural setting of Bappanadu.",
  },
  {
    title: "Navaratri and Deepotsava",
    description:
      "Experience special worship, devotional activities and traditional celebrations during Navaratri and Deepotsava, two important occasions in the temple calendar.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Bappanadu, Mulki, Dakshina Kannada district, Karnataka 574154.",
    link: "https://www.google.com/maps/search/?api=1&query=Bappanadu+Durga+Parameshwari+Temple+Mulki",
    linkText: "View on Google Maps",
  },
  {
    title: "Visiting Hours",
    description:
      "Published temple timings: 5:30 AM to 1:30 PM and 4:00 PM to 8:30 PM. Timings may change during festivals and special occasions.",
  },
  {
    title: "Entry Fee",
    description:
      "General darshan is free. Special poojas and religious services may have separate charges.",
  },
  {
    title: "How to Reach",
    description:
      "The temple is located in Mulki, along the Mangaluru–Udupi route on National Highway 66. Buses, taxis and private vehicles can reach the temple.",
  },
  {
    title: "Best Time to Visit",
    description:
      "October to February generally offers pleasant weather. The annual Brahmarathotsava and Navaratri are important occasions to experience the temple's traditions.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Wear modest clothing, maintain cleanliness and respect temple customs. Follow the instructions of temple authorities during poojas and festival processions.",
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

export default function BappanaduTemplePage() {
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
            Heritage and Devotion of Mulki
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Bappanadu Shri Durga Parameshwari Temple
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#F3E9D9]/90">
            Discover a historic shrine known for its unique origin story,
            traditional drums and vibrant annual chariot festival.
          </p>
          <p className="mt-5 text-sm tracking-widest text-[#D6AE70]">
            ◆ BAPPANADU, MULKI ◆
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          About the Destination
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          A Temple with a Unique Story of Harmony
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="leading-8 text-[#75665D]">
            <p>
              Bappanadu Shri Durga Parameshwari Temple is a historic
              Hindu shrine situated in Mulki, on the banks of the
              Shambhavi River. Dedicated to Goddess Durga Parameshwari,
              the temple is an important centre of worship and cultural
              tradition in Dakshina Kannada.
            </p>
            <p className="mt-5">
              According to the temple's traditional history, a Muslim
              merchant named Bappu Byari encountered a divine presence
              while travelling along the river. He later approached
              the Jain Saavanta rulers of Mulki for help in establishing
              the shrine. The temple is also celebrated for its
              Bappanadu Dolu tradition and the participation of
              different communities in its annual festivities.
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
