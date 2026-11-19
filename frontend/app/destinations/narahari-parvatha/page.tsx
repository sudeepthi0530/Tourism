
"use client";

import Link from "next/link";

const pageFont = '"Bell MT", "Baskerville", "Georgia", serif';


const photos = {
  hero: "https://narahariparvatha.vercel.app/_next/image?q=75&url=%2Fimages%2Ftemple-image.png&w=3840",
  temple: "https://narahariparvatha.vercel.app/_next/image?q=75&url=%2Fimages%2Ftemple-image2.jpg&w=3840",
};

const galleryPhotos = [
  {
    src: "https://narahariparvatha.vercel.app/_next/image?q=75&url=%2Fimages%2Ftemple-image.png&w=3840",
    alt: "Narahari Parvatha temple on the hilltop",
  },
  {
    src: "https://narahariparvatha.vercel.app/_next/image?q=75&url=%2Fimages%2Fshanka.jpg&w=3840",
    alt: "Shanka Teertha sacred pond",
  },
  {
    src: "https://narahariparvatha.vercel.app/_next/image?q=75&url=%2Fimages%2Fchakra.jpg&w=3840",
    alt: "Chakra Teertha sacred pond",
  },
  {
    src: "https://narahariparvatha.vercel.app/_next/image?q=75&url=%2Fimages%2Fgadha.jpeg&w=3840",
    alt: "Gadha Teertha sacred pond",
  },
  {
    src: "https://narahariparvatha.vercel.app/_next/image?q=75&url=%2Fimages%2Fpadma.jpeg&w=3840",
    alt: "Padma Teertha sacred pond",
  },
  {
    src: "https://narahariparvatha.vercel.app/_next/image?q=75&url=%2Fimages%2Fx.jpg&w=3840",
    alt: "Devotees performing sacred Teerthasnana",
  },
];

const experiences = [
  {
    title: "Climb the Sacred Hill",
    description:
      "Walk up the hill towards the ancient Sadashiva shrine. The traditional route has around 333 steps, making the climb part of the pilgrimage.",
  },
  {
    title: "Visit the Sacred Ponds",
    description:
      "Explore the hilltop ponds traditionally associated with the conch, discus, mace and lotus. Devotees visit them for sacred bathing rituals.",
  },
  {
    title: "Seek the Blessings of Lord Sadashiva",
    description:
      "Offer prayers at the hilltop shrine dedicated to Lord Shiva and experience the peaceful atmosphere of this hill temple.",
  },
  {
    title: "Enjoy the Hilltop Views",
    description:
      "Take in the surrounding hills, greenery and scenic views of the Dakshina Kannada countryside.",
  },
  {
    title: "Witness Traditional Festivals",
    description:
      "Experience the temple's devotional atmosphere during Aati Amavasya, Sona Amavasya and other important religious occasions.",
  },
  {
    title: "Experience the Local Legend",
    description:
      "Learn about the traditional story connecting Lord Krishna and Arjuna with Narahari Hill and its sacred ponds.",
  },
];

const visitorInfo = [
  {
    title: "Location",
    value:
      "Panemangalore, near Melkar, Bantwal Taluk, Dakshina Kannada, Karnataka – 574231",
  },
  {
    title: "Temple Timings",
    value:
      "Reported hours: 7:00 AM – 7:00 PM. Please confirm before visiting.",
  },
  {
    title: "Pooja Timings",
    value: "Reported timings: 8:30 AM, 12:30 PM and 6:30 PM.",
  },
  {
    title: "Entry Fee",
    value:
      "No confirmed entry fee information available. Check with the temple.",
  },
  {
    title: "How to Reach",
    value:
      "The temple is near Melkar and approximately 4 km from B.C. Road, Bantwal. Mangaluru is around 28–30 km away.",
  },
  {
    title: "Best Time to Visit",
    value:
      "Early morning and cooler hours are suitable for the hill climb. Festival days attract larger crowds.",
  },
];

