export default function KudroliTemplePage() {
  return (
    <main
      className="min-h-screen bg-[#F3E9D9] text-[#27151F]"
      style={{
        fontFamily: '"Bell MT", "Baskerville", "Georgia", serif',
      }}
    >
      {/* NAVIGATION */}
      <nav className="flex items-center justify-between border-b border-[#C6A16B]/40 bg-[#27151F] px-8 py-5 text-[#F3E9D9]">
        <a href="/" className="text-2xl tracking-widest text-[#D6AE70]">
          NAMMA DAKSHINA
        </a>
        <a href="/" className="text-sm hover:text-[#D6AE70]">
          ← Back to Home
        </a>
      </nav>

      {/* HERO */}
      <section
        className="relative flex min-h-[65vh] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(39,21,31,0.45), rgba(39,21,31,0.75)), url('https://mangaluru.adaniairports.com/-/media/Images/AdaniAirMangalore/All-Latest/In-the-City/KUDROLI.png')",
        }}
      >
        <div className="max-w-3xl text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            A Sacred Landmark of Mangaluru
          </p>
          <h1 className="text-5xl md:text-7xl">
            Kudroli Gokarnath Temple
          </h1>
          <p className="mt-6 text-lg leading-8">
            Discover the spiritual beauty, colourful architecture and
            peaceful atmosphere of one of Mangaluru's most famous temples.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          Discover the Heritage
        </p>
        <h2 className="mb-8 text-4xl text-[#27151F]">
          About Kudroli Temple
        </h2>
        <p className="text-lg leading-9 text-[#65534D]">
          Kudroli Gokarnath Temple is an important spiritual and cultural
          landmark in Mangaluru, Karnataka. Dedicated to Lord Shiva, the
          temple is known for its beautiful architecture, colourful
          surroundings and peaceful atmosphere. It attracts devotees and
          visitors throughout the year, especially during the grand
          Mangaluru Dasara celebrations.
        </p>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-[#E9DCCB] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Explore the Temple
          </p>
          <h2 className="mb-12 text-4xl text-[#27151F]">
            What Makes It Special
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Temple Architecture
              </h3>
              <p className="leading-8 text-[#65534D]">
                Admire the colourful gopuram, detailed sculptures and
                beautiful temple surroundings.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Spiritual Experience
              </h3>
              <p className="leading-8 text-[#65534D]">
                Experience the calm atmosphere and observe the temple's
                devotional traditions.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Mangaluru Dasara
              </h3>
              <p className="leading-8 text-[#65534D]">
                Witness the vibrant celebrations, decorations and cultural
                events during the Dasara festival.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VISITOR NOTE */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-5 text-3xl">Plan Your Visit</h2>
        <p className="leading-8 text-[#65534D]">
          Location: Kudroli, Mangaluru, Karnataka.
        </p>
        <p className="mt-3 leading-8 text-[#65534D]">
          Visitors are requested to respect temple customs and maintain
          appropriate dress and decorum.
        </p>
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
                Kudroli Gokarnath Temple, Kudroli, Mangaluru,
                Karnataka.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kudroli+Gokarnath+Temple+Mangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border-b border-[#A64F3C] pb-1 text-sm text-[#A64F3C]"
              >
                View on Google Maps →
              </a>
            </article>

            {/* VISITING HOURS */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Visiting Hours
              </h3>
              <p className="leading-8 text-[#65534D]">
                Morning: 6:00 AM – 2:00 PM
                <br />
                Evening: 4:30 PM – 9:00 PM
              </p>
            </article>

            {/* POOJA TIMINGS */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Pooja Timings
              </h3>
              <p className="leading-8 text-[#65534D]">
                Afternoon Pooja: 12:30 PM
                <br />
                Visitors can experience the temple's devotional
                traditions and rituals.
              </p>
            </article>

            {/* ENTRY FEE */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Entry Fee
              </h3>
              <p className="leading-8 text-[#65534D]">
                General temple darshan is free.
                Special poojas and religious services may
                have separate charges.
              </p>
            </article>

            {/* HOW TO REACH */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                How to Reach
              </h3>
              <p className="leading-8 text-[#65534D]">
                Reach Kudroli by local bus, taxi or auto-rickshaw
                from Mangaluru city and nearby areas.
              </p>
            </article>

            {/* BEST TIME */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Best Time to Visit
              </h3>
              <p className="leading-8 text-[#65534D]">
                October is especially popular because of the
                grand Mangaluru Dasara celebrations.
              </p>
            </article>

            {/* DRESS CODE */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Dress Code
              </h3>
              <p className="leading-8 text-[#65534D]">
                Wear modest clothing and follow the temple's
                dress code and visitor guidelines.
              </p>
            </article>

          </div>
        </div>
      </section>

            {/* PHOTO GALLERY */}
      <section className="bg-[#F3E9D9] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Moments of Divinity
          </p>

          <h2 className="mb-10 text-4xl text-[#27151F]">
            Kudroli Temple Gallery
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="https://mangaluru.adaniairports.com/-/media/Images/AdaniAirMangalore/All-Latest/In-the-City/KUDROLI.png"
              alt="Kudroli Gokarnath Temple"
              className="h-72 w-full border border-[#C6A16B]/50 object-cover"
            />

            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Kudroli_Gokarnath_Temple.jpg?width=1000"
              alt="Kudroli temple architecture"
              className="h-72 w-full border border-[#C6A16B]/50 object-cover"
            />

            <img
                src="https://www.dreamindiatravels.com/lbt-content/lbt-theme/images/pages/55478936G.jpg"
                alt="Kudroli Temple at night"
                className="h-72 w-full border border-[#C6A16B]/50 object-cover"
            />

            

          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-[#27151F] px-6 py-8 text-center text-[#F3E9D9]">
        <p className="text-lg tracking-widest text-[#D6AE70]">
          NAMMA DAKSHINA
        </p>
        <p className="mt-2 text-sm text-[#C6A16B]">
          Discover the beauty and heritage of Dakshina Kannada.
        </p>
      </footer>
    </main>
  );
}