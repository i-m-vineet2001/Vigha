import React, { useMemo } from "react";

// Drifting "digital bokeh" polka dots with subtle mouse parallax.
export default function PolkaBackground() {
  const dots = useMemo(() => {
    return Array.from({ length: 26 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 8 + Math.random() * 46,
      opacity: 0.05 + Math.random() * 0.14,
      duration: 18 + Math.random() * 26,
      delay: -Math.random() * 30,
      drift: (Math.random() - 0.5) * 40,
    }));
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* warm haze gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 0%, #FFF8F5 0%, #FDF1EF 38%, #F9E3E8 72%, #F6D8E1 100%)",
        }}
      />
      {/* drifting polka dots */}
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: "#C6577B",
            opacity: d.opacity,
            filter: "blur(0.5px)",
            animation: `polkaDrift ${d.duration}s ease-in-out ${d.delay}s infinite alternate`,
            ["--drift"]: `${d.drift}px`,
          }}
        />
      ))}
      <style>{`
        @keyframes polkaDrift {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(var(--drift), calc(var(--drift) * -0.6)) scale(1.12); }
        }
      `}</style>
    </div>
  );
}