export default function NarahariParvathaPage() {
  return (
    <main
      className="min-h-screen bg-[#F3E9D9] text-[#27151F]"
      style={{ fontFamily: pageFont }}
    >
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-[#C6A16B]/40 bg-[#27151F] px-6 py-5 text-[#F3E9D9] md:px-12">
        <Link href="/" className="text-2xl tracking-wide">
          NAMMA DAKSHINA
        </Link>

        <div className="flex gap-5 text-sm md:gap-8">
          <Link href="/" className="transition hover:text-[#D6AE70]">
            Home
          </Link>
          <Link href="/explore" className="transition hover:text-[#D6AE70]">
            Explore
          </Link>
          <Link
            href="/explore/heritage"
            className="transition hover:text-[#D6AE70]"
          >
            Heritage
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex min-h-[570px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(39,21,31,0.55), rgba(39,21,31,0.78)), url('${photos.hero}')`,
        }}
      >
        <div className="max-w-4xl text-[#F3E9D9]">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#D6AE70]">
            Sacred Hill · Bantwal
          </p>

          <h1 className="mb-6 text-5xl leading-tight md:text-7xl">
            Narahari Parvatha
            <br />
            Sadashiva Temple
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#F3E9D9]/90 md:text-lg">
            Discover the ancient hill shrine dedicated to Lord Sadashiva,
            surrounded by sacred ponds and the beautiful landscapes of
            Dakshina Kannada.
          </p>

          <a
            href="#about"
            className="mt-9 inline-block border border-[#D6AE70] px-8 py-3 text-sm uppercase tracking-widest text-[#D6AE70] transition hover:bg-[#D6AE70] hover:text-[#27151F]"
          >
            Discover the Temple
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10"
      >
        <div className="mb-5 text-center text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          A Sacred Hill Shrine
        </div>

        <h2 className="mb-10 text-center text-4xl md:text-5xl">
          About Narahari Parvatha
        </h2>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div
            className="min-h-[330px] rounded-sm bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url('${photos.temple}')` }}
            role="img"
            aria-label="Sri Narahari Parvatha Sadashiva Temple"
          />

          <div className="space-y-5 text-[16px] leading-8 text-[#55434A]">
            <p>
              Narahari Parvatha Sadashiva Temple is situated on Narahari Hill
              near Melkar in Bantwal Taluk of Dakshina Kannada district. The
              hill stands approximately 1,000 feet above sea level and the
              shrine is dedicated to Lord Sadashiva.
            </p>

            <p>
              The temple is popularly known as the “Kailasa of the Earth”.
              Visitors traditionally climb around 333 steps to reach the
              hilltop shrine. A road route has also been reported for visitors
              who cannot comfortably climb the steps.
            </p>

            <p>
              According to local tradition, Lord Krishna and Arjuna performed
              penance here after the Kurukshetra war. The four sacred ponds
              are associated with the forms of Shanka, Chakra, Gadha and
              Padma. This is a traditional religious account rather than
              independently established historical evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            Discover the Experience
          </p>

          <h2 className="mb-12 text-center text-4xl md:text-5xl">
            What to Experience
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item, index) => (
              <div
                key={item.title}
                className="border border-[#C6A16B]/40 bg-[#351F2B] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D6AE70]"
              >
                <p className="mb-5 text-3xl text-[#D6AE70]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mb-4 text-2xl text-[#D6AE70]">
                  {item.title}
                </h3>

                <p className="leading-7 text-[#F3E9D9]/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-[#A64F3C]">
          Plan Your Visit
        </p>

        <h2 className="mb-12 text-center text-4xl md:text-5xl">
          Visitor Information
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {visitorInfo.map((item) => (
            <div
              key={item.title}
              className="border border-[#C6A16B]/50 bg-[#F8F1E7] p-7 shadow-sm"
            >
              <h3 className="mb-3 text-2xl text-[#8C4A45]">
                {item.title}
              </h3>

              <p className="leading-7 text-[#55434A]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Narahari+Parvatha+Sadashiva+Temple+Bantwal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#8C4A45] bg-[#8C4A45] px-8 py-3 text-sm uppercase tracking-widest text-white transition hover:bg-[#27151F]"
          >
            View on Google Maps
          </a>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-[#27151F] px-6 py-20 text-[#F3E9D9] md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-[#D6AE70]">
            Glimpses of Narahari
          </p>

          <h2 className="mb-12 text-center text-4xl md:text-5xl">
            Photo Gallery
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.src}
                className="group overflow-hidden border border-[#C6A16B]/40"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photograph Sources */}
      <section className="bg-[#F3E9D9] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-6xl text-[#55434A]">
          <h3 className="mb-5 text-lg">
            Photograph sources:
          </h3>

          <div className="space-y-3 text-sm">
            <p>
              Temple exterior:{" "}
              <a
                href="https://www.mangaloreholidays.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#A64F3C]"
              >
                Mangalore Holidays
              </a>
            </p>

            <p>
              Temple courtyard:{" "}
              <a
                href="https://www.yatradham.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#A64F3C]"
              >
                YatraDham
              </a>
            </p>

            <p>
              Hill steps and landscape:{" "}
              <a
                href="https://macrotrekkingteam.weebly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#A64F3C]"
              >
                Macro Trekking Team
              </a>
            </p>

            <p>
              Sacred pond and Parvati shrine:{" "}
              <a
                href="https://bangalorepress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#A64F3C]"
              >
                Bangalore Press
              </a>
            </p>
          </div>

          <p className="mt-5 text-xs leading-6 text-[#55434A]/80">
            These photographs are sourced from the linked websites. Check
            the original publishers' reuse permissions before publishing
            them commercially or redistributing them.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#27151F] px-6 py-10 text-center text-[#F3E9D9]">
        <p className="mb-3 text-2xl tracking-wide text-[#D6AE70]">
          NAMMA DAKSHINA
        </p>

        <p className="text-sm text-[#F3E9D9]/70">
          Discover the heritage, culture and beauty of Dakshina Kannada.
        </p>

        <p className="mt-5 text-xs text-[#F3E9D9]/50">
          © 2026 Namma Dakshina. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
