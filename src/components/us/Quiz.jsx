// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { RotateCcw } from "lucide-react";
// import Reveal from "@/components/us/Reveal";
// import { quiz, couple } from "@/data/us";

// export default function Quiz() {
//   const [step, setStep] = useState(0);
//   const [picked, setPicked] = useState(null);
//   const [score, setScore] = useState(0);
//   const done = step >= quiz.length;

//   const choose = (idx) => {
//     if (picked !== null) return;
//     setPicked(idx);
//     if (idx === quiz[step].answer) setScore((s) => s + 1);
//     setTimeout(() => {
//       setPicked(null);
//       setStep((s) => s + 1);
//     }, 950);
//   };

//   const restart = () => {
//     setStep(0);
//     setScore(0);
//     setPicked(null);
//   };

//   const verdict =
//     score === quiz.length
//       ? "A perfect score. Obviously."
//       : score >= quiz.length * 0.7
//         ? "You know us better than anyone."
//         : "Okay… we clearly need more late-night talks.";

//   return (
//     <section id="quiz" className="relative scroll-mt-24 px-5 py-20 sm:py-28">
//       <div className="mx-auto max-w-3xl">
//         <Reveal className="text-center">
//           <p className="text-[11px] uppercase tracking-[0.4em] text-rosewood/80">
//             Relationship Quiz
//           </p>
//           <h2 className="mt-4 font-heading text-4xl text-plum sm:text-5xl">
//             How well do you know us?
//           </h2>
//           <p className="mx-auto mt-4 max-w-lg text-plum/65">
//             {quiz.length} questions. No pressure. Well — a little pressure.
//           </p>
//         </Reveal>

//         <Reveal delay={0.1} className="mt-14">
//           <div className="glass soft-shadow rounded-[2.5rem] p-6 sm:p-10">
//             <AnimatePresence mode="wait">
//               {!done ? (
//                 <motion.div
//                   key={step}
//                   initial={{ opacity: 0, x: 24 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -24 }}
//                   transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-plum/45">
//                     <span>
//                       Question {step + 1} of {quiz.length}
//                     </span>
//                     <span>Score {score}</span>
//                   </div>

//                   <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-blush">
//                     <div
//                       className="h-full rounded-full bg-rosewood transition-all duration-500"
//                       style={{ width: `${((step + 1) / quiz.length) * 100}%` }}
//                     />
//                   </div>

//                   <h3 className="mt-7 font-heading text-2xl text-plum sm:text-3xl">
//                     {quiz[step].q}
//                   </h3>

//                   <div className="mt-6 grid gap-3">
//                     {quiz[step].options.map((opt, i) => {
//                       const isAnswer = i === quiz[step].answer;
//                       const isPicked = picked === i;
//                       let tone = "bg-cream/70 hover:bg-cream text-plum";
//                       if (picked !== null && isAnswer)
//                         tone = "bg-rosewood text-cream";
//                       else if (isPicked) tone = "bg-rosewood/25 text-plum";
//                       return (
//                         <button
//                           key={opt}
//                           onClick={() => choose(i)}
//                           disabled={picked !== null}
//                           className={`rounded-2xl px-5 py-4 text-left text-[15px] font-medium transition ${tone}`}
//                         >
//                           {opt}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="result"
//                   initial={{ opacity: 0, scale: 0.96 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                   className="py-6 text-center"
//                 >
//                   <div className="font-heading text-5xl text-rosewood tabular-nums">
//                     {score}/{quiz.length}
//                   </div>
//                   <h3 className="mx-auto mt-6 max-w-md font-heading text-2xl leading-snug text-plum sm:text-3xl">
//                     Okay baby gurl… you know us pretty well 😌❤️
//                   </h3>
//                   <p className="mt-4 text-plum/65">{verdict}</p>
//                   <p className="mt-2 font-script text-2xl text-rosewood">
//                     — {couple.her} &amp; {couple.him}
//                   </p>
//                   <button
//                     onClick={restart}
//                     className="mt-8 inline-flex items-center gap-2 rounded-full bg-rosewood px-7 py-3 font-heading text-cream soft-shadow transition hover:-translate-y-0.5"
//                   >
//                     <RotateCcw size={16} /> Play again
//                   </button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Check, Heart, RotateCcw, Sparkles } from "lucide-react";

