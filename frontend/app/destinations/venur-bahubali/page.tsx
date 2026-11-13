
const photos = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Venur_-_Bahubali.JPG",
  about: "https://commons.wikimedia.org/wiki/Special:FilePath/Venuru_Bahubali.jpg",
};


export default function VenurBahubaliPage() {
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
        style={{
  backgroundImage: `url('${photos.hero}')`,
  backgroundSize: "auto 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "#27151F",
}}
      >
        <div className="absolute inset-0 bg-[#27151F]/65" />
        <div className="relative z-10 max-w-4xl px-6 text-center text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            Jain Heritage of Dakshina Kannada
          </p>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Venur Bahubali
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 md:text-xl">
            A magnificent stone monument celebrating meditation,
            renunciation and spiritual liberation.
          </p>
          <p className="mt-7 text-sm tracking-widest text-[#D6AE70]">
            VENUR · BELTHANGADY TALUK
          </p>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
              A Monument of Jain Heritage
            </p>
            <h2 className="mb-7 text-4xl text-[#27151F] md:text-5xl">
              About the Statue
            </h2>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              Venur is home to an impressive monolithic statue of Lord
              Bahubali, also known as Gomateshwara. Standing approximately
              35 feet tall, the statue was completed in 1604 CE under the
              patronage of Vira Timmaraja of the Ajila dynasty.
            </p>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              Carved from a single block of stone, Bahubali is represented
              in the Jain meditative posture known as Kayotsarga. The figure
              stands motionless with vines carved around the arms and legs,
              symbolising long periods of meditation.
            </p>
            <p className="text-lg leading-9 text-[#65534D]">
              Its calm expression and gentle smile give the monument a
              distinctive character among Karnataka's great Bahubali
              sculptures.
            </p>
          </div>
          <div className="overflow-hidden shadow-xl">
            <img
              src={photos.about}
              alt="Bahubali monolithic statue at Venur"
              className="h-[460px] w-full bg-[#E9DCCB] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Historical Highlights */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            History and Significance
          </p>
          <h2 className="mb-12 text-4xl md:text-5xl">
            The Legacy of Bahubali
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "The Ajila Dynasty",
                description:
                  "The Ajila rulers played an important role in the history of Venur. Vira Timmaraja commissioned the monumental statue during the early seventeenth century.",
              },
              {
                title: "A 1604 Monument",
                description:
                  "The statue was completed in 1604 CE. It is approximately 35 feet tall and carved from a single block of stone.",
              },
              {
                title: "Kayotsarga Posture",
                description:
                  "Bahubali is depicted standing in deep meditation. The vines and anthills around the figure represent the long period of motionless spiritual practice described in Jain tradition.",
              },
              {
                title: "A Distinctive Expression",
                description:
                  "The statue is particularly recognised for its gently smiling face, closed eyes and peaceful expression.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-[#C6A16B]/40 bg-[#3A2630] p-7"
              >
                <h3 className="mb-4 text-2xl text-[#D6AE70]">
                  {item.title}
                </h3>
                <p className="leading-8 text-[#E2D4C5]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Jain Tradition */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Faith and Tradition
          </p>
          <h2 className="mb-8 text-4xl md:text-5xl">
            The Story of Bahubali
          </h2>
          <div className="max-w-4xl">
            <p className="mb-6 text-lg leading-9 text-[#65534D]">
              According to Jain tradition, Bahubali was the son of
              Rishabhadeva, the first Jain Tirthankara. After a conflict
              with his brother Bharata, Bahubali realised the temporary
              nature of worldly power and chose to renounce his kingdom.
            </p>
            <p className="mb-6 text-lg leading-9 text-[#65534D]">
              He is believed to have practised deep meditation while
              standing motionless in the Kayotsarga posture. Vines growing
              around his body symbolise his prolonged meditation and
              detachment from worldly life.
            </p>
            <p className="text-lg leading-9 text-[#65534D]">
              The Venur statue represents these Jain ideals of self-control,
              non-attachment, peace and spiritual freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-[#F8F1E7] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover Venur
          </p>
          <h2 className="mb-10 text-4xl md:text-5xl">
            What to Experience
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Admire the Monolith",
                description:
                  "Observe the impressive scale, stone craftsmanship and distinctive expression of the Bahubali statue.",
              },
              {
                title: "Study the Sculpture",
                description:
                  "Look closely at the Kayotsarga posture, peaceful facial expression and vine motifs carved around the figure.",
              },
              {
                title: "Explore Jain Heritage",
                description:
                  "Learn about the history of Jainism and the Ajila dynasty's contribution to the heritage of Venur.",
              },
              {
                title: "Visit Nearby Basadis",
                description:
                  "Explore the Jain basadis in Venur, including the historic Shantinatha or Kallu Basadi complex.",
              },
              {
                title: "Experience the Ritual Tradition",
                description:
                  "Learn about Mahamastakabhisheka, the ceremonial anointing of Bahubali's statue.",
              },
              {
                title: "Enjoy the Peaceful Setting",
                description:
                  "Spend time appreciating the monument and its surroundings while respecting the religious atmosphere.",
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

      {/* Mahamastakabhisheka */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            A Sacred Jain Ceremony
          </p>
          <h2 className="mb-7 text-4xl md:text-5xl">
            Mahamastakabhisheka
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-9 text-[#E2D4C5]">
            Mahamastakabhisheka is a grand Jain ceremony in which sacred
            offerings are poured over the head of the Bahubali statue.
            These offerings traditionally include milk, water, sandalwood
            paste and other ritual substances. The ceremony is an important
            expression of devotion and reverence for Bahubali.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-[#E2D4C5]">
            The 2024 Mahamastakabhisheka at Venur attracted devotees and
            visitors to witness this special religious occasion. The
            ceremony is traditionally associated with an approximately
            twelve-year cycle, but visitors should check local announcements
            for the next event.
          </p>
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
                Venur, Belthangady Taluk, Dakshina Kannada District,
                Karnataka.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Visiting Hours</h3>
              <p className="leading-8 text-[#65534D]">
                Exact opening and closing hours are not confirmed here.
                Check locally before planning your visit.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Entry Fee</h3>
              <p className="leading-8 text-[#65534D]">
                No entry fee is confirmed here. Check with the local
                site authorities for current arrangements.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">How to Reach</h3>
              <p className="leading-8 text-[#65534D]">
                Venur can be reached by road from Mangaluru and other
                nearby towns. Local transport availability may vary.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Best Time to Visit</h3>
              <p className="leading-8 text-[#65534D]">
                Morning and late afternoon are generally more comfortable
                for exploring the outdoor monument.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Visitor Guidelines</h3>
              <p className="leading-8 text-[#65534D]">
                Respect Jain religious customs, maintain cleanliness,
                avoid damaging the monument and follow local instructions
                regarding photography and access.
              </p>
            </article>
          </div>

          <div className="mt-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bahubali+Statue+Venur+Karnataka"
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

          <div className="grid gap-6 md:grid-cols-2">
            <div className="group overflow-hidden">
              <img
                src={photos.hero}
                alt="Full view of the 35-foot Bahubali statue at Venur"
                className="h-[420px] w-full bg-[#E9DCCB] object-contain"
              />
            </div>
            <div className="group overflow-hidden">
              <img
                src={photos.about}
                alt="Another view of the Bahubali statue at Venur"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-8 border-t border-[#C6A16B]/50 pt-5">
            <p className="mb-3 text-sm text-[#65534D]">
              Photograph credits and licences:
            </p>
            <ul className="space-y-2 text-sm text-[#65534D]">
              <li>
                Venur - Bahubali: Vikas m, released into the public domain —
                {" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:Venur_-_Bahubali.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons file page
                </a>
              </li>
              <li>
                Venuru Bahubali: RajuBabannavar, CC BY-SA 3.0 —
                {" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:Venuru_Bahubali.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons file page
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs leading-6 text-[#65534D]">
              The second photograph is shared under Creative Commons
              Attribution-ShareAlike 3.0. Reuse requires appropriate
              attribution and compliance with the licence.
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
