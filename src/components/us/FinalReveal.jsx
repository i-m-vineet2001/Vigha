// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Image } from "@/components/ui/image";
// import FloatingParticles from "@/components/us/FloatingParticles";
// import { couple, surprise } from "@/data/us";

// export default function FinalReveal() {
//   const [open, setOpen] = useState(false);
//   const afterLines = 0.6 + surprise.lines.length * 0.9;

//   return (
//     <section className="relative overflow-hidden px-5 py-24 sm:py-32">
//       <FloatingParticles count={12} />

//       <div className="relative z-10 mx-auto max-w-3xl text-center">
//         <AnimatePresence mode="wait">
//           {!open ? (
//             <motion.div
//               key="teaser"
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -18 }}
//               transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <p className="font-heading text-3xl text-plum sm:text-4xl">
//                 {surprise.teaser}
//               </p>
//               <button
//                 onClick={() => setOpen(true)}
//                 className="animate-pulse-ring mt-9 rounded-full bg-rosewood px-9 py-4 font-heading text-lg text-cream soft-shadow transition-transform duration-500 hover:-translate-y-1"
//               >
//                 {surprise.button}
//               </button>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="reveal"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.94 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//                 className="soft-shadow mx-auto overflow-hidden rounded-[2.5rem]"
//               >
//                 <Image
//                   src={surprise.image}
//                   alt="Vineet and Megha"
//                   fittingType="fill"
//                   className="aspect-[16/9] w-full"
//                 />
//               </motion.div>

//               {surprise.lines.map((line, i) => (
//                 <motion.p
//                   key={line}
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     delay: 0.6 + i * 0.9,
//                     duration: 0.9,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="mt-9 font-heading text-2xl text-plum sm:text-3xl"
//                 >
//                   {line}
//                 </motion.p>
//               ))}

//               <motion.p
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   delay: afterLines,
//                   duration: 1,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="mt-11 font-heading text-4xl text-rosewood sm:text-5xl"
//               >
//                 {surprise.final}
//               </motion.p>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: afterLines + 0.9, duration: 1 }}
//                 className="mt-8 text-xs uppercase tracking-[0.35em] text-plum/45"
//               >
//                 {couple.him} &amp; {couple.her}
//               </motion.p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingParticles from "@/components/us/FloatingParticles";
import { couple, surprise } from "@/data/us";

export default function FinalReveal() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide through images every 3.5 seconds when the reveal is open
  useEffect(() => {
    if (!open || !surprise.images || surprise.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % surprise.images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [open]);

  const afterLines = 0.6 + surprise.lines.length * 0.9;

  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-32">
      <FloatingParticles count={12} />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="teaser"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-heading text-3xl text-plum sm:text-4xl">
                {surprise.teaser}
              </p>
              <button
                onClick={() => {
                  setOpen(true);
                  setCurrentIndex(0);
                }}
                className="animate-pulse-ring mt-9 rounded-full bg-rosewood px-9 py-4 font-heading text-lg text-cream soft-shadow transition-transform duration-500 hover:-translate-y-1"
              >
                {surprise.button}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Auto-sliding Image Slideshow Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="soft-shadow relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-cream/30"
              >
                <AnimatePresence mode="wait">
                  {surprise.images && surprise.images.length > 0 && (
                    <motion.img
                      key={currentIndex}
                      src={surprise.images[currentIndex]}
                      alt="Vineet and Megha"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  )}
                </AnimatePresence>

                {/* Slideshow Indicator Dots */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 z-10">
                  {surprise.images &&
                    surprise.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentIndex
                            ? "w-6 bg-white shadow"
                            : "w-1.5 bg-white/50"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                </div>
              </motion.div>

              {surprise.lines.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6 + i * 0.9,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-9 font-heading text-2xl text-plum sm:text-3xl"
                >
                  {line}
                </motion.p>
              ))}

              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: afterLines,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-11 font-heading text-4xl text-rosewood sm:text-5xl"
              >
                {surprise.final}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: afterLines + 0.9, duration: 1 }}
                className="mt-8 text-xs uppercase tracking-[0.35em] text-plum/45"
              >
                {couple.him} &amp; {couple.her}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}