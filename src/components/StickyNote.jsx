import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { Image } from "@/components/ui/image";

// A single sticky note. Click to flip (front = photo, back = love note).
export default function StickyNote({ memory, onDelete }) {
  const [flipped, setFlipped] = useState(false);

  const style = {
    left: `${memory.pos_x}%`,
    top: `${memory.pos_y}%`,
    transform: `rotate(${memory.rotation}deg)`,
  };

  return (
    <div className="group absolute" style={style}>
      <div
        className="sticky-note-shell"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT — polaroid photo */}
        <div
          className="sticky-face sticky-front"
          onClick={() => setFlipped((f) => !f)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFlipped((f) => !f);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Memory photo. Click to reveal the love note.`}
          aria-expanded={flipped}
        >
          <div className="polaroid">
            <div className="polaroid-img">
              <Image
                src={memory.image}
                alt="A captured moment of Vineet & Megha"
                fittingType="fill"
                className="w-full h-full"
              />
            </div>
            <div className="polaroid-caption">Vineet &amp; Megha</div>
          </div>
          <div className="tape tape-tl" />
          <div className="tape tape-br" />
        </div>

        {/* BACK — handwritten note */}
        <div
          className="sticky-face sticky-back"
          onClick={() => setFlipped((f) => !f)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFlipped((f) => !f);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Love note: ${memory.note}. Click to flip back to photo.`}
          aria-expanded={!flipped}
        >
          <div className="note-paper">
            <div className="note-handwriting">{memory.note}</div>
            <div className="note-signature">— always, us</div>
          </div>
          {onDelete && (
            <button
              className="note-delete"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(memory.id);
              }}
              aria-label="Delete this memory"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
