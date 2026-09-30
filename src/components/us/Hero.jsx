import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import FloatingParticles from "@/components/us/FloatingParticles";
import { hero, couple } from "@/data/us";

export default function Hero({ onEnter }) {
  const reduce = useReducedMotion();

  const rise = (d) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 26 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="opening"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-20"
    >
      <FloatingParticles count={16} />
      <div className="relative z-10 w-full max-w-3xl text-center">
        <motion.p
          {...rise(0)}
          className="text-[11px] uppercase tracking-[0.4em] text-rosewood/80"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          {...rise(0.12)}
          className="mt-5 font-heading text-5xl leading-[1.05] text-plum sm:text-6xl md:text-7xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          {...rise(0.22)}
          className="mx-auto mt-6 max-w-xl font-heading text-lg italic text-plum/70 sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        <motion.p
          {...rise(0.3)}
          className="mt-8 font-script text-3xl text-rosewood sm:text-4xl"
        >
          {hero.signature}
        </motion.p>

        <motion.div {...rise(0.4)} className="mt-10">
          <button
            onClick={onEnter}
            className="animate-pulse-ring rounded-full bg-rosewood px-9 py-4 font-heading text-lg text-cream soft-shadow transition-transform duration-500 hover:-translate-y-1"
          >
            {hero.cta}
          </button>
        </motion.div>

        <motion.p
          {...rise(0.52)}
          className="mt-8 text-xs uppercase tracking-widest text-plum/45"
        >
          made by {couple.him}, for {couple.her}
        </motion.p>
      </div>
    </section>
  );
}
