
const photos = {
  hero: "https://www.mangaloreholidays.in/uploads/image/tour-packages-places/temples-around-mangalore/karinjeshwara-temple-2.jpg",
  temple: "https://www.temple.yatradham.org/public/Product/temple/temple_VEKOW1j6_202409161431580.jpg",
  steps: "https://macrotrekkingteam.weebly.com/uploads/7/1/0/8/7108071/6873576_orig.jpg",
  pond: "https://3.bp.blogspot.com/-sgKn6KbEmeQ/UUFgGpam1tI/AAAAAAAAAJw/D-AAfHeCdNY/s1600/theertha2.jpg",
  parvati: "https://1.bp.blogspot.com/-zyL4H-UzI-I/UUFiIViw3VI/AAAAAAAAAKQ/k2m1Vz-HZv0/s640/parvathi_temple.jpg",
  landscape: "https://macrotrekkingteam.weebly.com/uploads/7/1/0/8/7108071/1320935_orig.jpg",
};

export default function KarinjeshwaraTemplePage() {
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
          <a href="/explore/temples" className="transition hover:text-[#D6AE70]">Temples</a>
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
            Sacred Hills of Dakshina Kannada
          </p>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Karinjeshwara Temple
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 md:text-xl">
            A peaceful hilltop shrine dedicated to Lord Shiva, surrounded
            by ancient traditions, sacred ponds and beautiful natural scenery.
          </p>
          <p className="mt-7 text-sm tracking-widest text-[#D6AE70]">
            KARINJA · BANTWAL TALUK
          </p>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
              A Temple Above the Hills
            </p>
            <h2 className="mb-7 text-4xl text-[#27151F] md:text-5xl">
              About Karinjeshwara Temple
            </h2>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              Sri Karinjeshwara Temple is a historic Hindu shrine located
              on Karinja Hill in Kavalamudur village, Bantwal Taluk,
              Dakshina Kannada district. Situated in the Kodyamale hill
              range, the temple is dedicated to Lord Shiva.
            </p>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              One of its distinctive features is its two-level arrangement.
              The main shrine of Lord Karinjeshwara stands near the hilltop,
              while a shrine dedicated to Goddess Parvati is situated
              partway up the hill. A shrine for Lord Ganesha is also
              associated with the lower temple complex.
            </p>
            <p className="text-lg leading-9 text-[#65534D]">
              The combination of sacred architecture, rocky terrain,
              greenery and panoramic surroundings makes Karinja an
              important destination for both devotees and nature lovers.
            </p>
          </div>
          <div className="overflow-hidden shadow-xl">
            <img
              src={photos.temple}
              alt="Stone shrine of Karinjeshwara Temple on Karinja Hill"
              className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Temple Layout */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            The Sacred Hill
          </p>
          <h2 className="mb-12 text-4xl md:text-5xl">
            Two Levels of Worship
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="overflow-hidden border border-[#C6A16B]/40 bg-[#3A2630]">
              <img
                src={photos.temple}
                alt="Upper Karinjeshwara shrine"
                className="h-64 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="mb-4 text-2xl text-[#D6AE70]">
                  Upper Shrine – Lord Shiva
                </h3>
                <p className="leading-8 text-[#E2D4C5]">
                  The main Karinjeshwara shrine is located near the top
                  of Karinja Hill. Devotees climb the final section of
                  the hill to reach this sacred place of worship.
                </p>
              </div>
            </article>

            <article className="overflow-hidden border border-[#C6A16B]/40 bg-[#3A2630]">
              <img
                src={photos.parvati}
                alt="Parvati shrine at Karinjeshwara Temple"
                className="h-64 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="mb-4 text-2xl text-[#D6AE70]">
                  Midway Shrine – Goddess Parvati
                </h3>
                <p className="leading-8 text-[#E2D4C5]">
                  The shrine of Goddess Parvati is located partway up
                  the hill. This makes the pilgrimage distinctive,
                  as visitors encounter different sacred spaces
                  during their ascent.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Legends */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Stories and Traditions
          </p>
          <h2 className="mb-10 text-4xl md:text-5xl">
            Legends of Karinja Hill
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "The Four Yuga Names",
                description:
                  "According to local tradition, the hill was known by different names in the four yugas: Roudra Giri, Gajendra Giri, Bhima Shaila and Karinja.",
              },
              {
                title: "Bhima and the Sacred Ponds",
                description:
                  "Local legends associate Gadha Teertha and other water bodies on the hill with Bhima and his mighty mace. These stories form an important part of the hill's sacred identity.",
              },
              {
                title: "Arjuna's Arrow",
                description:
                  "Another local tradition connects a pond on the hill with Arjuna, who is believed to have created it by striking the ground with an arrow.",
              },
              {
                title: "The Ramayana Connection",
                description:
                  "Some religious accounts associate this sacred hill with the journey of Lord Rama and Lakshmana during their search for Goddess Sita.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7"
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
          <p className="mt-6 text-sm leading-7 text-[#806D60]">
            These accounts are traditional religious stories and are
            presented as local beliefs rather than verified historical events.
          </p>
        </div>
      </section>

      {/* Sacred Ponds */}
      <section className="bg-[#F8F1E7] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden shadow-xl">
            <img
              src={photos.pond}
              alt="Sacred pond and rocky hillside at Karinja"
              className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
              Natural and Sacred Water Bodies
            </p>
            <h2 className="mb-7 text-4xl md:text-5xl">
              Theerthas of Karinja
            </h2>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              The hill is known for its natural rock formations and
              sacred water bodies. These ponds are associated with
              local religious traditions and form part of the
              pilgrimage experience.
            </p>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              Gadha Teertha is traditionally connected with Bhima,
              while other ponds are associated with stories involving
              Bhima and Arjuna.
            </p>
            <p className="text-lg leading-9 text-[#65534D]">
              The water bodies and surrounding rock landscape add
              to the distinctive natural character of Karinja Hill.
              Visitors should follow local instructions and avoid
              entering restricted or unsafe water areas.
            </p>
          </div>
        </div>
      </section>

      {/* Vanara Anna Seva */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            A Unique Temple Tradition
          </p>
          <h2 className="mb-7 text-4xl md:text-5xl">
            Vanara Anna Seva
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-9 text-[#E2D4C5]">
            One of the distinctive traditions associated with
            Karinjeshwara Temple is Vanara Anna Seva, a rice offering
            traditionally placed on a stone platform for the monkeys
            living around the hill.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-[#E2D4C5]">
            Local accounts describe a monkey leader known as
            "Karinja Dadda" taking the first share of the offering.
            The practice is an unusual part of the temple's cultural
            identity and is remembered by visitors.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#CDBBAA]">
            Please do not feed or approach wild monkeys independently.
            Follow the temple's instructions and keep a safe distance.
          </p>
        </div>
      </section>

      {/* Festivals */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Celebrations and Worship
          </p>
          <h2 className="mb-10 text-4xl md:text-5xl">
            Festivals of Karinjeshwara
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Maha Shivaratri",
                description:
                  "One of the most important celebrations at the temple, dedicated to Lord Shiva and marked by special worship and devotional activities.",
              },
              {
                title: "Rathotsava",
                description:
                  "The traditional chariot festival forms part of the temple's annual celebrations, bringing devotees together.",
              },
              {
                title: "Shiva–Parvati Sammilana",
                description:
                  "A special ceremonial tradition associated with the divine union of Lord Shiva and Goddess Parvati.",
              },
              {
                title: "Navaratri",
                description:
                  "The festival celebrates the divine feminine and is especially meaningful in connection with the shrine of Goddess Parvati.",
              },
              {
                title: "Deepotsava",
                description:
                  "The festival of lights is observed with devotional celebrations and traditional lamps.",
              },
              {
                title: "Karthika Masa",
                description:
                  "The sacred month is associated with special prayers, worship and lighting of lamps.",
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

      {/* Experiences */}
      <section className="bg-[#F8F1E7] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Discover Karinja
          </p>
          <h2 className="mb-10 text-4xl md:text-5xl">
            What to Experience
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Visit the Shiva Shrine",
                description:
                  "Reach the hilltop shrine and experience the peaceful atmosphere of the main temple.",
              },
              {
                title: "Visit the Parvati Shrine",
                description:
                  "Explore the midway shrine dedicated to Goddess Parvati and the associated temple area.",
              },
              {
                title: "Climb the Hill Steps",
                description:
                  "Experience the traditional pilgrimage route through stone steps and rocky surroundings.",
              },
              {
                title: "Explore the Sacred Ponds",
                description:
                  "Observe the water bodies associated with local stories and the natural landscape of the hill.",
              },
              {
                title: "Enjoy Hilltop Views",
                description:
                  "Take in the surrounding countryside, rocky terrain and greenery from the elevated temple setting.",
              },
              {
                title: "Discover Local Traditions",
                description:
                  "Learn about the temple's festivals, sacred stories and Vanara Anna Seva tradition.",
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
                Mahathobhara Sri Karinjeshwara Temple, Karinja Post,
                Kavalamudur Village, Bantwal Taluk, Dakshina Kannada,
                Karnataka 574265.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Temple Timings</h3>
              <p className="leading-8 text-[#65534D]">
                Commonly listed Shiva shrine timings are 9:00 AM–12:00 PM
                and 6:00 PM–7:00 PM. Timings can vary; confirm with the
                temple before travelling.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Entry Fee</h3>
              <p className="leading-8 text-[#65534D]">
                No general visitor entry charge is confirmed here.
                Special poojas and religious services may have separate
                charges.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">How to Reach</h3>
              <p className="leading-8 text-[#65534D]">
                The temple is near Vagga on the Bantwal–Belthangady route.
                Road access is available towards the lower shrine area;
                the final ascent to the upper Shiva shrine involves steps.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Best Time to Visit</h3>
              <p className="leading-8 text-[#65534D]">
                October to March is generally comfortable for exploring
                the hill. Early morning visits are preferable for the climb.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Visitor Guidelines</h3>
              <p className="leading-8 text-[#65534D]">
                Dress modestly, respect temple customs, use suitable
                footwear for the climb and avoid feeding or disturbing
                monkeys. Follow photography restrictions.
              </p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sri+Karinjeshwara+Temple+Karinja+Bantwal"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#A64F3C] bg-[#A64F3C] px-7 py-3 text-[#F3E9D9] transition hover:bg-[#27151F]"
            >
              View on Google Maps
            </a>
            <a
              href="tel:+9108255285255"
              className="border border-[#A64F3C] px-7 py-3 text-[#A64F3C] transition hover:bg-[#A64F3C] hover:text-[#F3E9D9]"
            >
              Contact Temple
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
              { src: photos.hero, alt: "Karinjeshwara Temple stone shrine" },
              { src: photos.temple, alt: "Karinjeshwara Temple courtyard" },
              { src: photos.steps, alt: "Steps leading up the hill to the temple" },
              { src: photos.pond, alt: "Sacred pond at Karinja Hill" },
              { src: photos.parvati, alt: "Goddess Parvati shrine" },
              { src: photos.landscape, alt: "Rocky hillside and pond at Karinja" },
            ].map((photo, index) => (
              <div key={index} className="group overflow-hidden">
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
              Photograph sources:
            </p>
            <ul className="space-y-2 text-sm text-[#65534D]">
              <li>
                Temple exterior:
                {" "}
                <a
                  className="underline"
                  href="https://www.mangaloreholidays.in/holiday-packages-places/temples-in-and-around-mangalore/karinjeshwara-temple/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mangalore Holidays
                </a>
              </li>
              <li>
                Temple courtyard:
                {" "}
                <a
                  className="underline"
                  href="https://temple.yatradham.org/temple/sri-karinjeshwara-temple"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YatraDham
                </a>
              </li>
              <li>
                Hill steps and landscape:
                {" "}
                <a
                  className="underline"
                  href="https://macrotrekkingteam.weebly.com/karinjeshwara-temple.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Macro Trekking Team
                </a>
              </li>
              <li>
                Sacred pond and Parvati shrine:
                {" "}
                <a
                  className="underline"
                  href="https://bangalorepress.blogspot.com/2013/03/karinjeshwara-temple-karinja-bantwal.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bangalore Press
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs leading-6 text-[#65534D]">
              These photographs are sourced from the linked websites.
              Check the original publishers' reuse permissions before
              publishing them commercially or redistributing them.
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
          <a href="/explore/temples" className="hover:text-[#D6AE70]">Temples</a>
        </div>
        <p className="mt-8 text-xs text-[#BCA99A]">
          © 2026 Namma Dakshina. Explore Dakshina Kannada.
        </p>
      </footer>
    </main>
  );
}
