
const photos = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Gadaikal%2C_belthangady.jpg",
  entrance: "https://commons.wikimedia.org/wiki/Special:FilePath/Gadaikallu_entrance.JPG",
  passage: "https://commons.wikimedia.org/wiki/Special:FilePath/JamalabadFortPassage.jpg",
  view: "https://commons.wikimedia.org/wiki/Special:FilePath/ViewFromJamalabad.jpg",
};

export default function JamalabadFortPage() {
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
        <div className="absolute inset-0 bg-[#27151F]/65" />
        <div className="relative z-10 max-w-4xl px-6 text-center text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#D6AE70]">
            Historic Forts of Dakshina Kannada
          </p>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Jamalabad Fort
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 md:text-xl">
            A historic hilltop fortress surrounded by granite landscapes,
            steep rock-cut steps and panoramic mountain views.
          </p>
          <p className="mt-7 text-sm tracking-widest text-[#D6AE70]">
            GADAIKALLU · BELTHANGADY
          </p>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
              A Fortress on the Rocks
            </p>
            <h2 className="mb-7 text-4xl text-[#27151F] md:text-5xl">
              About Jamalabad Fort
            </h2>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              Jamalabad Fort is a historic hilltop fortification located
              near Belthangady in Dakshina Kannada district. It is also
              known as Gadaikallu and was formerly associated with the
              name Narasimhagadi.
            </p>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              The fort stands on a massive granite hill. Its elevated
              position provided a strategic advantage for observing the
              surrounding landscape and controlling access to the summit.
            </p>
            <p className="text-lg leading-9 text-[#65534D]">
              Today, the fort is known for its historic remains, challenging
              stone-step climb and wide views of the surrounding hills and
              valleys.
            </p>
          </div>
          <div className="overflow-hidden shadow-xl">
            <img
              src={photos.entrance}
              alt="Rock-cut entrance steps of Jamalabad Fort"
              className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            History of the Fortress
          </p>
          <h2 className="mb-12 text-4xl md:text-5xl">
            A Strategic Hilltop Stronghold
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                year: "Before 1794",
                title: "An Older Fortification",
                description:
                  "The present fort was built over the remains of an earlier fortification, showing the strategic importance of this granite hill.",
              },
              {
                year: "1794",
                title: "Built by Tipu Sultan",
                description:
                  "Tipu Sultan constructed the present fort and named it Jamalabad after his mother, Jamalbee.",
              },
              {
                year: "1799",
                title: "British Capture",
                description:
                  "British forces captured the fort during the conflicts that followed the Fourth Anglo-Mysore War.",
              },
              {
                year: "1800",
                title: "Recaptured by the British",
                description:
                  "After a brief period of changing control, the British recaptured the fort in 1800. It gradually lost its former military importance.",
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

      {/* Architecture */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden shadow-xl">
            <img
              src={photos.passage}
              alt="Stone passage at Jamalabad Fort"
              className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
              Granite and Engineering
            </p>
            <h2 className="mb-7 text-4xl md:text-5xl">
              Fort Architecture
            </h2>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              Jamalabad Fort makes use of the natural strength of its
              rocky hilltop setting. Its walls, gateways and surviving
              fortification features were constructed using carefully
              cut granite blocks.
            </p>
            <p className="mb-5 text-lg leading-9 text-[#65534D]">
              A flight of steps cut directly into the solid rock forms
              the main approach to the citadel. The narrow route made
              access difficult and offered a defensive advantage.
            </p>
            <p className="text-lg leading-9 text-[#65534D]">
              Historical descriptions also record water storage tanks,
              a small spring and the remains of a cannon within the
              fort complex.
            </p>
          </div>
        </div>
      </section>

      {/* Trekking Experience */}
      <section className="bg-[#F8F1E7] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
            Adventure and Exploration
          </p>
          <h2 className="mb-10 text-4xl md:text-5xl">
            The Jamalabad Trek
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Rock-Cut Steps",
                description:
                  "Climb the narrow stone steps carved into the granite hill. The ascent is steep and requires care.",
              },
              {
                title: "Historic Entrance",
                description:
                  "Observe the surviving entrance and fortification remains that once controlled access to the summit.",
              },
              {
                title: "Panoramic Views",
                description:
                  "Enjoy views of the surrounding hills, valleys, fields and the landscape of the Kudremukh region.",
              },
              {
                title: "Granite Landscape",
                description:
                  "Experience the unusual rocky terrain and natural formations that make the hill distinctive.",
              },
              {
                title: "Historic Remains",
                description:
                  "Look for traces of the old fort walls, water storage structures and other surviving features.",
              },
              {
                title: "Photography",
                description:
                  "Capture the rugged hilltop landscape and scenic views, while staying within safe and permitted areas.",
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

      {/* Trekking Safety */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            Before You Climb
          </p>
          <h2 className="mb-8 text-4xl md:text-5xl">
            Trekking Safety
          </h2>
          <p className="mb-8 max-w-3xl text-lg leading-9 text-[#E2D4C5]">
            The climb involves steep rock-cut steps and exposed sections.
            It is important to plan carefully, follow local restrictions
            and avoid attempting the trek in unsafe weather.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Check Seasonal Access",
                description:
                  "Karnataka Tourism lists October to May as the permitted visiting season. Confirm current permissions before travelling.",
              },
              {
                title: "Avoid Rainy Conditions",
                description:
                  "The granite steps can become slippery during the monsoon. Do not attempt the climb when the route is wet or unsafe.",
              },
              {
                title: "Wear Suitable Footwear",
                description:
                  "Use sturdy trekking footwear with good grip. Avoid slippers and smooth-soled footwear.",
              },
              {
                title: "Carry Water",
                description:
                  "Carry sufficient drinking water and basic essentials. Do not assume refreshments are available along the route.",
              },
              {
                title: "Follow Local Instructions",
                description:
                  "Respect forest department rules, access restrictions and any safety directions given by local authorities.",
              },
              {
                title: "Do Not Litter",
                description:
                  "Carry your waste back and help protect the hill, vegetation and historic remains.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-[#C6A16B]/40 bg-[#3A2630] p-7"
              >
                <h3 className="mb-3 text-xl text-[#D6AE70]">
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
                Jamalabad Fort, near Nadu village, Belthangady Taluk,
                Dakshina Kannada District, Karnataka.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Visiting Season</h3>
              <p className="leading-8 text-[#65534D]">
                Karnataka Tourism lists October to May as the permitted
                season. Confirm current access and timings with local
                authorities before your trip.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Entry Fee</h3>
              <p className="leading-8 text-[#65534D]">
                Current entry charges are not confirmed here. Check with
                the relevant forest or site authorities before visiting.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">How to Reach</h3>
              <p className="leading-8 text-[#65534D]">
                The fort is accessed from the Nadu area near Belthangady.
                Road travel is possible up to the trekking access point;
                the remaining ascent is on foot.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Best Time to Visit</h3>
              <p className="leading-8 text-[#65534D]">
                Choose a clear, dry day during the permitted season.
                Start early to avoid the strongest afternoon heat.
              </p>
            </article>

            <article className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7">
              <h3 className="mb-3 text-xl text-[#A64F3C]">Visitor Guidelines</h3>
              <p className="leading-8 text-[#65534D]">
                Wear proper trekking shoes, carry water, avoid the climb
                in rain and follow all forest department and local safety
                instructions.
              </p>
            </article>
          </div>

          <div className="mt-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jamalabad+Fort+Belthangady+Karnataka"
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
                src={photos.entrance}
                alt="Rock-cut entrance steps at Jamalabad Fort"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden">
              <img
                src={photos.passage}
                alt="Stone passage inside Jamalabad Fort"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden md:col-span-2">
              <img
                src={photos.view}
                alt="Panoramic landscape view from Jamalabad Fort"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-8 border-t border-[#C6A16B]/50 pt-5">
            <p className="mb-3 text-sm text-[#65534D]">
              Photograph credits and licences:
            </p>
            <ul className="space-y-2 text-sm text-[#65534D]">
              <li>
                Gadaikal, Belthangady —{" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:Gadaikal,_belthangady.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons file page
                </a>
              </li>
              <li>
                Gadaikallu entrance —{" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:Gadaikallu_entrance.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons file page
                </a>
              </li>
              <li>
                Jamalabad Fort passage —{" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:JamalabadFortPassage.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons file page
                </a>
              </li>
              <li>
                View from Jamalabad —{" "}
                <a
                  className="underline"
                  href="https://commons.wikimedia.org/wiki/File:ViewFromJamalabad.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikimedia Commons file page
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs leading-6 text-[#65534D]">
              Check each Wikimedia Commons file page for its creator,
              licence and attribution requirements before reuse.
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
