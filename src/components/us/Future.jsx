// import React, { useState } from "react";
// import { Check, Sparkles } from "lucide-react";
// import Reveal from "@/components/us/Reveal";
// import { bucketList } from "@/data/us";

// export default function Future() {
//   const [done, setDone] = useState([]);
//   const pct = bucketList.length
//     ? Math.round((done.length / bucketList.length) * 100)
//     : 0;

//   const toggle = (i) =>
//     setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]));

//   return (
//     <section id="future" className="relative scroll-mt-24 px-5 py-20 sm:py-28">
//       <div className="mx-auto max-w-4xl">
//         <Reveal className="text-center">
//           <p className="text-[11px] uppercase tracking-[0.4em] text-rosewood/80">
//             Future With You
//           </p>
//           <h2 className="mt-4 font-heading text-4xl text-plum sm:text-5xl">
//             Things I want to do with you
//           </h2>
//           <p className="mx-auto mt-4 max-w-lg text-plum/65">
//             Not a checklist for the sake of it — just the life I keep picturing.
//           </p>
//         </Reveal>

//         <Reveal delay={0.1} className="mt-14">
//           <div className="glass soft-shadow rounded-[2.5rem] p-6 sm:p-10">
//             <div className="mb-7">
//               <div className="flex items-end justify-between">
//                 <span className="inline-flex items-center gap-2 text-sm font-medium text-plum">
//                   <Sparkles size={16} className="text-rosewood" />
//                   {done.length} of {bucketList.length} dreams
//                 </span>
//                 <span className="font-heading text-2xl text-rosewood tabular-nums">
//                   {pct}%
//                 </span>
//               </div>
//               <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-blush">
//                 <div
//                   className="h-full rounded-full bg-gradient-to-r from-rosewood to-plum transition-all duration-700 ease-out"
//                   style={{ width: `${pct}%` }}
//                 />
//               </div>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">
//               {bucketList.map((item, i) => {
//                 const isDone = done.includes(i);
//                 return (
//                   <button
//                     key={item}
//                     onClick={() => toggle(i)}
//                     aria-pressed={isDone}
//                     className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition ${
//                       isDone ? "bg-blush/70" : "bg-cream/70 hover:bg-cream"
//                     }`}
//                   >
//                     <span
//                       className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
//                         isDone
//                           ? "border-rosewood bg-rosewood text-cream"
//                           : "border-rosewood/40 text-transparent"
//                       }`}
//                     >
//                       <Check size={14} />
//                     </span>
//                     <span
//                       className={`text-[15px] text-plum ${isDone ? "bucket-done" : ""}`}
//                     >
//                       {item}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";

import { Check, Sparkles, Heart } from "lucide-react";

import { motion } from "framer-motion";

import Reveal from "@/components/us/Reveal";

import { bucketList } from "@/data/us";

