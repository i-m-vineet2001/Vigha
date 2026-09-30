import React, { useEffect, useState } from "react";
import Reveal from "@/components/us/Reveal";
import { counter, dates } from "@/data/us";

const pad = (n) => String(n).padStart(2, "0");

export default function Counter() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const seconds = Math.floor(
    Math.max(0, now - new Date(dates.firstChat).getTime()) / 1000,
  );
  const units = [
    { label: "Days", value: Math.floor(seconds / 86400) },
    { label: "Hours", value: Math.floor(seconds / 3600) % 24 },
    { label: "Minutes", value: Math.floor(seconds / 60) % 60 },
    { label: "Seconds", value: pad(seconds % 60) },
  ];

  return (
    <section className="relative px-5 pb-4 pt-8">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass soft-shadow rounded-[2rem] px-6 py-10 text-center">
          <h3 className="font-heading text-2xl text-plum sm:text-3xl">
            {counter.title}
          </h3>
          <p className="mt-2 text-sm text-plum/60">{counter.subtitle}</p>

          <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4">
            {units.map((u) => (
              <div key={u.label} className="rounded-2xl bg-cream/70 px-1 py-4">
                <div className="font-heading text-2xl tabular-nums text-rosewood sm:text-4xl">
                  {u.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-plum/55 sm:text-xs">
                  {u.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-plum/65">
            {counter.extras.map((e) => (
              <span key={e.label}>
                <span className="text-plum/45">{e.label}:</span> {e.value}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
