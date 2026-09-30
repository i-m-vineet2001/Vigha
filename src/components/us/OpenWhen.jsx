import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import Reveal from "@/components/us/Reveal";
import { letters, couple } from "@/data/us";

export default function OpenWhen() {
  const [openId, setOpenId] = useState(null);
  const active = letters.find((l) => l.id === openId);

  return (
    <section
      id="openwhen"
      className="relative scroll-mt-24 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-rosewood/80">
            Open When
          </p>
          <h2 className="mt-4 font-heading text-4xl text-plum sm:text-5xl">
            Letters for the days I'm not there
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-plum/65">
            Open the one that matches how you feel right now.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {letters.map((l, i) => (
            <Reveal key={l.id} delay={i * 0.05}>
              <button
                onClick={() => setOpenId(l.id)}
                className="glass soft-shadow lift h-full w-full rounded-3xl p-6 text-left"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Mail className="text-rosewood" size={20} />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-plum/45">
                    tap to open
                  </span>
                </div>
                <h3 className="font-heading text-xl text-plum">{l.title}</h3>
                <p className="mt-2 text-sm text-plum/60">{l.teaser}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-md"
              onClick={() => setOpenId(null)}
            />

            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-lg"
            >
              <div className="soft-shadow relative rounded-3xl bg-blush p-5 pt-20">
                {/* envelope flap — folds open, then disappears */}
                <motion.div
                  initial={{ rotateX: 0, opacity: 1 }}
                  animate={{ rotateX: -180, opacity: 0 }}
                  transition={{
                    rotateX: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                    opacity: { delay: 0.55, duration: 0.25 },
                  }}
                  style={{
                    transformOrigin: "top center",
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute inset-x-0 top-0 h-20 rounded-t-3xl bg-gradient-to-b from-rosewood to-[#a8455f]"
                  aria-hidden="true"
                />

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.45,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="soft-shadow relative rounded-2xl bg-cream p-6 sm:p-8"
                >
                  <h3 className="font-heading text-xl text-plum">
                    {active.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-plum/80">
                    {active.body}
                  </p>
                  <p className="mt-6 text-right font-script text-2xl text-rosewood">
                    — {couple.him}
                  </p>
                </motion.div>

                <button
                  onClick={() => setOpenId(null)}
                  className="absolute right-4 top-4 z-20 rounded-full bg-cream/85 p-2 text-plum"
                  aria-label="Close letter"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
