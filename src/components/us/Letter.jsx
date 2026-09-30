
import React, { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { couple, letter } from "@/data/us";

// One line that fades in as its slice of the scroll progresses.
function Line({ text, progress, start, end, className }) {
  const reduce = useReducedMotion();

  const opacity = useTransform(progress, [start, end], [0.16, 1]);
  const y = useTransform(progress, [start, end], [20, 0]);

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  return (
    <motion.p style={{ opacity, y }} className={className}>
      {text}
    </motion.p>
  );
}

export default function Letter() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.6"],
  });

  const lines = letter.body;
  const n = lines.length;

  return (
    <section
      id="letter"
      ref={ref}
      className="
        relative
        isolate
        scroll-mt-24
        overflow-hidden
        bg-[#5a1f34]
        px-5
        py-24
        sm:py-32
      "
    >
      {/* =====================================================
          ROMANTIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Base romantic gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#401526]
            via-[#6f2943]
            to-[#4b182d]
          "
        />

        {/* Soft top-left pink glow */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#c6577b]/25
            blur-[100px]
          "
        />

        {/* Soft bottom-right glow */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            -right-32
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#d97896]/20
            blur-[110px]
          "
        />

        {/* Center glow behind letter */}
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
            bg-[#c6577b]/10
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
            top-[18%]
            h-[430px]
            w-[125%]
            -translate-x-1/2
            rounded-[48%]
            border
            border-white/[0.07]
            bg-white/[0.025]
            backdrop-blur-[2px]
          "
        />

        <motion.div
          animate={{
            x: ["3%", "-3%", "3%"],
            rotate: [2, -1, 2],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[42%]
            h-[500px]
            w-[130%]
            -translate-x-1/2
            rounded-[50%]
            border
            border-white/[0.06]
            bg-[#e58ba4]/[0.025]
          "
        />

        <motion.div
          animate={{
            x: ["-2%", "2%", "-2%"],
            rotate: [-1, 2, -1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[68%]
            h-[420px]
            w-[120%]
            -translate-x-1/2
            rounded-[50%]
            border
            border-white/[0.05]
            bg-white/[0.02]
          "
        />

        {/* =================================================
            SOFT HEARTS
        ================================================== */}

        <motion.span
          animate={{
            y: [20, -35, 20],
            x: [0, 12, 0],
            opacity: [0.12, 0.25, 0.12],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[10%]
            top-[18%]
            text-3xl
            text-[#f2a4b9]
          "
        >
          ♡
        </motion.span>

        <motion.span
          animate={{
            y: [15, -40, 15],
            x: [0, -15, 0],
            opacity: [0.08, 0.22, 0.08],
            rotate: [8, -8, 8],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[12%]
            top-[32%]
            text-2xl
            text-[#f2a4b9]
          "
        >
          ♡
        </motion.span>

        <motion.span
          animate={{
            y: [20, -30, 20],
            opacity: [0.08, 0.2, 0.08],
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
            left-[16%]
            text-xl
            text-[#e995ad]
          "
        >
          ✦
        </motion.span>

        <motion.span
          animate={{
            y: [10, -35, 10],
            opacity: [0.08, 0.22, 0.08],
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
            right-[18%]
            text-2xl
            text-[#f2a4b9]
          "
        >
          ♡
        </motion.span>

        {/* Tiny ambient dots */}
        <div className="absolute left-[25%] top-[30%] h-1.5 w-1.5 rounded-full bg-blush/40 blur-[1px]" />
        <div className="absolute right-[25%] top-[55%] h-1 w-1 rounded-full bg-blush/40 blur-[1px]" />
        <div className="absolute bottom-[25%] left-[38%] h-1.5 w-1.5 rounded-full bg-blush/30 blur-[1px]" />
      </div>

      {/* =====================================================
          LETTER CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-3xl">
        {/* Soft glass glow behind content */}
        <div
          className="
            pointer-events-none
            absolute
            -inset-8
            -z-10
            rounded-[4rem]
            bg-[#c6577b]/10
            blur-3xl
          "
        />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="
              mb-5
              h-px
              w-16
              bg-gradient-to-r
              from-transparent
              via-blush/60
              to-transparent
            "
          />

          <h2
            className="
              font-heading
              text-3xl
              leading-snug
              text-cream
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]
              sm:text-4xl
            "
          >
            {letter.heading}
          </h2>
        </motion.div>

        {/* =================================================
            LETTER BODY
        ================================================== */}

        <div
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[2.5rem]
            border
            border-white/10
            bg-white/[0.035]
            px-6
            py-8
            shadow-[0_30px_90px_rgba(20,5,12,0.18)]
            backdrop-blur-sm
            sm:px-10
            sm:py-10
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
              via-white/25
              to-transparent
            "
          />

          {/* Decorative heart */}
          <div
            className="
              pointer-events-none
              absolute
              right-6
              top-5
              text-xl
              text-blush/20
            "
          >
            ♡
          </div>

          <div className="relative z-10 space-y-4">
            {lines.map((text, i) => {
              const start = (i / n) * 0.85;
              const end = Math.min(1, start + 1.6 / n);

              const isFirst = i === 0;
              const isLast = i === n - 1;
              const isEmpty = text.trim() === "";

              if (isEmpty) {
                return <div key={`space-${i}`} className="h-2" />;
              }

              return (
                <Line
                  key={`${text}-${i}`}
                  text={text}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                  className={
                    isFirst
                      ? "font-heading text-2xl leading-relaxed text-cream"
                      : isLast
                        ? "pt-3 font-heading text-2xl italic leading-relaxed text-blush sm:text-3xl"
                        : "text-[17px] leading-[1.9] text-cream/80 sm:text-lg"
                  }
                />
              );
            })}
          </div>
        </div>

        {/* =================================================
            SIGNATURE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-10 text-right"
        >
          <p className="font-script text-3xl text-blush drop-shadow-sm">
            — {couple.him}
          </p>

          <div className="mt-2 flex justify-end">
            <span className="text-sm tracking-[0.35em] text-blush/50">
              WITH LOVE
            </span>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <motion.div
          animate={{
            x: ["-4%", "4%", "-4%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-20
            left-[-5%]
            h-40
            w-[110%]
            rounded-[50%]
            bg-[#f1a1b7]/[0.06]
            blur-sm
          "
        />

        <div
          className="
            absolute
            -bottom-24
            left-[-5%]
            h-40
            w-[110%]
            rounded-[50%]
            border-t
            border-white/[0.08]
          "
        />
      </div>
    </section>
  );
}