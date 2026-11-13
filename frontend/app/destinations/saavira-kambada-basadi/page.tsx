
const experiences = [
  {
    title: "The Thousand Carved Pillars",
    description:
      "Explore the magnificent pillared halls featuring intricately carved granite columns. Each pillar has distinctive designs and details, making the Basadi a remarkable example of medieval Jain craftsmanship.",
  },
  {
    title: "Chandranatha Swamy",
    description:
      "Discover the main deity, Lord Chandranatha, the eighth Jain Tirthankara, whose impressive Panchaloha (five-metal alloy) image is housed in the inner sanctum.",
  },
  {
    title: "The 50-Foot Manasthambha",
    description:
      "Admire the impressive monolithic Manasthambha standing in front of the Basadi. This monumental pillar is an important architectural feature of Jain temple tradition.",
  },
  {
    title: "Seven Traditional Mantapas",
    description:
      "Explore the temple's seven mantapas and its distinctive three-storey structure, combining stone construction with beautifully crafted wooden upper floors.",
  },
  {
    title: "Jain Heritage of Moodabidri",
    description:
      "Discover Moodabidri's rich Jain heritage. The town is home to eighteen historic Basadis and is widely known as the Jain Kashi of South India.",
  },
  {
    title: "Intricate Stone Carvings",
    description:
      "Observe the detailed sculptures of animals, birds, musical instruments and decorative motifs carved into the temple pillars and architectural surfaces.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    description:
      "Basadi Road, Moodabidri, Dakshina Kannada district, Karnataka 574227.",
    link: "https://www.google.com/maps/search/?api=1&query=Saavira+Kambada+Basadi+Moodabidri",
    linkText: "View on Google Maps",
  },
  {
    title: "Visiting Hours",
    description:
      "Published visitor listings commonly mention 9:00 AM to 8:00 PM. Confirm current access timings with temple authorities before visiting.",
  },
  {
    title: "Entry Fee",
    description:
      "General visitor entry is commonly listed as free. Confirm any special access or photography charges locally.",
  },
  {
    title: "How to Reach",
    description:
      "Moodabidri is approximately 35–37 km from Mangaluru. Regular buses connect Mangaluru with Moodabidri. Taxis and private vehicles are also available.",
  },
  {
    title: "Best Time to Visit",
    description:
      "October to February generally offers pleasant weather for exploring the Basadi and other Jain heritage sites in Moodabidri.",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Maintain silence and respect Jain religious customs. Remove footwear where required, avoid touching sculptures and follow photography restrictions inside the temple.",
  },
];

const gallery = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Inner-view-Panorama-Left-Side-1000-Pillar-Temple-Moodbidri.jpg",
    alt: "Interior panoramic view of Saavira Kambada Basadi",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahavir-Jain-Fame-1000-Pillar-Temple-_Moodbidri.JPG",
    alt: "Jain sculpture inside the Thousand Pillar Temple",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Saavira_Kambada_Basadi%2C_1000_pillar_temple_Moodabidri%2C_Mudbidri_2025_%28114%29.jpg",
    alt: "Saavira Kambada Basadi photographed in 2025",
  },
];

export default function SaaviraKambadaBasadiPage() {
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
            "linear-gradient(rgba(39,21,31,0.45), rgba(39,21,31,0.70)), url('https://commons.wikimedia.org/wiki/Special:FilePath/1000-Pillar-Temple-Moodbidri-Left-Side-View.JPG')",
        }}
      >
        <div className="max-w-4xl text-[#F3E9D9]">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6AE70]">
            Jain Architectural Heritage
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Saavira Kambada Basadi
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#F3E9D9]/90">
            Discover the magnificent Thousand Pillar Jain Temple,
            celebrated for its intricate stone carvings and centuries-old
            architectural beauty.
          </p>

          <p className="mt-5 text-sm tracking-widest text-[#D6AE70]">
            ◆ MOODABIDRI, DAKSHINA KANNADA ◆
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          About the Destination
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          The Architectural Jewel of Jain Heritage
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="leading-8 text-[#75665D]">
            <p>
              Saavira Kambada Basadi, popularly known as the Thousand
              Pillar Jain Temple, is one of the most remarkable
              historical monuments in Moodabidri. Its formal name is
              Tribhuvana Tilaka Chudamani Basadi, and it is also
              known as Chandranatha Basadi after its presiding deity.
            </p>

            <p className="mt-5">
              Construction began around 1430 under the patronage of
              Devaraya Wodeyar and took approximately three decades
              to complete. The Basadi is renowned for its richly
              decorated granite pillars, seven mantapas, three-storey
              structure and impressive monolithic Manasthambha.
              It represents the artistic and religious heritage
              of Jainism in coastal Karnataka.
            </p>
          </div>

          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/1000-Pillar-Temple-Moodbidri-Main-Pillar.jpg"
            alt="Main Manastambha pillar at Saavira Kambada Basadi"
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

                <h3 className="mt-4 text-xl font-bold">
                  {item.title}
                </h3>

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
                loading="lazy"
                className="h-72 w-full border border-[#C6A16B]/50 object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photograph Credits */}
      <section className="bg-[#F3E9D9] px-6 py-8">
        <div className="mx-auto max-w-6xl text-sm text-[#75665D]">
          <h3 className="mb-3 font-bold text-[#27151F]">
            Photograph Credits
          </h3>

          <p>
            Photographs sourced from Wikimedia Commons.
            Please refer to the individual file pages for
            photographer details and licence information.
          </p>

          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="https://commons.wikimedia.org/wiki/File:1000-Pillar-Temple-Moodbidri-Left-Side-View.JPG"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Temple exterior photograph
              </a>
            </li>

            <li>
              <a
                href="https://commons.wikimedia.org/wiki/File:1000-Pillar-Temple-Moodbidri-Main-Pillar.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Manasthambha photograph
              </a>
            </li>

            <li>
              <a
                href="https://commons.wikimedia.org/wiki/File:Inner-view-Panorama-Left-Side-1000-Pillar-Temple-Moodbidri.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Interior panorama
              </a>
            </li>

            <li>
              <a
                href="https://commons.wikimedia.org/wiki/File:Mahavir-Jain-Fame-1000-Pillar-Temple-_Moodbidri.JPG"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Jain sculpture photograph
              </a>
            </li>

            <li>
              <a
                href="https://commons.wikimedia.org/wiki/File:Saavira_Kambada_Basadi,_1000_pillar_temple_Moodabidri,_Mudbidri_2025_(114).jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                2025 Basadi photograph
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C6A16B]/40 bg-[#27151F] px-6 py-8 text-center text-sm text-[#D6AE70]">
        © 2026 Namma Dakshina. Discover the beauty of Dakshina Kannada.
      </footer>
    </main>
  );
}
