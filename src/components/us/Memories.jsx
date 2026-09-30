// import React, { useEffect, useState } from "react";
// import { Film, Plus } from "lucide-react";
// import { Image } from "@/components/ui/image";
// import Reveal from "@/components/us/Reveal";
// import MemoryCard from "@/components/us/MemoryCard";
// import Lightbox from "@/components/us/Lightbox";
// import AddMemoryModal from "@/components/AddMemoryModal";
// import { photos } from "@/data/us";

// export default function Memories() {
//   const [uploaded, setUploaded] = useState(() => {
//     try {
//       const saved = localStorage.getItem("local_memories");
//       return saved ? JSON.parse(saved) : [];
//     } catch {
//       return [];
//     }
//   });
//   const [adding, setAdding] = useState(false);
//   const [viewIndex, setViewIndex] = useState(null);

//   const handleAddMemory = (newMemory) => {
//     const memoryWithId = {
//       id: `custom-${Date.now()}`,
//       image: newMemory.image,
//       note: newMemory.note,
//       rotation: Math.floor(Math.random() * 10) - 5,
//     };
//     const updated = [memoryWithId, ...uploaded];
//     setUploaded(updated);
//     try {
//       localStorage.setItem("local_memories", JSON.stringify(updated));
//     } catch (e) {
//       console.error("Failed to save memory to localStorage", e);
//     }
//   };

//   const polaroids = [
//     ...uploaded.map((m) => ({
//       id: m.id,
//       image: m.image,
//       note: m.note,
//       rotation: m.rotation || 0,
//     })),
//     ...photos
//       .filter((p) => p.format === "polaroid")
//       .map((p, i) => ({ id: `p${i}`, image: p.src, caption: p.caption })),
//   ];
//   const cinematic = photos.filter((p) => p.format === "cinematic");
//   const smalls = photos.filter((p) => p.format === "small");
//   const viewable = [
//     ...cinematic,
//     ...smalls,
//     ...uploaded.map((m) => ({ image: m.image, caption: m.note })),
//   ];

//   return (
//     <section
//       id="memories"
//       className="relative scroll-mt-24 px-5 py-20 sm:py-28"
//     >
//       <div className="mx-auto max-w-6xl">
//         <Reveal className="text-center">
//           <p className="text-[11px] uppercase tracking-[0.4em] text-rosewood/80">
//             Our Little Memories
//           </p>
//           <h2 className="mt-4 font-heading text-4xl text-plum sm:text-5xl">
//             Photographs we keep folded
//           </h2>
//           <p className="mx-auto mt-4 max-w-xl text-plum/65">
//             Tap any photo and it turns over — the words are on the other side.
//           </p>
//         </Reveal>

//         <Reveal delay={0.1} className="mt-14">
//           <div className="no-scrollbar -mx-5 flex gap-6 overflow-x-auto px-5 pb-6 sm:mx-0 sm:px-0">
//             {polaroids.map((p, i) => (
//               <MemoryCard
//                 key={p.id}
//                 item={p}
//                 tilt={p.rotation ?? [-4, 3, -2, 5, -3, 2][i % 6]}
//               />
//             ))}
//             <button
//               onClick={() => setAdding(true)}
//               className="flex aspect-[4/5] w-[62vw] max-w-[238px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-rosewood/35 bg-cream/40 text-plum/60 transition hover:border-rosewood hover:text-plum sm:w-[238px]"
//             >
//               <Plus size={26} />
//               <span className="text-sm font-medium">Add a photo</span>
//             </button>
//           </div>
//         </Reveal>

//         <div className="mt-10 grid gap-6 md:grid-cols-2">
//           {cinematic.map((p) => (
//             <Reveal key={p.caption}>
//               <button
//                 onClick={() => setViewIndex(viewable.indexOf(p))}
//                 className="img-zoom soft-shadow group relative aspect-[16/10] w-full overflow-hidden rounded-[2rem]"
//               >
//                 <Image
//                   src={p.src}
//                   alt={p.caption}
//                   fittingType="fit"
//                   className="h-full w-full"
//                 />
//                 <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6 text-left font-heading text-lg italic text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//                   {p.caption}
//                 </span>
//               </button>
//             </Reveal>
//           ))}
//         </div>

//         <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {smalls.map((p) => (
//             <Reveal key={p.caption}>
//               <button
//                 onClick={() => setViewIndex(viewable.indexOf(p))}
//                 className="img-zoom glass soft-shadow lift w-full overflow-hidden rounded-3xl text-left"
//               >
//                 <div className="aspect-[4/3] w-full overflow-hidden">
//                   <Image
//                     src={p.src}
//                     alt={p.caption}
//                     fittingType="fit"
//                     className="h-full w-full"
//                   />
//                 </div>
//                 <p className="px-5 py-4 text-[15px] leading-relaxed text-plum/75">
//                   {p.caption}
//                 </p>
//               </button>
//             </Reveal>
//           ))}

