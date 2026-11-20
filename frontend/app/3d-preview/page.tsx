
"use client";

import dynamic from "next/dynamic";

const PalaceScene = dynamic(
  () => import("../components/3d/PalaceScene"),
  { ssr: false }
);

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-[#27151F]">
      <div className="px-6 py-10 text-center text-[#F3E9D9]">
        <p className="mb-3 tracking-[0.3em] text-[#D6AE70]">
          NAMMA DAKSHINA
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          3D Palace Experience
        </h1>

        <p className="mt-4 text-lg text-[#E5D5C4]">
          Explore our first 3D architectural prototype.
        </p>
      </div>

      <PalaceScene />
    </main>
  );
}
