
const photos = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosario_Cathedral.jpg",
  about: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosario._Church.jpg",
  gallery1: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosario_Cathedral-2.jpg",
  gallery2: "https://commons.wikimedia.org/wiki/Special:FilePath/Top_view_of_Rosario_church.jpg",
};

const gallery = [
  {
    src: photos.gallery1,
    alt: "Rosario Cathedral architecture in Mangaluru",
    caption: "The historic cathedral architecture",
  },
  {
    src: photos.gallery2,
    alt: "View of Rosario Cathedral from above",
    caption: "The cathedral and its surroundings",
  },
  {
    src: photos.about,
    alt: "Our Lady of Rosary Church, Mangaluru",
    caption: "The exterior of Rosario Cathedral",
  },
];

export default function RosarioCathedralPage() {
  return (
    <main
      className="min-h-screen bg-[#F3E9D9] text-[#27151F]"
      style={{
        fontFamily: '"Bell MT", "Baskerville", "Georgia", serif',
      }}
    >
      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[#C6A16B]/30 bg-[#27151F]/95 px-6 py-4 text-[#F3E9D9] backdrop-blur-md md:px-12">
        <a
          href="/"
          className="text-xl font-bold tracking-wider text-[#D6AE70] md:text-2xl"
        >
          NAMMA DAKSHINA
        </a>

        <div className="flex gap-5 text-sm md:gap-8 md:text-base">
          <a href="/" className="transition hover:text-[#D6AE70]">
            Home
          </a>
          <a href="/explore" className="transition hover:text-[#D6AE70]">
            Explore
          </a>
          <a
            href="/explore/heritage"
            className="transition hover:text-[#D6AE70]"
          >
            Heritage
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative flex min-h-[85vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("${photos.hero}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#27151F]/45 via-[#27151F]/55 to-[#27151F]/90" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            A Historic Landmark of Mangaluru
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Rosario Cathedral
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
            Discover centuries of faith, Portuguese-era heritage and
            remarkable architecture at the historic cathedral of Bolar.
          </p>

          <a
            href="#about"
            className="mt-9 inline-block border border-[#D6AE70] px-8 py-3 text-sm uppercase tracking-widest text-[#D6AE70] transition hover:bg-[#D6AE70] hover:text-[#27151F]"
          >
            Discover Its Story
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12"
      >
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover the Heritage
          </p>

          <h2 className="mb-7 text-4xl font-bold md:text-5xl">
            About Rosario Cathedral
          </h2>

          <p className="mb-5 text-lg leading-8 text-[#51413C]">
            Rosario Cathedral, officially known as the Cathedral of
            Our Lady of the Rosary, is a historic Roman Catholic
            cathedral located at Bolar in Mangaluru. Its history
            dates back to 1568, when the Portuguese established
            the original church.
          </p>

          <p className="mb-5 text-lg leading-8 text-[#51413C]">
            The original church was destroyed during the events
            of 1784 under Tipu Sultan. Reconstruction began in
            1813, and the present cathedral structure was built
            in 1910. The cathedral was declared a cathedral in 1851.
          </p>

          <p className="text-lg leading-8 text-[#51413C]">
            Dedicated to Our Lady of the Rosary, it remains an
            important religious and historical landmark of the
            Mangaluru Diocese.
          </p>
        </div>

        <div className="overflow-hidden border-8 border-[#C6A16B]/30 shadow-2xl">
          <img
            src={photos.about}
            alt="Rosario Cathedral in Mangaluru"
            className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* HISTORICAL HIGHLIGHTS */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
              Explore Its Heritage
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              What Makes It Special
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Portuguese Heritage",
                text: "The original church was established by the Portuguese in 1568 and became an important part of Mangaluru's Christian history.",
              },
              {
                title: "Distinctive Architecture",
                text: "The cathedral features a combination of Gothic, Romanesque and Byzantine architectural influences.",
              },
              {
                title: "Historic Dome",
                text: "The spacious sanctuary is crowned by a distinctive dome, making the cathedral architecturally special in the Mangaluru Diocese.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-[#C6A16B]/40 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D6AE70]"
              >
                <div className="mb-5 h-1 w-12 bg-[#D6AE70]" />

                <h3 className="mb-4 text-2xl font-bold text-[#D6AE70]">
                  {item.title}
                </h3>

                <p className="leading-7 text-[#E8DCCB]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Explore the Cathedral
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Experiences
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Admire the Architecture",
              text: "Observe the cathedral's architectural details, spacious sanctuary and distinctive dome.",
            },
            {
              title: "Discover Its History",
              text: "Learn about the Portuguese beginnings, historical events and reconstruction of the cathedral.",
            },
            {
              title: "Experience Its Spiritual Heritage",
              text: "Discover the devotional traditions associated with Our Lady of the Rosary and the cathedral community.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="mb-4 text-2xl font-bold text-[#A64F3C]">
                {item.title}
              </h3>

              <p className="leading-7 text-[#51413C]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* VISITOR INFORMATION */}
      <section className="bg-[#E9DCCB] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Plan Your Visit
          </p>

          <h2 className="mb-10 text-4xl text-[#27151F]">
            Visitor Information
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* LOCATION */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Location
              </h3>

              <p className="leading-8 text-[#65534D]">
                Rosario Cathedral, Bolar, Mangaluru,
                Dakshina Kannada, Karnataka.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Rosario+Cathedral+Bolar+Mangaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border-b border-[#A64F3C] pb-1 text-sm text-[#A64F3C]"
              >
                View on Google Maps →
              </a>
            </article>

            {/* HISTORICAL PERIOD */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Historical Period
              </h3>

              <p className="leading-8 text-[#65534D]">
                Originally established in 1568. The present
                cathedral structure dates to 1910.
              </p>
            </article>

            {/* ENTRY */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Entry
              </h3>

              <p className="leading-8 text-[#65534D]">
                Visitors should check current access arrangements
                and any special restrictions with the cathedral.
              </p>
            </article>

            {/* VISITING HOURS */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Visiting Hours
              </h3>

              <p className="leading-8 text-[#65534D]">
                Opening hours may vary according to religious
                services and parish activities. Confirm timings
                before visiting.
              </p>
            </article>

            {/* HOW TO REACH */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                How to Reach
              </h3>

              <p className="leading-8 text-[#65534D]">
                Reach Bolar by local bus, taxi or auto-rickshaw
                from Mangaluru city.
              </p>
            </article>

            {/* VISITOR GUIDELINES */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Visitor Guidelines
              </h3>

              <p className="leading-8 text-[#65534D]">
                Dress modestly, maintain silence inside the
                cathedral and respect ongoing religious services.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Glimpses of Heritage
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Rosario Cathedral Gallery
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((photo) => (
            <figure key={photo.src} className="group overflow-hidden">
              <div className="h-72 overflow-hidden border-4 border-[#C6A16B]/30">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <figcaption className="pt-4 text-center text-lg text-[#51413C]">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PHOTOGRAPH CREDITS */}
      <section className="border-t border-[#C6A16B]/40 bg-[#F8F1E7] px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-3 text-lg font-bold text-[#A64F3C]">
            Photograph Credits
          </h3>

          <p className="mb-3 text-sm leading-6 text-[#51413C]">
            Photographs sourced from Wikimedia Commons.
            Please retain the original creator attribution and
            follow the licence terms on each file page.
          </p>

          <ul className="space-y-2 text-sm text-[#51413C]">
            <li>
              •{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Rosario_Cathedral.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Rosario Cathedral – Krishna Mohan
              </a>
              {" "}– CC BY-SA 4.0.
            </li>

            <li>
              •{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Rosario._Church.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Rosario Church – Vijaylaxmi R
              </a>
              {" "}– CC BY-SA 4.0.
            </li>

            <li>
              •{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Rosario_Cathedral-2.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Rosario Cathedral-2
              </a>
              {" "}– See original file page for attribution.
            </li>

            <li>
              •{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Top_view_of_Rosario_church.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Top view of Rosario Church – Vijaylaxmi R
              </a>
              {" "}– CC BY-SA 4.0.
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#27151F] px-6 py-10 text-center text-[#F3E9D9]">
        <a
          href="/explore/heritage"
          className="mb-5 inline-block text-[#D6AE70] transition hover:text-white"
        >
          ← Explore More Heritage Places
        </a>

        <p className="text-2xl font-bold tracking-widest text-[#D6AE70]">
          NAMMA DAKSHINA
        </p>

        <p className="mt-3 text-sm text-[#CBBBA8]">
          Discover the heritage, culture and beauty of Dakshina Kannada.
        </p>

        <p className="mt-5 text-xs text-[#A99A8A]">
          © {new Date().getFullYear()} Namma Dakshina. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
