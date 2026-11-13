
const photos = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Gurubasati_front_view%2C.JPG",
  about: "https://commons.wikimedia.org/wiki/Special:FilePath/Gurubasati_a_side_view.JPG",
  pillar: "https://commons.wikimedia.org/wiki/Special:FilePath/Gurubasati_pillar.JPG",
  inscription: "https://commons.wikimedia.org/wiki/Special:FilePath/Stone_writings_at_Gurubasati.JPG",
  statue: "https://commons.wikimedia.org/wiki/Special:FilePath/Bahubali_statue_Gurubasati.JPG",
};

export default function GuruBasadiPage() {
  return (
    <main
      className="min-h-screen bg-[#F3E9D9] text-[#27151F]"
      style={{ fontFamily: '"Bell MT", "Baskerville", "Georgia", serif' }}
    >
      {/* Navigation */}
      <nav className="absolute z-20 flex w-full items-center justify-between px-6 py-6 text-[#F3E9D9] md:px-12">
        <a href="/" className="text-2xl font-bold tracking-wide">
          Namma Dakshina
        </a>
        <div className="flex gap-5 text-sm md:gap-8 md:text-base">
          <a href="/" className="transition hover:text-[#D6AE70]">Home</a>
          <a href="/explore" className="transition hover:text-[#D6AE70]">Explore Places</a>
          <a href="/explore/heritage" className="transition hover:text-[#D6AE70]">Heritage</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative flex min-h-[75vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${photos.hero}')` }}
      >
        <div className="absolute inset-0 bg-[#27151F]/65" />
        <div className="relative z-10 max-w-4xl px-6 text-center text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            Ancient Jain Heritage
          </p>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Guru Basadi
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 md:text-xl">
            An ancient Jain shrine preserving centuries of spiritual
            tradition, stone craftsmanship and religious heritage.
          </p>
          <p className="mt-7 text-sm tracking-widest text-[#D6AE70]">
            SIDDHANTA BASADI · MOODABIDRI
          </p>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
              A Sacred Jain Shrine
            </p>
            <h2 className="mb-7 text-4xl text-[#27151F] md:text-5xl">
              About Guru Basadi
            </h2>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              Guru Basadi, also known as Siddhanta Basadi, is an important
              Jain religious monument located in Moodabidri, Dakshina
              Kannada. The shrine is dedicated to Lord Parshwanatha,
              the 23rd Tirthankara of Jainism.
            </p>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              Moodabidri is popularly known as the Jain Kashi of South
              India because of its many historic Jain basadis. Guru
              Basadi forms an important part of this religious and
              architectural landscape.
            </p>
            <p className="text-lg leading-9 text-[#65534D]">
              The temple is especially associated with ancient Jain
              manuscripts and religious learning, making it significant
              beyond its architectural beauty.
            </p>
          </div>
          <div className="overflow-hidden shadow-xl">
            <img
              src={photos.about}
              alt="Side view of Guru Basadi in Moodabidri"
              className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            Historical Background
          </p>
          <h2 className="mb-12 text-4xl md:text-5xl">
            Centuries of Jain Tradition
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                year: "Around 714 CE",
                title: "Traditional Origin",
                description:
                  "A historical district census handbook records a tradition that a Jain ascetic discovered a black granite image of Parshwanatha and established a shrine here around this period.",
              },
              {
                year: "Ancient Jain Centre",
                title: "A Place of Learning",
                description:
                  "Guru Basadi is also known as Siddhanta Basadi because of its association with Jain religious texts and traditional scholarship.",
              },
              {
                year: "Parshwanatha",
                title: "The Presiding Tirthankara",
                description:
                  "The shrine is dedicated to Parshwanatha, the 23rd Tirthankara, who is an important spiritual figure in Jain tradition.",
              },
              {
                year: "Moodabidri",
                title: "The Jain Heritage Town",
                description:
                  "Guru Basadi is part of the wider group of historic Jain monuments that made Moodabidri an important centre of Jain religious and cultural heritage.",
              },
            ].map((item) => (
              <article
                key={item.year}
                className="border border-[#C6A16B]/40 bg-[#3A2630] p-7"
              >
                <p className="mb-3 text-2xl text-[#D6AE70]">{item.year}</p>
                <h3 className="mb-3 text-2xl">{item.title}</h3>
                <p className="leading-8 text-[#E2D4C5]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-[#CDBBAA]">
            Note: The early date is based on a recorded traditional account.
            It should not be interpreted as a scientifically confirmed
            construction date.
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden shadow-xl">
            <img
              src={photos.pillar}
              alt="Carved pillar inside Guru Basadi"
              className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
              Stone Craftsmanship
            </p>
            <h2 className="mb-7 text-4xl md:text-5xl">
              Architecture and Sculpture
            </h2>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              Guru Basadi reflects the traditional stone architecture
              associated with the Jain temples of Moodabidri. Its
              structural details and sculptural elements reveal the
              craftsmanship of the region's temple builders.
            </p>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              The temple complex contains carved pillars, religious
              sculptures and stone inscriptions. These features offer
              visitors a glimpse into the artistic and devotional
              traditions of the period.
            </p>
            <p className="text-lg leading-9 text-[#65534D]">
              The stone surfaces and decorative details also make the
              shrine an interesting destination for people studying
              historic Jain architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Religious Significance */}
      <section className="bg-[#F8F1E7] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Faith and Knowledge
          </p>
          <h2 className="mb-10 text-4xl md:text-5xl">
            Religious Significance
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Lord Parshwanatha",
                description:
                  "The temple is dedicated to the 23rd Jain Tirthankara, whose teachings emphasise non-violence, truth and spiritual discipline.",
              },
              {
                title: "Siddhanta Tradition",
                description:
                  "The name Siddhanta Basadi reflects its traditional association with Jain religious teachings and sacred texts.",
              },
              {
                title: "Jain Manuscripts",
                description:
                  "Historical accounts associate Guru Basadi with the preservation of ancient Jain scriptures and manuscripts.",
              },
              {
                title: "Jain Pilgrimage",
                description:
                  "The shrine forms part of Moodabidri's important Jain pilgrimage landscape, attracting devotees and visitors.",
              },
              {
                title: "Spiritual Learning",
                description:
                  "Its association with Jain scholarship makes the site meaningful for people interested in religious history and philosophy.",
              },
              {
                title: "Cultural Heritage",
                description:
                  "The basadi represents the long-standing Jain cultural presence and artistic traditions of Dakshina Kannada.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-[#C6A16B]/50 bg-[#F3E9D9] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-4 text-2xl text-[#A64F3C]">
                  {item.title}
                </h3>
                <p className="leading-8 text-[#65534D]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover the Basadi
          </p>
          <h2 className="mb-10 text-4xl md:text-5xl">
            What to Experience
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Explore the Shrine",
                description:
                  "Discover the peaceful atmosphere and religious character of this historic Jain place of worship.",
              },
              {
                title: "Observe the Sculptures",
                description:
                  "Look closely at the religious figures and stone carvings that reflect the artistic traditions of the region.",
              },
              {
                title: "Study the Inscriptions",
                description:
                  "Observe the historic stone writings and learn how inscriptions help preserve information about the past.",
              },
              {
                title: "Discover Jain History",
                description:
                  "Understand the significance of Parshwanatha and the importance of Jain religious traditions in Moodabidri.",
              },
              {
                title: "Explore Moodabidri",
                description:
                  "Visit other historic Jain basadis in the town to understand its wider architectural and religious heritage.",
              },
              {
                title: "Photography",
                description:
                  "Capture the exterior architecture and permitted details while respecting worshippers and temple photography rules.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-4 text-2xl text-[#A64F3C]">
                  {item.title}
                </h3>
                <p className="leading-8 text-[#65534D]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="bg-[#E9DCCB] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Plan Your Visit
          </p>
          <h2 className="mb-10 text-4xl text-[#27151F]">
            Visitor Information
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Location</h3>
              <p className="leading-8 text-[#65534D]">
                Guru Basadi, Moodabidri, Dakshina Kannada District,
                Karnataka, India.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Visiting Hours</h3>
              <p className="leading-8 text-[#65534D]">
                Exact visiting hours are not confirmed here. Please check
                locally before planning your visit.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Entry Fee</h3>
              <p className="leading-8 text-[#65534D]">
                No entry fee information is confirmed here. Contact the
                local temple authorities for current arrangements.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">How to Reach</h3>
              <p className="leading-8 text-[#65534D]">
                Moodabidri is accessible by road from Mangaluru, Udupi
                and nearby towns. Local buses, taxis and auto-rickshaws
                are available in the region.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Best Time to Visit</h3>
              <p className="leading-8 text-[#65534D]">
                October to March is generally comfortable for exploring
                Moodabidri and its historic monuments.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Visitor Guidelines</h3>
              <p className="leading-8 text-[#65534D]">
                Dress modestly, maintain silence, respect Jain customs
                and follow temple instructions. Ask before taking
                photographs inside the shrine.
              </p>
            </article>
          </div>

          <div className="mt-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Guru+Basadi+Moodabidri+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#A64F3C] bg-[#A64F3C] px-7 py-3 text-[#F3E9D9] transition hover:bg-[#27151F]"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Through the Lens
          </p>
          <h2 className="mb-10 text-4xl md:text-5xl">
            Photo Gallery
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: photos.hero,
                alt: "Front view of Guru Basadi in Moodabidri",
              },
              {
                src: photos.pillar,
                alt: "Carved pillar at Guru Basadi",
              },
              {
                src: photos.inscription,
                alt: "Stone writings at Guru Basadi",
              },
              {
                src: photos.statue,
                alt: "Bahubali statue at Guru Basadi",
              },
              {
                src: photos.about,
                alt: "Side view of Guru Basadi",
              },
            ].map((photo) => (
              <div key={photo.src} className="group overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-[#C6A16B]/50 pt-5">
            <p className="mb-3 text-sm text-[#65534D]">
              Photograph credits and licences:
            </p>
            <ul className="space-y-2 text-sm text-[#65534D]">
              <li>
                Front view — Dvellakat, CC BY-SA 4.0:
                {" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:Gurubasati_front_view,.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons
                </a>
              </li>
              <li>
                Side view:
                {" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:Gurubasati_a_side_view.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons file page
                </a>
              </li>
              <li>
                Pillar:
                {" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:Gurubasati_pillar.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons file page
                </a>
              </li>
              <li>
                Stone writings:
                {" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:Stone_writings_at_Gurubasati.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons file page
                </a>
              </li>
              <li>
                Bahubali statue:
                {" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:Bahubali_statue_Gurubasati.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons file page
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs leading-6 text-[#65534D]">
              Check each individual file page for the creator, licence
              and attribution requirements before publishing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#27151F] px-6 py-10 text-center text-[#F3E9D9]">
        <a href="/" className="text-2xl font-bold tracking-wide text-[#D6AE70]">
          Namma Dakshina
        </a>
        <p className="mt-3 text-sm text-[#D8C8B8]">
          Discover the stories, culture and heritage of Dakshina Kannada.
        </p>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a href="/" className="hover:text-[#D6AE70]">Home</a>
          <a href="/explore" className="hover:text-[#D6AE70]">Explore</a>
          <a href="/explore/heritage" className="hover:text-[#D6AE70]">Heritage</a>
        </div>
        <p className="mt-8 text-xs text-[#BCA99A]">
          © 2026 Namma Dakshina. Explore Dakshina Kannada.
        </p>
      </footer>
    </main>
  );
}
