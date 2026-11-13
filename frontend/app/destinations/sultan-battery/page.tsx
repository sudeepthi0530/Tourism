
const photos = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Sultan_Battery%2C_Mangaluru_2.jpg",
  about: "https://commons.wikimedia.org/wiki/Special:FilePath/Sultan_Battery%2C_Mangaluru_4.jpg",
  gallery1: "https://commons.wikimedia.org/wiki/Special:FilePath/Sultan_Battery_2163.JPG",
  gallery2: "https://commons.wikimedia.org/wiki/Special:FilePath/Suthan_Battery_Mangaluru%2C.jpg",
};

const gallery = [
  {
    src: photos.gallery1,
    alt: "Sultan Battery watchtower in Mangaluru",
    caption: "The historic stone watchtower",
  },
  {
    src: photos.gallery2,
    alt: "Sultan Battery monument at Boloor",
    caption: "The fortress-like stone structure",
  },
  {
    src: photos.about,
    alt: "Sultan Battery, Mangaluru",
    caption: "A closer look at the monument",
  },
];

export default function SultanBatteryPage() {
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
            Heritage of Dakshina Kannada
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Sultan Battery
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
            A historic coastal watchtower in Boloor, standing as a reminder
            of Mangaluru&apos;s strategic maritime past.
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
            A Glimpse into History
          </p>

          <h2 className="mb-7 text-4xl font-bold md:text-5xl">
            A Watchtower by the River
          </h2>

          <p className="mb-5 text-lg leading-8 text-[#51413C]">
            Sultan Battery is a historic watchtower located at Boloor,
            near the Gurupura River in Mangaluru. It was constructed in
            1784 during the rule of Tipu Sultan as part of the region&apos;s
            coastal defence system.
          </p>

          <p className="mb-5 text-lg leading-8 text-[#51413C]">
            Its strategic position helped guard the river entrance against
            enemy warships approaching from the coast. The structure was
            built using dark stone and has a fortress-like appearance,
            with openings designed for mounting cannons.
          </p>

          <p className="text-lg leading-8 text-[#51413C]">
            Today, the monument offers visitors an opportunity to explore
            a piece of Mangaluru&apos;s military history and enjoy the
            surrounding river landscape.
          </p>
        </div>

        <div className="overflow-hidden border-8 border-[#C6A16B]/30 shadow-2xl">
          <img
            src={photos.about}
            alt="Sultan Battery, Mangaluru"
            className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* HISTORICAL HIGHLIGHTS */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
              Discover the Monument
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              What Makes It Special
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Coastal Defence",
                text: "The watchtower was strategically positioned to help prevent enemy vessels from entering the Gurupura River.",
              },
              {
                title: "Stone Architecture",
                text: "Its dark stone construction and cannon openings give the monument the appearance of a compact fortress.",
              },
              {
                title: "River Landscape",
                text: "Its location near the Gurupura River connects the historic monument with Mangaluru's coastal geography.",
              },
            ].map((item) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Explore the Surroundings
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Experiences
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Explore the Watchtower",
              text: "Observe the historic stonework, fortress-like form and defensive openings of the monument.",
            },
            {
              title: "Enjoy the River Views",
              text: "Take in the scenery around the Gurupura River and the coastal landscape of Boloor.",
            },
            {
              title: "Visit Tannirbhavi",
              text: "The nearby ferry crossing provides a connection towards Tannirbhavi Beach. Confirm current ferry operations locally.",
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

      {/* VISITOR INFORMATION - MATCHING KUDROLI DESIGN */}
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
                Sultan Battery, Boloor, Mangaluru, Dakshina Kannada,
                Karnataka.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Sultan+Battery+Boloor+Mangaluru"
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
                Built in 1784 during the rule of Tipu Sultan as part
                of the coastal defence system.
              </p>
            </article>

            {/* ENTRY */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Entry
              </h3>

              <p className="leading-8 text-[#65534D]">
                Check current access arrangements and any applicable
                charges locally.
              </p>
            </article>

            {/* HOW TO REACH */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                How to Reach
              </h3>

              <p className="leading-8 text-[#65534D]">
                Reach Boloor by road from central Mangaluru. Local buses,
                autos and taxis are options.
              </p>
            </article>

            {/* BEST TIME */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Best Time to Visit
              </h3>

              <p className="leading-8 text-[#65534D]">
                Morning or late afternoon is suitable for comfortable
                outdoor sightseeing.
              </p>
            </article>

            {/* VISITOR GUIDELINES */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Visitor Guidelines
              </h3>

              <p className="leading-8 text-[#65534D]">
                Respect the historic structure. Avoid climbing restricted
                areas and follow local instructions.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Glimpses of the Past
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Sultan Battery Gallery
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

          <p className="mb-2 text-sm leading-6 text-[#51413C]">
            Photographs sourced from Wikimedia Commons. Please check
            each original file page for its creator and licence details
            before reuse.
          </p>

          <ul className="space-y-2 text-sm text-[#51413C]">
            <li>
              •{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Sultan_Battery,_Mangaluru_2.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Sultan Battery, Mangaluru 2
              </a>
            </li>

            <li>
              •{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Sultan_Battery,_Mangaluru_4.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Sultan Battery, Mangaluru 4
              </a>
            </li>

            <li>
              •{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Sultan_Battery_2163.JPG"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Sultan Battery 2163
              </a>
            </li>

            <li>
              •{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Suthan_Battery_Mangaluru,_%28.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Suthan Battery Mangaluru
              </a>
            </li>
          </ul>

          <p className="mt-3 text-xs text-[#78665A]">
            Retain the appropriate photographer attribution and licence
            information when publishing or modifying these photographs.
          </p>
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
