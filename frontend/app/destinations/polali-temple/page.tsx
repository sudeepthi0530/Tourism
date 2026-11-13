
const experiences = [
  {
    title: "The Sacred Clay Idol",
    description:
      "Discover the distinctive image of Goddess Rajarajeshwari, traditionally made from clay mixed with medicinal herbs. Unlike many temples with stone or metal main idols, Polali is especially known for this remarkable clay sculpture.",
  },
  {
    title: "The Legend of King Suratha",
    description:
      "Explore the traditional story of King Suratha, who is believed to have worshipped Goddess Rajarajeshwari after losing his kingdom. The temple's traditional history connects him with the installation of the Goddess's image.",
  },
  {
    title: "Polali Chendu Festival",
    description:
      "Witness the famous traditional football game known as Polali Chendu. Played over five days during the annual temple festival, this unusual celebration brings together local communities and devotees.",
  },
  {
    title: "Brahmakalashotsava",
    description:
      "Learn about the important Brahmakalashotsava celebrations associated with the temple's renovation and religious traditions. The 2019 ceremony marked a significant restoration while preserving the temple's traditional character.",
  },
  {
    title: "The Shrine of Bhadrakali",
    description:
      "Explore the presence of Goddess Bhadrakali, an important deity worshipped within the temple complex. Special Gayatri Pooja is traditionally performed on Sundays, Tuesdays and Thursdays.",
  },
  {
    title: "The Annual Temple Festival",
    description:
      "Experience the month-long annual festival held around March and April, featuring traditional ceremonies, devotional offerings, processions and the celebrated Polali Chendu event.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Polali, Kariyangala Village, Bantwal Taluk, Dakshina Kannada, Karnataka 574219.",
    link: "https://www.google.com/maps/search/?api=1&query=Sri+Rajarajeshwari+Temple+Polali",
    linkText: "View on Google Maps",
  },
  {
    title: "Visiting Hours",
    description:
      "Morning: 6:30 AM to 1:00 PM. Evening: 4:00 PM to 8:00 PM. Confirm the latest schedule before visiting, especially during festivals.",
  },
  {
    title: "Entry Fee",
    description:
      "General darshan is free. Special poojas and religious services may have separate charges.",
  },
  {
    title: "How to Reach",
    description:
      "Polali is approximately 19 km from Mangaluru. Buses are available from State Bank bus stand towards B.C. Road via Polali. Taxis and private vehicles are also options.",
  },
  {
    title: "Best Time to Visit",
    description:
      "October to February generally offers pleasant weather. March and April are particularly interesting because of the annual temple festival and Polali Chendu.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Wear modest clothing, maintain cleanliness and respect temple customs. Follow the instructions of temple authorities during worship and festival activities.",
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

export default function PolaliTemplePage() {
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
            Ancient Heritage of Bantwal
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Polali Rajarajeshwari Temple
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#F3E9D9]/90">
            Discover a historic shrine famous for its sacred clay idol,
            distinctive traditions and the celebrated Polali Chendu festival.
          </p>
          <p className="mt-5 text-sm tracking-widest text-[#D6AE70]">
            ◆ POLALI, BANTWAL ◆
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          About the Destination
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          A Unique Shrine of Sacred Clay
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="leading-8 text-[#75665D]">
            <p>
              Sri Rajarajeshwari Temple is situated in Polali village
              of Kariyangala, Bantwal Taluk, surrounded by green
              hillocks and agricultural fields near the Phalguni River.
              It is one of the historically significant religious
              destinations of Dakshina Kannada.
            </p>
            <p className="mt-5">
              The temple is particularly famous for its large clay
              image of Goddess Rajarajeshwari, traditionally prepared
              using clay and medicinal materials. According to the
              temple's traditional account, King Suratha is associated
              with the installation of the deity. Its month-long
              annual festival and the unusual Polali Chendu football
              tradition make this temple culturally distinctive.
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
