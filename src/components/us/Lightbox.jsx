import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function Lightbox({ items, index, onClose, onIndex }) {
  useEffect(() => {
    const onKey = (e) => {
      if (index == null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft")
        onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndex]);

  if (index == null || !items[index]) return null;
  const item = items[index];

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-md">
      <button
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Close viewer"
      />
      <div className="relative z-10 w-full max-w-4xl">
        <div className="soft-shadow overflow-hidden rounded-3xl bg-cream">
          <div className="relative aspect-[4/3] w-full bg-blush/50">
            <Image
              src={item.image || item.src}
              alt={item.caption || "Vineet and Megha"}
              fittingType="fill"
              className="h-full w-full"
            />
          </div>
          {item.caption && (
            <p className="px-6 py-5 text-center font-heading text-lg italic text-plum/80">
              {item.caption}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute -top-2 right-0 -translate-y-full rounded-full bg-cream/90 p-3 text-plum"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {items.length > 1 && (
          <>
            <button
              onClick={() => onIndex((index - 1 + items.length) % items.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-cream/85 p-3 text-plum"
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => onIndex((index + 1) % items.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-cream/85 p-3 text-plum"
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
