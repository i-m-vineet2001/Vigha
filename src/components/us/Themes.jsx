import React from "react";
import Reveal from "@/components/us/Reveal";
import { themes } from "@/data/us";

export default function Themes() {
  return (
    <section className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-rosewood/80">
            Things That Feel Like Us
          </p>
          <h2 className="mt-4 font-heading text-4xl text-plum sm:text-5xl">
            What this actually feels like
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <div className="glass soft-shadow lift h-full rounded-3xl p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush text-xl">
                  {t.emoji}
                </div>
                <h3 className="mt-5 font-heading text-xl text-plum">
                  {t.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-plum/70">
                  {t.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
