
const photos = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Front_view_of_Milagres_church.jpg",
  about: "https://commons.wikimedia.org/wiki/Special:FilePath/Milagres_Church_in_Mangalore.jpg",
  interior: "https://commons.wikimedia.org/wiki/Special:FilePath/Interior_of_the_church_of_Our_Lady_Of_Miracles%2C_Mangalore.jpg",
  exterior: "https://commons.wikimedia.org/wiki/Special:FilePath/Milagres_Church_Mangalore.jpg",
  statue: "https://commons.wikimedia.org/wiki/Special:FilePath/Statue_of_Mother_Mary.jpg",
};

const gallery = [
  { src: photos.interior, alt: "Interior of Milagres Church" },
  { src: photos.exterior, alt: "Exterior view of Milagres Church" },
  { src: photos.statue, alt: "Statue of Mother Mary at Milagres Church" },
];

export default function MilagresChurchPage() {
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
        <div className="absolute inset-0 bg-[#27151F]/60" />
        <div className="relative z-10 max-w-4xl px-6 text-center text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            Heritage of Mangaluru
          </p>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Milagres Church
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 md:text-xl">
            A historic place of faith, devotion and heritage, dedicated to
            Our Lady of Miracles.
          </p>
          <p className="mt-7 text-sm tracking-widest text-[#D6AE70]">
            HAMPANKATTA · MANGALURU
          </p>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
              A Place of Faith
            </p>
            <h2 className="mb-7 text-4xl text-[#27151F] md:text-5xl">
              About Milagres Church
            </h2>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              Milagres Church, also known as the Church of Our Lady of
              Miracles, is a historic Roman Catholic church located in
              Hampankatta, in the heart of Mangaluru. It was established in
              1680 by Bishop Thomas de Castro and is one of the oldest
              churches in the region.
            </p>
            <p className="text-lg leading-9 text-[#65534D]">
              The church has a long history shaped by changing rulers,
              destruction and rebuilding. Today, it remains an important
              place of worship and a landmark of the city's religious and
              cultural heritage.
            </p>
          </div>
          <div className="overflow-hidden shadow-xl">
            <img
              src={photos.about}
              alt="Milagres Church in Mangaluru"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            Through the Centuries
          </p>
          <h2 className="mb-12 text-4xl md:text-5xl">A History of Resilience</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                year: "1680",
                title: "The First Church",
                description:
                  "Bishop Thomas de Castro established the first Milagres Church on land granted by Queen Keladi Chennama of Bednore.",
              },
              {
                year: "1756",
                title: "A New Church",
                description:
                  "A new church was built at the site of the present church by Rev. Fr. A. Pinto after the land had been secured again.",
              },
              {
                year: "1784",
                title: "A Difficult Period",
                description:
                  "During Tipu Sultan's rule, Milagres Church was among the churches destroyed. Many Christians were also taken captive.",
              },
              {
                year: "1811–1911",
                title: "Rebuilding and Renewal",
                description:
                  "A new church was erected in 1811. After its façade collapsed in 1911, the present structure was built under Fr. Frank Pereira, with architect Augustus Diamanti S.J.",
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
        </div>
      </section>

      {/* Experiences */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover the Church
          </p>
          <h2 className="mb-10 text-4xl md:text-5xl">What to Experience</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Our Lady of Miracles",
                description:
                  "Spend a quiet moment in prayer and observe the devotion shown to the church's patron, Our Lady of Miracles.",
              },
              {
                title: "Church Architecture",
                description:
                  "Observe the church's façade, interior arrangement, religious artwork and historic character.",
              },
              {
                title: "St. Monica Chapel",
                description:
                  "Discover the chapel associated with the church complex and its connection to the parish's history.",
              },
              {
                title: "St. Anthony Shrine",
                description:
                  "Visit the shrine of St. Anthony of Padua, one of the devotional features mentioned in regional heritage records.",
              },
              {
                title: "Historic Cemetery",
                description:
                  "Learn about the church's early history and the cemetery associated with its original site.",
              },
              {
                title: "Parish Heritage",
                description:
                  "Explore the role of the church and its parish community in Mangaluru's religious and cultural life.",
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
                Hampankatta, Mangaluru, Karnataka 575001.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Church Timings</h3>
              <p className="leading-8 text-[#65534D]">
                Timings for prayer and visits may vary according to services
                and parish activities. Please confirm with the church before
                visiting.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Entry Fee</h3>
              <p className="leading-8 text-[#65534D]">
                No visitor entry fee information is published here. Confirm
                any special access arrangements with the parish office.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">How to Reach</h3>
              <p className="leading-8 text-[#65534D]">
                The church is in central Mangaluru and can be reached by
                local bus, auto-rickshaw or taxi.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Best Time to Visit</h3>
              <p className="leading-8 text-[#65534D]">
                Plan your visit outside scheduled worship services if you
                wish to quietly explore the church.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Visitor Guidelines</h3>
              <p className="leading-8 text-[#65534D]">
                Dress modestly, maintain silence and respect ongoing prayers.
                Ask permission before taking photographs inside the church.
              </p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Milagres+Church+Hampankatta+Mangaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#A64F3C] bg-[#A64F3C] px-7 py-3 text-[#F3E9D9] transition hover:bg-[#27151F]"
            >
              View on Google Maps
            </a>
            <a
              href="https://milagres.church/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#A64F3C] px-7 py-3 text-[#A64F3C] transition hover:bg-[#A64F3C] hover:text-[#F3E9D9]"
            >
              Contact Church
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
          <h2 className="mb-10 text-4xl md:text-5xl">Photo Gallery</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((photo) => (
              <div key={photo.src} className="group overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
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
                Front view: Vijaylaxmi R —{" "}
                <a className="underline" href="https://commons.wikimedia.org/wiki/File:Front_view_of_Milagres_church.jpg" target="_blank" rel="noopener noreferrer">
                  Wikimedia Commons
                </a>
              </li>
              <li>
                Church exterior: Robjersey —{" "}
                <a className="underline" href="https://commons.wikimedia.org/wiki/File:Milagres_Church_in_Mangalore.jpg" target="_blank" rel="noopener noreferrer">
                  Wikimedia Commons
                </a>
              </li>
              <li>
                Church interior: Lynel saldanha —{" "}
                <a className="underline" href="https://commons.wikimedia.org/wiki/File:Interior_of_the_church_of_Our_Lady_Of_Miracles,_Mangalore.jpg" target="_blank" rel="noopener noreferrer">
                  Wikimedia Commons
                </a>
              </li>
              <li>
                Additional exterior: Harriet Vidyasagar —{" "}
                <a className="underline" href="https://commons.wikimedia.org/wiki/File:Milagres_Church_Mangalore.jpg" target="_blank" rel="noopener noreferrer">
                  Wikimedia Commons
                </a>
              </li>
              <li>
                Statue photograph:{" "}
                <a className="underline" href="https://commons.wikimedia.org/wiki/File:Statue_of_Mother_Mary.jpg" target="_blank" rel="noopener noreferrer">
                  Wikimedia Commons file page
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs leading-6 text-[#65534D]">
              The Wikimedia photographs are shared under their respective
              file-page licences. Check each file page for attribution and
              reuse requirements before publishing.
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
