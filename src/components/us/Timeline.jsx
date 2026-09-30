import React from "react";
import Reveal from "@/components/us/Reveal";
import { Image } from "@/components/ui/image";
import { timeline } from "@/data/us";

export default function Timeline() {
  return (
    <section id="story" className="relative scroll-mt-24 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-rosewood/80">
            Our Story
          </p>
          <h2 className="mt-4 font-heading text-4xl text-plum sm:text-5xl">
            How we became us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-plum/65">
            A few dates I keep coming back to.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute bottom-2 left-4 top-2 w-px bg-gradient-to-b from-rosewood/10 via-rosewood/40 to-rosewood/10 md:left-1/2" />

          <div className="space-y-14">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div
                  className={`relative flex flex-col gap-6 pl-12 md:flex-row md:items-center md:pl-0 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2 md:px-10">
                    <div className="glass soft-shadow lift rounded-3xl p-6">
                      <span className="text-2xl">{item.emoji}</span>
                      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-rosewood/85">
                        {item.date}
                      </p>
                      <h3 className="mt-2 font-heading text-2xl text-plum">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-plum/70">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:px-10">
                    <div className="img-zoom soft-shadow overflow-hidden rounded-3xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fittingType="fit"
                        className="h-full w-full"
                      />
                    </div>
                  </div>

                  <span className="absolute left-4 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-rosewood ring-4 ring-cream md:left-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
