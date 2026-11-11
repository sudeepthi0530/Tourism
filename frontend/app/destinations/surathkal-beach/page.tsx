
export default function SurathkalBeachPage() {
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
        <a href="/explore/beaches" className="text-sm hover:text-[#D6AE70]">
          ← Back to Beaches
        </a>
      </nav>

      {/* HERO */}
      <section
        className="relative flex min-h-[65vh] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(39,21,31,0.40), rgba(39,21,31,0.75)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')",
        }}
      >
        <div className="max-w-3xl text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            Where the Coast Meets the Lighthouse
          </p>
          <h1 className="text-5xl md:text-7xl">Surathkal Beach</h1>
          <p className="mt-6 text-lg leading-8">
            Discover the beauty of Surathkal Beach, known for its
            scenic shoreline, lighthouse and breathtaking coastal views.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          Discover the Coast
        </p>
        <h2 className="mb-8 text-4xl">About Surathkal Beach</h2>
        <p className="text-lg leading-9 text-[#65534D]">
          Surathkal Beach is a popular coastal destination in
          Dakshina Kannada district, located near the National Institute
          of Technology Karnataka (NITK). It is especially known for
          its scenic lighthouse, golden sands and beautiful views
          of the Arabian Sea. Visitors enjoy peaceful beach walks,
          photography and memorable sunsets.
        </p>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-[#E9DCCB] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Experience the Beauty
          </p>
          <h2 className="mb-12 text-4xl">What Makes It Special</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Lighthouse
              </h3>
              <p className="leading-8 text-[#65534D]">
                Admire the famous lighthouse standing near the
                beautiful coastline.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Scenic Shoreline
              </h3>
              <p className="leading-8 text-[#65534D]">
                Enjoy peaceful walks along the beach and
                beautiful Arabian Sea views.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-4 text-2xl text-[#A64F3C]">
                Sunset Views
              </h3>
              <p className="leading-8 text-[#65534D]">
                Experience colourful sunsets and capture
                memorable coastal photographs.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VISITOR INFORMATION */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          Plan Your Journey
        </p>
        <h2 className="mb-10 text-4xl">Visitor Information</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
            <h3 className="mb-3 text-xl text-[#A64F3C]">Location</h3>
            <p className="leading-8 text-[#65534D]">
              Surathkal Beach, Surathkal, Mangaluru, Karnataka.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Surathkal+Beach+Mangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border-b border-[#A64F3C] pb-1 text-sm text-[#A64F3C]"
            >
              View on Google Maps →
            </a>
          </article>

          <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
            <h3 className="mb-3 text-xl text-[#A64F3C]">Visiting Hours</h3>
            <p className="leading-8 text-[#65534D]">
              Visit during daylight hours. Lighthouse access may
              have separate timings.
            </p>
          </article>

          <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
            <h3 className="mb-3 text-xl text-[#A64F3C]">Entry Fee</h3>
            <p className="leading-8 text-[#65534D]">
              Check locally for any applicable parking or
              lighthouse entry charges.
            </p>
          </article>

          <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
            <h3 className="mb-3 text-xl text-[#A64F3C]">How to Reach</h3>
            <p className="leading-8 text-[#65534D]">
              Surathkal is accessible from Mangaluru by local bus,
              taxi and other road transport.
            </p>
          </article>

          <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
            <h3 className="mb-3 text-xl text-[#A64F3C]">Best Time to Visit</h3>
            <p className="leading-8 text-[#65534D]">
              October to February is generally suitable for
              pleasant coastal weather and sightseeing.
            </p>
          </article>

          <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
            <h3 className="mb-3 text-xl text-[#A64F3C]">Beach Safety</h3>
            <p className="leading-8 text-[#65534D]">
              Avoid swimming during rough sea conditions.
              Follow local safety instructions near rocky areas.
            </p>
          </article>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-[#E9DCCB] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Moments by the Shore
          </p>
          <h2 className="mb-10 text-4xl">Surathkal Beach Gallery</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000"
              alt="Coastal beach shoreline"
              className="h-72 w-full border border-[#C6A16B]/50 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1000"
              alt="Waves along the coast"
              className="h-72 w-full border border-[#C6A16B]/50 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1000"
              alt="Coastal sunset scenery"
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