//           <Reveal>
//             <div className="glass flex h-full flex-col items-center justify-center gap-3 rounded-3xl px-6 py-10 text-center text-plum/60">
//               <Film size={26} />
//               <p className="text-sm font-medium text-plum/75">
//                 Videos will live here too
//               </p>
//               <p className="text-xs">
//                 Send me your clips and I'll add them right next to the photos.
//               </p>
//             </div>
//           </Reveal>
//         </div>
//       </div>

//       <Lightbox
//         items={viewable}
//         index={viewIndex}
//         onClose={() => setViewIndex(null)}
//         onIndex={setViewIndex}
//       />
//       <AddMemoryModal
//         open={adding}
//         onClose={() => setAdding(false)}
//         onAdded={handleAddMemory}
//       />
//     </section>
//   );
// }











import React, { useState } from "react";

import { Film, Plus } from "lucide-react";

import { Image } from "@/components/ui/image";

import Reveal from "@/components/us/Reveal";

import MemoryCard from "@/components/us/MemoryCard";

import Lightbox from "@/components/us/Lightbox";

import AddMemoryModal from "@/components/AddMemoryModal";

import { photos } from "@/data/us";

export default function Memories() {
  const [uploaded, setUploaded] = useState(() => {
    try {
      const saved = localStorage.getItem("local_memories");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [adding, setAdding] = useState(false);
  const [viewIndex, setViewIndex] = useState(null);

  const handleAddMemory = (newMemory) => {
    const memoryWithId = {
      id: `custom-${Date.now()}`,
      image: newMemory.image,
      note: newMemory.note,
      rotation: Math.floor(Math.random() * 10) - 5,
    };

    const updated = [memoryWithId, ...uploaded];

    setUploaded(updated);

    try {
      localStorage.setItem("local_memories", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save memory to localStorage", e);
    }
  };

  const polaroids = [
    ...uploaded.map((m) => ({
      id: m.id,
      image: m.image,
      note: m.note,
      rotation: m.rotation || 0,
    })),

    ...photos
      .filter((p) => p.format === "polaroid")
      .map((p, i) => ({
        id: `p${i}`,
        image: p.src,
        caption: p.caption,
      })),
  ];

  const cinematic = photos.filter((p) => p.format === "cinematic");

  const smalls = photos.filter((p) => p.format === "small");

  const viewable = [
    ...cinematic,
    ...smalls,
    ...uploaded.map((m) => ({
      image: m.image,
      caption: m.note,
    })),
  ];

  return (
    <section
      id="memories"
      className="relative isolate overflow-hidden scroll-mt-24 px-5 py-20 sm:py-28"
    >
      {/* =========================================================
          ROMANTIC GLASS + WAVY BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Left glow */}
        <div
          className="
            absolute -left-32 top-20
            h-80 w-80
            rounded-full
            bg-rosewood/10
            blur-3xl
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute -right-32 top-[35%]
            h-96 w-96
            rounded-full
            bg-plum/10
            blur-3xl
          "
        />

        {/* Bottom romantic glow */}
        <div
          className="
            absolute bottom-0 left-1/2
            h-72 w-[80%]
            -translate-x-1/2
            rounded-full
            bg-blush/30
            blur-3xl
          "
        />

        {/* First organic glass wave */}
        <div
          className="
            absolute left-1/2 top-[25%]
            h-[420px] w-[115%]
            -translate-x-1/2
            rotate-[-3deg]
            rounded-[45%]
            border border-white/30
            bg-white/10
            opacity-70
            backdrop-blur-[2px]
          "
        />

        {/* Second organic wave */}
        <div
          className="
            absolute left-1/2 top-[42%]
            h-[360px] w-[120%]
            -translate-x-1/2
            rotate-[4deg]
            rounded-[50%]
            border border-white/20
            bg-cream/10
            opacity-60
          "
        />

        {/* Third subtle wave */}
        <div
          className="
            absolute left-1/2 top-[62%]
            h-[300px] w-[110%]
            -translate-x-1/2
            rotate-[-2deg]
            rounded-[50%]
            border border-white/15
            bg-white/5
            opacity-50
          "
        />
      </div>

      {/* =========================================================
          MAIN GLASS CONTAINER
      ========================================================= */}

      <div
        className="
          mx-auto max-w-6xl
          rounded-[3rem]
          border border-white/30
          bg-white/10
          px-4 py-8
          shadow-[0_30px_80px_rgba(122,46,68,0.08)]
          backdrop-blur-md
          sm:px-8 sm:py-12
        "
      >
        {/* =======================================================
            SECTION HEADING
        ======================================================= */}

        <Reveal className="text-center">
          <p
            className="
              inline-flex
              rounded-full
              border border-rosewood/15
              bg-white/30
              px-4 py-2
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-rosewood/80
              shadow-sm
              backdrop-blur-md
            "
          >
            Our Little Memories
          </p>

          <h2
            className="
              mt-5
              font-heading
              text-4xl
              leading-tight
              text-plum
              sm:text-5xl
            "
          >
            Photographs we keep folded
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-plum/65">
            Tap any photo and it turns over — the words are on the other side.
          </p>
        </Reveal>

        {/* =======================================================
            POLAROID MEMORIES
        ======================================================= */}

        <Reveal delay={0.1} className="mt-14">
          <div
            className="
              no-scrollbar
              -mx-5
              flex
              gap-6
              overflow-x-auto
              px-5
              pb-6
              sm:mx-0
              sm:px-0
            "
          >
            {polaroids.map((p, i) => (
              <MemoryCard
                key={p.id}
                item={p}
                tilt={p.rotation ?? [-4, 3, -2, 5, -3, 2][i % 6]}
              />
            ))}

            {/* Add photo card */}
            <button
              onClick={() => setAdding(true)}
              className="
                flex
                aspect-[4/5]
                w-[62vw]
                max-w-[238px]
                shrink-0
                flex-col
                items-center
                justify-center
                gap-3
                rounded-2xl
                border-2
                border-dashed
                border-rosewood/35
                bg-white/20
                text-plum/60
                shadow-[0_15px_45px_rgba(122,46,68,0.08)]
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-rosewood
                hover:bg-white/30
                hover:text-plum
                sm:w-[238px]
              "
            >
              <Plus size={26} />

              <span className="text-sm font-medium">
                Add a photo
              </span>
            </button>
          </div>
        </Reveal>

        {/* =======================================================
            CINEMATIC PHOTOS
        ======================================================= */}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cinematic.map((p) => (
            <Reveal key={p.caption}>
              <button
                onClick={() => setViewIndex(viewable.indexOf(p))}
                className="
                  img-zoom
                  group
                  relative
                  aspect-[16/10]
                  w-full
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/30
                  bg-white/10
                  shadow-[0_20px_60px_rgba(122,46,68,0.12)]
                  ring-1
                  ring-rosewood/5
                  transition-all
                  duration-500
                  hover:shadow-[0_25px_70px_rgba(122,46,68,0.18)]
                "
              >
                <Image
                  src={p.src}
                  alt={p.caption}
                  fittingType="fit"
                  className="h-full w-full"
                />

                {/* Glass caption */}
                <span
                  className="
                    absolute
                    inset-x-4
                    bottom-4
                    rounded-2xl
                    border
                    border-white/20
                    bg-ink/25
                    px-5
                    py-4
                    text-left
                    font-heading
                    text-lg
                    italic
                    text-cream
                    opacity-0
                    shadow-lg
                    backdrop-blur-md
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  {p.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* =======================================================
            SMALL MEMORY CARDS
        ======================================================= */}

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {smalls.map((p) => (
            <Reveal key={p.caption}>
              <button
                onClick={() => setViewIndex(viewable.indexOf(p))}
                className="
                  img-zoom
                  lift
                  w-full
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-white/35
                  bg-white/15
                  text-left
                  shadow-[0_15px_45px_rgba(122,46,68,0.10)]
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_55px_rgba(122,46,68,0.15)]
                "
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fittingType="fit"
                    className="h-full w-full"
                  />
                </div>

                <p
                  className="
                    px-5
                    py-4
                    text-[15px]
                    leading-relaxed
                    text-plum/75
                  "
                >
                  {p.caption}
                </p>
              </button>
            </Reveal>
          ))}

          {/* =====================================================
              VIDEO PLACEHOLDER
          ===================================================== */}

          <Reveal>
            <div
              className="
                flex
                h-full
                min-h-[220px]
                flex-col
                items-center
                justify-center
                gap-3
                rounded-[1.75rem]
                border
                border-white/30
                bg-white/10
                px-6
                py-10
                text-center
                text-plum/60
                shadow-[0_15px_45px_rgba(122,46,68,0.08)]
                backdrop-blur-md
              "
            >
              <Film size={26} />

              <p className="text-sm font-medium text-plum/75">
                Videos will live here too
              </p>

              <p className="text-xs">
                Send me your clips and I'll add them right next to the
                photos.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}

      <Lightbox
        items={viewable}
        index={viewIndex}
        onClose={() => setViewIndex(null)}
        onIndex={setViewIndex}
      />

      {/* =========================================================
          ADD MEMORY MODAL
      ========================================================= */}

      <AddMemoryModal
        open={adding}
        onClose={() => setAdding(false)}
        onAdded={handleAddMemory}
      />
    </section>
  );
}