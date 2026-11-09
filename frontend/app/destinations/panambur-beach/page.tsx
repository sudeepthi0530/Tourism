
export default function PanamburBeachPage() {
  return (
    <main
    className="min-h-screen bg-[#F3E9D9] text-[#27151F]"
    style={{
    fontFamily: '"Bell MT", "Baskerville", "Georgia", serif',
    }}
>
      {/* Navigation */}
      <nav className="flex items-center justify-between bg-[#27151F] px-6 py-5 text-[#F3E9D9] md:px-16">
        <a href="/" className="text-2xl">
          <span className="text-[#D6AE70]">Namma</span> Dakshina.
        </a>

        <a
          href="/"
          className="text-sm tracking-wider text-[#D6AE70] hover:text-white"
        >
          ← BACK TO HOME
        </a>
      </nav>

      {/* Destination Hero */}
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
            "url('https://commons.wikimedia.org/wiki/Special:FilePath/Panambur_Beach.jpg?width=1200')",
          }}
        />

        <div className="absolute inset-0 bg-[#27151F]/65" />

        <div className="relative z-10 px-6 text-center text-[#F3E9D9]">
          <p className="text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            Discover Dakshina Kannada
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl">
            Panambur Beach
          </h1>

          <div className="mx-auto my-7 h-px w-24 bg-[#D6AE70]" />

          <p className="text-lg tracking-wider">
            Where the waves meet unforgettable memories.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          About the destination
        </p>

        <h2 className="mt-4 text-4xl">
          Experience the beauty of the coast.
        </h2>

        <p className="mt-7 text-base leading-8 text-[#65534D]">
          Panambur Beach is a popular coastal destination in Mangaluru,
          known for its sandy shoreline, beautiful sea views and
          relaxing atmosphere. Visitors can enjoy the coastal scenery,
          spend time with family and friends, and experience memorable
          sunsets along the Arabian Sea.
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-[#EDE0CE] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl">
            Things to experience
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Beautiful Coastline",
                description: "Enjoy the wide sandy beach and Arabian Sea views.",
              },
              {
                title: "Sunset Views",
                description: "Experience the changing colours of the evening sky.",
              },
              {
                title: "Beach Activities",
                description: "Explore available recreational activities and local experiences.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7"
              >
                <h3 className="text-2xl text-[#27151F]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#65534D]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Experience */}
      <section className="bg-[#27151F] px-6 py-20 text-center text-[#F3E9D9]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
          Coming soon
        </p>

        <h2 className="mt-5 text-4xl">
          Explore Panambur virtually.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#F3E9D9]/75">
          Experience a virtual journey through Panambur Beach.
          Discover its surroundings and explore the destination
          before planning your visit.
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

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Location
              </h3>
              <p className="leading-8 text-[#65534D]">
                Panambur Beach, Mangaluru, Karnataka.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Panambur+Beach+Mangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border-b border-[#A64F3C] pb-1 text-sm text-[#A64F3C]"
              >
                View on Google Maps →
              </a>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Visiting Hours
              </h3>
              <p className="leading-8 text-[#65534D]">
                Commonly listed hours: 8:00 AM – 7:00 PM.
                Confirm current timings locally before visiting.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Entry Fee
              </h3>
              <p className="leading-8 text-[#65534D]">
                General beach access is usually free.
                Parking and activities may involve additional charges.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                How to Reach
              </h3>
              <p className="leading-8 text-[#65534D]">
                Reach the beach by local bus, taxi or auto-rickshaw
                from Mangaluru city.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Best Time to Visit
              </h3>
              <p className="leading-8 text-[#65534D]">
                October to February is generally a pleasant period
                to explore the beach.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">
                Activities
              </h3>
              <p className="leading-8 text-[#65534D]">
                Enjoy beach walks, photography, water sports
                and beautiful coastal sunsets.
              </p>
            </article>

          </div>
        </div>
      </section>
            {/* PHOTO GALLERY */}
      <section className="bg-[#F3E9D9] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Moments by the Coast
          </p>

          <h2 className="mb-10 text-4xl text-[#27151F]">
            Panambur Beach Gallery
          </h2>

         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Panambur_Beach_Mangalore.jpg"
    alt="Panambur Beach coastline"
    className="h-72 w-full border border-[#C6A16B]/50 object-cover"
  />

  <img
    src="https://headlinekarnataka.com/img/news/ck_editor_upload_1703768981.jpeg"
    alt="Panambur Beach floating bridge"
    className="h-72 w-full border border-[#C6A16B]/50 object-cover"
  />

  <img
    src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/10/Panambur-Beach-Mangalore-Karnataka.jpg?ssl=1&w=1200"
    alt="Panambur Beach kite festival"
    className="h-72 w-full border border-[#C6A16B]/50 object-cover"
  />
</div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#27151F] px-6 py-8 text-center text-sm text-[#F3E9D9]/70">
        © 2026 Namma Dakshina. All rights reserved.
      </footer>
    </main>
  );
}