export default function Future() {
  const [done, setDone] = useState([]);

  const pct = bucketList.length
    ? Math.round((done.length / bucketList.length) * 100)
    : 0;

  const toggle = (i) =>
    setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]));

  return (
    <section
      id="future"
      className="
        relative
        isolate
        scroll-mt-24
        overflow-hidden
        px-5
        py-20
        sm:py-28
      "
    >
      {/* =====================================================
          ROMANTIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Main soft gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#fff8f6]
            via-[#f9e9ed]
            to-[#f7e1e8]
          "
        />

        {/* Left pink glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-rosewood/10
            blur-[100px]
          "
        />

        {/* Right plum glow */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-plum/10
            blur-[110px]
          "
        />

        {/* Bottom blush glow */}
        <div
          className="
            absolute
            bottom-[-120px]
            left-1/2
            h-[400px]
            w-[80%]
            -translate-x-1/2
            rounded-full
            bg-blush/35
            blur-[100px]
          "
        />

        {/* =================================================
            ORGANIC WAVES
        ================================================== */}

        <motion.div
          animate={{
            x: ["-3%", "3%", "-3%"],
            rotate: [-2, 1, -2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[18%]
            h-[420px]
            w-[125%]
            -translate-x-1/2
            rounded-[48%]
            border
            border-white/40
            bg-white/20
            backdrop-blur-[2px]
          "
        />

        <motion.div
          animate={{
            x: ["3%", "-3%", "3%"],
            rotate: [2, -1, 2],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[48%]
            h-[360px]
            w-[130%]
            -translate-x-1/2
            rounded-[50%]
            border
            border-white/30
            bg-white/10
          "
        />

        {/* Floating hearts */}
        <motion.span
          animate={{
            y: [20, -35, 20],
            x: [0, 12, 0],
            rotate: [-8, 8, -8],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[9%]
            top-[20%]
            text-3xl
            text-rosewood/30
          "
        >
          ♡
        </motion.span>

        <motion.span
          animate={{
            y: [15, -40, 15],
            x: [0, -12, 0],
            rotate: [8, -8, 8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[10%]
            top-[30%]
            text-2xl
            text-plum/25
          "
        >
          ♡
        </motion.span>

        <motion.span
          animate={{
            y: [15, -30, 15],
            opacity: [0.08, 0.25, 0.08],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[20%]
            left-[15%]
            text-xl
            text-rosewood/25
          "
        >
          ✦
        </motion.span>

        <motion.span
          animate={{
            y: [10, -35, 10],
            opacity: [0.08, 0.25, 0.08],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[15%]
            right-[17%]
            text-2xl
            text-rosewood/25
          "
        >
          ♡
        </motion.span>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-4xl">
        {/* Heading */}
        <Reveal className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-rosewood/15
                bg-white/35
                px-4
                py-2
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-rosewood/80
                shadow-sm
                backdrop-blur-md
              "
            >
              <Heart size={11} fill="currentColor" />
              Future With You
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
              Things I want to do with you
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-lg
                text-plum/65
              "
            >
              Not a checklist for the sake of it — just the life I keep
              picturing.
            </p>
          </motion.div>
        </Reveal>

        {/* =================================================
            MAIN GLASS CARD
        ================================================== */}

        <Reveal delay={0.1} className="mt-14">
          <div
            className="
              relative
              overflow-hidden
              rounded-[3rem]
              border
              border-white/45
              bg-white/30
              p-6
              shadow-[0_30px_90px_rgba(122,46,68,0.12)]
              backdrop-blur-xl
              sm:p-10
            "
          >
            {/* Card shine */}
            <div
              className="
                pointer-events-none
                absolute
                left-[10%]
                right-[10%]
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/80
                to-transparent
              "
            />

            {/* Decorative glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-rosewood/10
                blur-3xl
              "
            />

            {/* =================================================
                PROGRESS
            ================================================== */}

            <div className="relative z-10 mb-8">
              <div className="flex items-end justify-between">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-plum
                  "
                >
                  <Sparkles size={16} className="text-rosewood" />
                  {done.length} of {bucketList.length} dreams
                </span>

                <motion.span
                  key={pct}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="
                    font-heading
                    text-2xl
                    text-rosewood
                    tabular-nums
                  "
                >
                  {pct}%
                </motion.span>
              </div>

              {/* Progress bar */}
              <div
                className="
                  relative
                  mt-4
                  h-3
                  w-full
                  overflow-hidden
                  rounded-full
                  border
                  border-white/40
                  bg-rosewood/10
                "
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-rosewood
                    via-[#b94e70]
                    to-plum
                    shadow-[0_2px_12px_rgba(122,46,68,0.25)]
                  "
                >
                  {/* Progress shine */}
                  <span
                    className="
                      absolute
                      inset-x-0
                      top-0
                      h-px
                      bg-white/50
                    "
                  />
                </motion.div>
              </div>
            </div>

            {/* =================================================
                DREAM ITEMS
            ================================================== */}

            <div className="relative z-10 grid gap-3 sm:grid-cols-2">
              {bucketList.map((item, i) => {
                const isDone = done.includes(i);

                return (
                  <motion.button
                    key={item}
                    onClick={() => toggle(i)}
                    aria-pressed={isDone}
                    whileHover={{
                      y: -2,
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      gap-3
                      overflow-hidden
                      rounded-2xl
                      border
                      px-4
                      py-4
                      text-left
                      transition-all
                      duration-300

                      ${
                        isDone
                          ? `
                            border-rosewood/20
                            bg-rosewood/10
                            shadow-[0_8px_25px_rgba(122,46,68,0.08)]
                          `
                          : `
                            border-white/40
                            bg-white/30
                            hover:border-rosewood/20
                            hover:bg-white/50
                            hover:shadow-[0_10px_30px_rgba(122,46,68,0.08)]
                          `
                      }
                    `}
                  >
                    {/* Hover glow */}
                    <span
                      className="
                        pointer-events-none
                        absolute
                        -inset-10
                        rounded-full
                        bg-rosewood/5
                        opacity-0
                        blur-xl
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    {/* Checkbox */}
                    <motion.span
                      animate={
                        isDone
                          ? {
                              scale: [1, 1.15, 1],
                            }
                          : {
                              scale: 1,
                            }
                      }
                      transition={{
                        duration: 0.3,
                      }}
                      className={`
                        relative
                        z-10
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300

                        ${
                          isDone
                            ? "border-rosewood bg-rosewood text-cream shadow-[0_4px_12px_rgba(122,46,68,0.2)]"
                            : "border-rosewood/35 bg-white/30 text-transparent group-hover:border-rosewood/60"
                        }
                      `}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </motion.span>

                    {/* Dream text */}
                    <span
                      className={`
                        relative
                        z-10
                        text-[15px]
                        leading-relaxed
                        text-plum
                        transition-all
                        duration-300

                        ${isDone ? "bucket-done text-plum/55" : ""}
                      `}
                    >
                      {item}
                    </span>

                    {/* Tiny heart on completion */}
                    {isDone && (
                      <motion.span
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        className="
                          relative
                          z-10
                          ml-auto
                          text-sm
                          text-rosewood/60
                        "
                      >
                        ♥
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* =================================================
                BOTTOM MESSAGE
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="
                relative
                z-10
                mt-8
                text-center
              "
            >
              <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-rosewood/25 to-transparent" />

              <p className="font-heading text-lg italic text-plum/65">
                One dream at a time. ❤️
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <motion.div
          animate={{
            x: ["-4%", "4%", "-4%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-24
            left-[-5%]
            h-40
            w-[110%]
            rounded-[50%]
            bg-white/25
            blur-sm
          "
        />
      </div>
    </section>
  );
}