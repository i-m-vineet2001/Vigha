// import React from "react";
// import { MapPin } from "lucide-react";
// import { Image } from "@/components/ui/image";
// import Reveal from "@/components/us/Reveal";
// import { specialPlace, couple } from "@/data/us";

// export default function SpecialPlace() {
//   return (
//     <section className="relative px-5 py-20 sm:py-28">
//       <div className="mx-auto max-w-6xl">
//         <Reveal>
//           <div className="glass soft-shadow overflow-hidden rounded-[2.5rem] md:flex">
//             <div className="img-zoom relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:w-3/5">
//               <Image
//                 src={specialPlace.image}
//                 alt={specialPlace.name}
//                 fittingType="fill"
//                 className="h-full w-full"
//               />
//             </div>

//             <div className="flex flex-col justify-center p-8 md:w-2/5 md:p-12">
//               <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-rosewood/80">
//                 <MapPin size={14} /> {specialPlace.tagline}
//               </span>
//               <h2 className="mt-4 font-heading text-3xl text-plum sm:text-4xl">
//                 {specialPlace.name}
//               </h2>
//               <p className="mt-5 text-[15px] leading-relaxed text-plum/70">
//                 {specialPlace.text}
//               </p>
//               <p className="mt-6 font-script text-2xl text-rosewood">
//                 ours, {couple.him} &amp; {couple.her}
//               </p>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/us/Reveal";
import { specialPlace, couple } from "@/data/us";

export default function SpecialPlace() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden px-5 py-20 sm:py-28">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6577B]/8 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="group/place relative overflow-hidden rounded-[2.5rem] border border-[#C6577B]/12 bg-white/45 shadow-[0_30px_90px_-35px_rgba(122,46,68,0.32)] backdrop-blur-2xl md:flex">
            {/* Image Section */}
            <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:w-3/5">
              <Image
                src={specialPlace.image}
                alt={specialPlace.name}
                fittingType="fill"
                className="h-full w-full object-cover transition-transform duration-700 group-hover/place:scale-105"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3f252e]/20 via-transparent to-transparent md:hidden"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center p-8 md:w-2/5 md:p-12">
              <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C6577B]">
                <MapPin size={14} strokeWidth={1.8} /> {specialPlace.tagline}
              </span>

              <h2 className="mt-4 font-heading text-3xl text-[#3f252e] sm:text-4xl">
                {specialPlace.name}
              </h2>

              <p className="mt-5 text-[15px] leading-relaxed text-[#7a5964]/80">
                {specialPlace.text}
              </p>

              <p className="mt-6 font-script text-2xl text-[#7A2E44]">
                ours, {couple.him} &amp; {couple.her}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}