import Reveal from "@/components/us/Reveal";

import { quiz, couple } from "@/data/us";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);

  const done = step >= quiz.length;

  const choose = (idx) => {
    if (picked !== null) return;

    setPicked(idx);

    if (idx === quiz[step].answer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      setPicked(null);
      setStep((s) => s + 1);
    }, 950);
  };

  const restart = () => {
    setStep(0);
    setScore(0);
    setPicked(null);
  };

  const verdict =
    score === quiz.length
      ? "A perfect score. Obviously. ❤️"
      : score >= quiz.length * 0.7
        ? "You know us better than anyone. 🥹"
        : "Okay… we clearly need more late-night talks. 😌";

  return (
    <section
      id="quiz"
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
        {/* Base */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#fff8f6]
            via-[#f8e8ed]
            to-[#f4dfe6]
          "
        />

        {/* Left rose glow */}
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
            -left-40
            top-10
            h-[430px]
            w-[430px]
            rounded-full
            bg-rosewood/10
            blur-[110px]
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
            -right-40
            top-[40%]
            h-[460px]
            w-[460px]
            rounded-full
            bg-plum/10
            blur-[115px]
          "
        />

        {/* Center glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blush/30
            blur-[120px]
          "
        />

        {/* =================================================
            WAVY GLASS LAYERS
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
            top-[12%]
            h-[400px]
            w-[125%]
            -translate-x-1/2
            rounded-[48%]
            border
            border-white/40
            bg-white/15
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
            h-[390px]
            w-[130%]
            -translate-x-1/2
            rounded-[50%]
            border
            border-white/30
            bg-white/10
          "
        />

        {/* =================================================
            FLOATING HEARTS
        ================================================== */}

        <motion.span
          animate={{
            y: [20, -35, 20],
            x: [0, 12, 0],
            rotate: [-8, 8, -8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[8%]
            top-[22%]
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
            opacity: [0.08, 0.25, 0.08],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[9%]
            top-[28%]
            text-2xl
            text-plum/25
          "
        >
          ♡
        </motion.span>

        <motion.span
          animate={{
            y: [15, -30, 15],
            opacity: [0.08, 0.22, 0.08],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[18%]
            left-[14%]
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
            bottom-[14%]
            right-[16%]
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

      <div className="relative mx-auto max-w-3xl">
        {/* Heading */}
        <Reveal className="text-center">
          <div
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
            Relationship Quiz
          </div>

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
            How well do you know us?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-lg
              text-plum/65
            "
          >
            {quiz.length} questions. No pressure. Well — a little pressure.
          </p>
        </Reveal>

        {/* =================================================
            QUIZ CARD
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
            {/* Top glass shine */}
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

            {/* Ambient glow */}
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

            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={step}
                  initial={{
                    opacity: 0,
                    x: 24,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -24,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-10"
                >
                  {/* =================================================
                      QUESTION HEADER
                  ================================================== */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-plum/45
                    "
                  >
                    <span>
                      Question {step + 1} of {quiz.length}
                    </span>

                    <span>Score {score}</span>
                  </div>

                  {/* Progress */}
                  <div
                    className="
                      mt-4
                      h-2
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
                      animate={{
                        width: `${((step + 1) / quiz.length) * 100}%`,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-rosewood
                        via-[#b94e70]
                        to-plum
                        shadow-[0_2px_10px_rgba(122,46,68,0.2)]
                      "
                    />
                  </div>

                  {/* =================================================
                      QUESTION
                  ================================================== */}

                  <div className="mt-8">
                    <div
                      className="
                        mb-4
                        flex
                        items-center
                        gap-2
                        text-rosewood/50
                      "
                    >
                      <Sparkles size={15} />

                      <span className="text-xs tracking-wide">Be honest…</span>
                    </div>

                    <h3
                      className="
                        font-heading
                        text-2xl
                        leading-snug
                        text-plum
                        sm:text-3xl
                      "
                    >
                      {quiz[step].q}
                    </h3>
                  </div>

                  {/* =================================================
                      OPTIONS
                  ================================================== */}

                  <div className="mt-7 grid gap-3">
                    {quiz[step].options.map((opt, i) => {
                      const isAnswer = i === quiz[step].answer;
                      const isPicked = picked === i;

                      const showCorrect = picked !== null && isAnswer;

                      const showWrong =
                        picked !== null && isPicked && !isAnswer;

                      return (
                        <motion.button
                          key={opt}
                          onClick={() => choose(i)}
                          disabled={picked !== null}
                          whileHover={
                            picked === null
                              ? {
                                  x: 4,
                                  scale: 1.01,
                                }
                              : {}
                          }
                          whileTap={
                            picked === null
                              ? {
                                  scale: 0.98,
                                }
                              : {}
                          }
                          className={`
                            group
                            relative
                            flex
                            items-center
                            gap-4
                            overflow-hidden
                            rounded-2xl
                            border
                            px-5
                            py-4
                            text-left
                            text-[15px]
                            font-medium
                            transition-all
                            duration-300

                            ${
                              showCorrect
                                ? `
                                  border-rosewood/30
                                  bg-rosewood
                                  text-cream
                                  shadow-[0_10px_30px_rgba(122,46,68,0.2)]
                                `
                                : showWrong
                                  ? `
                                    border-plum/20
                                    bg-plum/10
                                    text-plum/60
                                  `
                                  : `
                                    border-white/40
                                    bg-white/30
                                    text-plum
                                    hover:border-rosewood/20
                                    hover:bg-white/50
                                    hover:shadow-[0_10px_30px_rgba(122,46,68,0.08)]
                                  `
                            }
                          `}
                        >
                          {/* Hover glow */}
                          {!picked && (
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
                          )}

                          {/* Option circle */}
                          <span
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
                              text-xs
                              transition-all

                              ${
                                showCorrect
                                  ? "border-white/40 bg-white/15 text-cream"
                                  : showWrong
                                    ? "border-plum/20 text-plum/40"
                                    : "border-rosewood/25 bg-white/25 text-rosewood/60 group-hover:border-rosewood/50"
                              }
                            `}
                          >
                            {showCorrect ? (
                              <Check size={14} />
                            ) : (
                              String.fromCharCode(65 + i)
                            )}
                          </span>

                          {/* Text */}
                          <span className="relative z-10">{opt}</span>

                          {/* Correct heart */}
                          {showCorrect && (
                            <motion.span
                              initial={{
                                opacity: 0,
                                scale: 0,
                              }}
                              animate={{
                                opacity: 1,
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 0.35,
                              }}
                              className="relative z-10 ml-auto"
                            >
                              ❤️
                            </motion.span>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                /* =================================================
                    RESULT
                ================================================== */

                <motion.div
                  key="result"
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    z-10
                    py-8
                    text-center
                  "
                >
                  {/* Heart */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-rosewood/10
                      text-rosewood
                    "
                  >
                    <Heart size={30} fill="currentColor" strokeWidth={1.5} />
                  </motion.div>

                  {/* Score */}
                  <div
                    className="
                      mt-6
                      font-heading
                      text-6xl
                      text-rosewood
                      tabular-nums
                    "
                  >
                    {score}/{quiz.length}
                  </div>

                  <p
                    className="
                      mt-2
                      text-xs
                      uppercase
                      tracking-[0.35em]
                      text-plum/40
                    "
                  >
                    your score
                  </p>

                  <h3
                    className="
                      mx-auto
                      mt-6
                      max-w-md
                      font-heading
                      text-2xl
                      leading-snug
                      text-plum
                      sm:text-3xl
                    "
                  >
                    Okay baby gurl… you know us pretty well 😌❤️
                  </h3>

                  <p className="mt-4 text-plum/65">{verdict}</p>

                  <p className="mt-3 font-script text-2xl text-rosewood">
                    — {couple.her} &amp; {couple.him}
                  </p>

                  {/* Restart */}
                  <motion.button
                    onClick={restart}
                    whileHover={{
                      y: -2,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gradient-to-r
                      from-rosewood
                      to-plum
                      px-7
                      py-3
                      font-heading
                      text-cream
                      shadow-[0_10px_30px_rgba(122,46,68,0.2)]
                      transition-all
                    "
                  >
                    <RotateCcw size={16} />
                    Play again
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
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
            bg-white/30
            blur-sm
          "
        />
      </div>
    </section>
  );
}