export default function StAloysiusChapelPage() {
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
            "linear-gradient(rgba(39,21,31,0.45), rgba(39,21,31,0.75)), url('https://commons.wikimedia.org/wiki/Special:FilePath/St.Aloysius_Chapel,Mangalore.jpg?width=1200')",
        }}
      >
        <div className="max-w-3xl text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            A Masterpiece of Art and Heritage
          </p>

          <h1 className="text-5xl md:text-7xl">
            St. Aloysius Chapel
          </h1>

          <p className="mt-6 text-lg leading-8">
            Discover the artistic beauty, historic architecture and
            magnificent paintings of this famous landmark in Mangaluru.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          Discover the Heritage
        </p>

        <h2 className="mb-8 text-4xl text-[#27151F]">
          About St. Aloysius Chapel
        </h2>

        <p className="text-lg leading-9 text-[#65534D]">
          St. Aloysius Chapel is one of the most remarkable historical
          attractions in Mangaluru, Karnataka. Located within St. Aloysius
          College, the chapel is famous for its beautiful interior paintings
          and artistic ceiling decorations. Its impressive artwork and
          architectural style make it an important cultural and heritage
          destination for visitors.
        </p>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-[#E9DCCB] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Explore the Chapel
          </p>

          <h2 className="mb-12 text-4xl text-[#27151F]">
            What Makes It Special
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Artistic Paintings
              </h3>
              <p className="leading-8 text-[#65534D]">
                Admire the detailed paintings covering the chapel walls
                and ceiling.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Historic Architecture
              </h3>
              <p className="leading-8 text-[#65534D]">
                Explore the unique architectural design and historic
                character of the chapel.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Peaceful Atmosphere
              </h3>
              <p className="leading-8 text-[#65534D]">
                Experience the calm surroundings and appreciate this
                important heritage site.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VISITOR NOTE */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-5 text-3xl">Plan Your Visit</h2>

        <p className="leading-8 text-[#65534D]">
          Location: St. Aloysius College, Kodialbail, Mangaluru, Karnataka.
        </p>

        <p className="mt-3 leading-8 text-[#65534D]">
          Visitors are requested to respect the chapel's religious
          environment and follow the visitor guidelines.
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
              <h3 className="mb-3 text-xl text-[#A64F3C]">Location</h3>
              <p className="leading-8 text-[#65534D]">
                St. Aloysius Chapel, Kodialbail, Mangaluru,
                Karnataka.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=St+Aloysius+Chapel+Mangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border-b border-[#A64F3C] pb-1 text-sm text-[#A64F3C]"
              >
                View on Google Maps →
              </a>
            </article>

            {/* VISITING HOURS */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Visiting Hours</h3>
              <p className="leading-8 text-[#65534D]">
                Monday:
                <br />
                9:30 AM – 12:30 PM
                <br />
                2:00 PM – 4:00 PM
                <br /><br />
                Tuesday – Sunday:
                <br />
                9:30 AM – 1:00 PM
                <br />
                2:30 PM – 5:00 PM
              </p>
            </article>

            {/* ENTRY FEE */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Entry Fee</h3>
              <p className="leading-8 text-[#65534D]">
                No fixed entry fee is listed. Guide service is
                free of cost. Visitors may contribute towards
                chapel maintenance.
              </p>
            </article>

            {/* MASS TIMINGS */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Mass Timings</h3>
              <p className="leading-8 text-[#65534D]">
                Daily Mass:
                <br />
                6:45 AM and 8:15 AM
                <br /><br />
                Sunday Mass:
                <br />
                6:30 AM and 8:00 AM
              </p>
            </article>

            {/* HOW TO REACH */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">How to Reach</h3>
              <p className="leading-8 text-[#65534D]">
                Located in central Mangaluru. Visitors can
                reach the chapel by local bus, taxi or
                auto-rickshaw.
              </p>
            </article>

            {/* VISITOR GUIDELINES */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Visitor Guidelines
              </h3>
              <p className="leading-8 text-[#65534D]">
                Remove footwear before entering. Maintain
                silence and discipline. Photography and
                videography are not permitted inside.
              </p>
            </article>

          </div>
        </div>
      </section>

              {/* PHOTO GALLERY */}
      <section className="bg-[#F3E9D9] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Artistic Heritage
          </p>

          <h2 className="mb-10 text-4xl text-[#27151F]">
            St. Aloysius Chapel Gallery
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/St.Aloysius_Chapel,Mangalore.jpg?width=1200"
              alt="St. Aloysius Chapel exterior"
              className="h-72 w-full border border-[#C6A16B]/50 object-cover"
            />

            <img
  src="https://commons.wikimedia.org/wiki/Special:FilePath/Interior_view_of_St.Aloysius_Chapel,_Mangalore.jpg?width=1200"
  alt="Interior of St. Aloysius Chapel"
  className="h-72 w-full border border-[#C6A16B]/50 object-cover"
/>

<img
  src="https://commons.wikimedia.org/wiki/Special:FilePath/St.Aloysius_Chapel_interior_painting.jpg?width=1200"
  alt="Paintings inside St. Aloysius Chapel"
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