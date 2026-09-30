// import React, { useMemo } from "react";

// // Soft glowing motes that drift slowly upward. Purely decorative.
// export default function FloatingParticles({ count = 14 }) {
//   const bits = useMemo(
//     () =>
//       Array.from({ length: count }, (_, i) => ({
//         id: i,
//         left: Math.random() * 100,
//         size: 4 + Math.random() * 9,
//         delay: -Math.random() * 24,
//         duration: 16 + Math.random() * 18,
//         opacity: 0.15 + Math.random() * 0.3,
//       })),
//     [count],
//   );

//   return (
//     <div
//       className="pointer-events-none absolute inset-0 overflow-hidden"
//       aria-hidden="true"
//     >
//       {bits.map((b) => (
//         <span
//           key={b.id}
//           className="absolute bottom-[-60px] rounded-full animate-drift"
//           style={{
//             left: `${b.left}%`,
//             width: `${b.size}px`,
//             height: `${b.size}px`,
//             background: "radial-gradient(circle at 30% 30%, #ffffff, #C6577B)",
//             opacity: b.opacity,
//             animationDelay: `${b.delay}s`,
//             animationDuration: `${b.duration}s`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

import React, { useMemo } from "react";

// Dreamy 3D glass particles that slowly float upward
export default function FloatingParticles({ count = 18 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const depth = Math.random();

      return {
        id: i,

        // Horizontal starting position
        left: Math.random() * 100,

        // Particle size
        size: 4 + depth * 10,

        // Depth controls brightness / blur
        depth,

        // Animation timing
        delay: -Math.random() * 28,
        duration: 18 + Math.random() * 18,

        // Horizontal movement
        drift: 25 + Math.random() * 55,

        // Vertical variation
        rise: 105 + Math.random() * 25,

        // Rotation
        rotation: Math.random() * 360,

        // Base opacity
        opacity: 0.16 + depth * 0.38,

        // Depth blur
        blur: (1 - depth) * 2.5,
      };
    });
  }, [count]);

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
        [perspective:1200px]
      "
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle-3d"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,

            opacity: particle.opacity,

            "--particle-drift": `${particle.drift}px`,
            "--particle-rise": `${particle.rise}vh`,
            "--particle-duration": `${particle.duration}s`,
            "--particle-delay": `${particle.delay}s`,
            "--particle-rotation": `${particle.rotation}deg`,
            "--particle-blur": `${particle.blur}px`,
          }}
        >
          {/* Main glass body */}
          <span className="particle-glass" />

          {/* Main light reflection */}
          <span className="particle-highlight" />

          {/* Small secondary reflection */}
          <span className="particle-reflection" />

          {/* Soft outer aura */}
          <span className="particle-aura" />
        </span>
      ))}
    </div>
  );
}