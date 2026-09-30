import React, { useState } from "react";
import { Image } from "@/components/ui/image";

// A polaroid card that flips to reveal the memory written on the back.
export default function MemoryCard({ item, tilt = 0 }) {
  const [flipped, setFlipped] = useState(false);
  const back = item.note || item.caption || "";
  const src = item.image || item.src;

  const flip = () => setFlipped((f) => !f);

  return (
    <div
      className="shrink-0 [perspective:1200px]"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={flipped}
        aria-label={
          flipped
            ? `Note: ${back}`
            : "A photo of us. Activate to read the note on the back."
        }
        onClick={flip}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            flip();
          }
        }}
        className="relative aspect-[4/5] w-[62vw] max-w-[238px] cursor-pointer transition-transform duration-700 ease-in-out [transform-style:preserve-3d] sm:w-[238px]"
        style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}
      >
        <div className="absolute inset-0 rounded-2xl bg-cream p-3 pb-11 soft-shadow [backface-visibility:hidden]">
          <div className="h-full w-full overflow-hidden rounded-xl bg-blush/60">
            <Image
              src={src}
              alt="Vineet and Megha"
              fittingType="fit"
              className="h-full w-full"
            />
          </div>
          <p className="absolute inset-x-0 bottom-3 text-center font-script text-lg text-plum/70">
            tap to read
          </p>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-blush p-5 text-center soft-shadow [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="mb-2 text-rosewood">❤</span>
          <p className="font-script text-[22px] leading-snug text-plum">
            {back}
          </p>
        </div>
      </div>
    </div>
  );
}
