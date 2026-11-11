export default function TannirbhaviBeachPage() {
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
            "linear-gradient(rgba(39,21,31,0.40), rgba(39,21,31,0.75)), url('https://web-cms.karnatakatourism.org/wp-content/uploads/2025/06/Tannirbhavi-Beach-e1750678541671.jpg?v=2')",
        }}
      >
        <div className="max-w-3xl text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            A Peaceful Coastal Escape
          </p>

          <h1 className="text-5xl md:text-7xl">
            Tannirbhavi Beach
          </h1>

          <p className="mt-6 text-lg leading-8">
            Experience the peaceful coastline, golden sands and beautiful
            sunsets at one of Mangaluru's most relaxing beach destinations.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          Discover the Coast
        </p>

        <h2 className="mb-8 text-4xl text-[#27151F]">
          About Tannirbhavi Beach
        </h2>

        <p className="text-lg leading-9 text-[#65534D]">
          Tannirbhavi Beach is a beautiful coastal destination located in
          Mangaluru, Karnataka. Known for its peaceful atmosphere, clean
          shoreline and scenic views, it offers visitors a relaxing escape
          from the busy city. The beach is especially popular for its
          beautiful sunsets and calm coastal surroundings.
        </p>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-[#E9DCCB] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Experience the Beauty
          </p>

          <h2 className="mb-12 text-4xl text-[#27151F]">
            What Makes It Special
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Beautiful Sunsets
              </h3>
              <p className="leading-8 text-[#65534D]">
                Enjoy stunning sunset views over the Arabian Sea and
                capture memorable coastal moments.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Peaceful Atmosphere
              </h3>
              <p className="leading-8 text-[#65534D]">
                Relax along the shoreline and enjoy the soothing sound
                of the waves.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Coastal Activities
              </h3>
              <p className="leading-8 text-[#65534D]">
                Enjoy beach walks, photography and quality time with
                family and friends.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VISITOR NOTE */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-5 text-3xl">Plan Your Visit</h2>

        <p className="leading-8 text-[#65534D]">
          Location: Tannirbhavi, Mangaluru, Karnataka.
        </p>

        <p className="mt-3 leading-8 text-[#65534D]">
          Visitors are advised to follow beach safety instructions and
          avoid entering the sea during unsafe conditions.
        </p>
      </section>

      {/* VISITOR INFORMATION */}
      <section className="bg-[#E9DCCB] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Plan Your Journey
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
                Tannirbhavi Beach, Kasba Bengre, Mangaluru,
                Karnataka.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tannirbhavi+Beach+Mangalore"
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
                Commonly listed hours:
                <br />
                7:00 AM – 7:00 PM
                <br />
                Timings may vary depending on beach management
                and seasonal conditions.
              </p>
            </article>

            {/* ENTRY FEE */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Entry Fee
              </h3>
              <p className="leading-8 text-[#65534D]">
                Blue Flag area rates reported in May 2024:
                <br />
                Adults: ₹20
                <br />
                Children below 13: ₹10
                <br />
                Confirm current charges at the entrance.
              </p>
            </article>

            {/* HOW TO REACH */}
            

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                How to Reach
              </h3>

              <p className="leading-8 text-[#65534D]">
                <strong>By Bus & Ferry:</strong>
                <br />
                From State Bank Bus Stand, take a bus towards
                Sultan Battery (Routes 16 or 16A). Get down at
                Sultan Battery, purchase a ferry ticket and cross
                the Gurupura River by boat. From the other side,
                walk towards Tannirbhavi Beach.

                <br /><br />

                <strong>By Road:</strong>
                <br />
                Reach Tannirbhavi Beach through Kuloor Bridge
                by taxi, auto-rickshaw or bus.
              </p>
            </article>

            {/* BEST TIME */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Best Time to Visit
              </h3>
              <p className="leading-8 text-[#65534D]">
                October to February is generally the best period
                to enjoy pleasant weather and beautiful sunsets.
              </p>
            </article>

            {/* BEACH SAFETY */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Beach Safety
              </h3>
              <p className="leading-8 text-[#65534D]">
                Lifeguards are generally on duty during daytime.
                Follow safety instructions and avoid swimming
                during rough sea conditions.
              </p>
            </article>

            {/* FACILITIES */}
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Facilities
              </h3>
              <p className="leading-8 text-[#65534D]">
                Basic facilities include parking, toilets,
                refreshments and seating areas.
              </p>
            </article>

          </div>
        </div>
      </section>
             {/* PHOTO GALLERY */}
      <section className="bg-[#F3E9D9] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Moments by the Shore
          </p>

          <h2 className="mb-10 text-4xl text-[#27151F]">
            Tannirbhavi Beach Gallery
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <img
    src="https://karnatakatourism.org/wp-content/uploads/2021/02/my-experience-at-tannirbhav-beach-park-karnataka.jpg"
    alt="Tannirbhavi Beach Park"
    className="h-72 w-full border border-[#C6A16B]/50 object-cover"
  />

  <img
    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/56/ca/f2/caption.jpg?h=1400&s=1&w=1400"
    alt="Tannirbhavi Beach walkway"
    className="h-72 w-full border border-[#C6A16B]/50 object-cover"
  />

  <img
  src="/tannirbhavi-ferry.jpg"
  alt="Ferry crossing the Gurupura River to Tannirbhavi Beach"
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