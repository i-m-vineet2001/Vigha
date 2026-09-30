// import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
// import { navLinks } from "@/data/us";

// export default function Nav() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState("home");

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
//       { rootMargin: "-45% 0px -50% 0px" },
//     );
//     navLinks.forEach((l) => {
//       const el = document.getElementById(l.id);
//       if (el) obs.observe(el);
//     });
//     return () => obs.disconnect();
//   }, []);

//   const go = (id) => {
//     setOpen(false);
//     document
//       .getElementById(id)
//       ?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <>
//       <header
//         className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
//           scrolled ? "py-3" : "py-5"
//         }`}
//       >
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
//           <button
//             onClick={() => go("home")}
//             className="font-heading text-lg tracking-wide text-plum"
//           >
//             Us <span className="text-rosewood">❤</span>
//           </button>

//           <nav
//             className={`hidden items-center gap-1 rounded-full px-2 py-2 lg:flex ${
//               scrolled ? "glass-strong soft-shadow" : "glass"
//             }`}
//           >
//             {navLinks.map((l) => (
//               <button
//                 key={l.id}
//                 onClick={() => go(l.id)}
//                 className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
//                   active === l.id
//                     ? "bg-rosewood text-cream"
//                     : "text-plum/75 hover:text-plum"
//                 }`}
//               >
//                 {l.label}
//               </button>
//             ))}
//           </nav>

//           <button
//             onClick={() => setOpen(true)}
//             className="rounded-full glass p-3 text-plum soft-shadow lg:hidden"
//             aria-label="Open menu"
//           >
//             <Menu size={20} />
//           </button>
//         </div>
//       </header>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 z-[90] lg:hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <div
//               className="absolute inset-0 bg-ink/25 backdrop-blur-md"
//               onClick={() => setOpen(false)}
//             />
//             <motion.div
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -20, opacity: 0 }}
//               transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//               className="glass-strong soft-shadow relative m-4 rounded-3xl p-6"
//             >
//               <div className="mb-4 flex items-center justify-between">
//                 <span className="font-heading text-xl text-plum">Us ❤</span>
//                 <button
//                   onClick={() => setOpen(false)}
//                   aria-label="Close menu"
//                   className="text-plum/70"
//                 >
//                   <X size={22} />
//                 </button>
//               </div>
//               <div className="grid grid-cols-2 gap-2">
//                 {navLinks.map((l) => (
//                   <button
//                     key={l.id}
//                     onClick={() => go(l.id)}
//                     className={`rounded-2xl px-4 py-3 text-left text-sm font-medium ${
//                       active === l.id
//                         ? "bg-rosewood text-cream"
//                         : "bg-cream/70 text-plum"
//                     }`}
//                   >
//                     {l.label}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/us";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
      },
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);

      if (element) {
        obs.observe(element);
      }
    });

    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAV
      ====================================================== */}
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500
          ${scrolled ? "py-3" : "py-5"}
        `}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* =================================================
              LOGO
          ================================================= */}
          <motion.button
            onClick={() => go("home")}
            whileTap={{ scale: 0.97 }}
            className="
    group
    relative
    flex
    items-center
    gap-2
    px-2
    py-1
    text-rosewood
  "
          >
            {/* Soft glow */}
            <span
              className="
      absolute
      inset-0
      -z-10
      rounded-full
      bg-rosewood/10
      opacity-0
      blur-xl
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
            />

            {/* Names */}
            <span
              className="
      font-[cursive]
      text-[30px]
      leading-none
      tracking-[-1.5px]
      italic
      sm:text-[34px]
    "
              style={{
                fontFamily: '"Brush Script MT", "Segoe Script", cursive',
              }}
            >
              Vineet
            </span>

            {/* X */}
            <span
              className="
      font-serif
      text-[22px]
      font-normal
      italic
      text-plum/70
      sm:text-[25px]
    "
            >
              ×
            </span>

            <span
              className="
      font-[cursive]
      text-[30px]
      leading-none
      tracking-[-1.5px]
      italic
      sm:text-[34px]
    "
              style={{
                fontFamily: '"Brush Script MT", "Segoe Script", cursive',
              }}
            >
              Megha
            </span>

            {/* Beating heart */}
            <motion.span
              animate={{
                scale: [1, 1.22, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
      ml-1
      inline-block
      origin-center
      text-[17px]
      drop-shadow-[0_3px_8px_rgba(198,87,123,0.35)]
      sm:text-[19px]
    "
            >
              ❤️
            </motion.span>
          </motion.button>
          {/* =================================================
              DESKTOP NAV
          ================================================= */}
          <nav
            className={`
              hidden lg:flex
              items-center gap-1
              rounded-full
              border border-white/30
              px-2 py-2
              transition-all duration-500

              ${scrolled ? "glass-strong soft-shadow scale-[0.98]" : "glass"}
            `}
          >
            {navLinks.map((link) => {
              const isActive = active === link.id;

              return (
                <motion.button
                  key={link.id}
                  onClick={() => go(link.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className={`
                    relative
                    overflow-hidden
                    rounded-full
                    px-4 py-2
                    text-[13px]
                    font-medium
                    transition-all duration-300

                    ${isActive ? "text-cream" : "text-plum/70 hover:text-plum"}
                  `}
                >
                  {/* Active liquid pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 30,
                      }}
                      className="
                        absolute inset-0
                        -z-10
                        rounded-full
                        bg-gradient-to-r
                        from-rosewood
                        via-[#9a3f5d]
                        to-plum
                        shadow-[0_6px_20px_rgba(122,46,68,0.22)]
                      "
                    />
                  )}

                  {/* subtle shine */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        inset-x-2 top-0
                        h-px
                        bg-white/50
                        blur-[1px]
                      "
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="
              group
              relative
              flex
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border border-white/35
              bg-white/25
              p-3
              text-plum
              shadow-[0_8px_30px_rgba(122,46,68,0.12)]
              backdrop-blur-xl
              lg:hidden
            "
            aria-label="Open menu"
          >
            {/* liquid glow */}
            <span
              className="
                absolute
                -inset-5
                rounded-full
                bg-rosewood/15
                opacity-0
                blur-xl
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            <Menu size={20} strokeWidth={1.8} className="relative z-10" />
          </motion.button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-[90]
              lg:hidden
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* =============================================
                BACKDROP
            ============================================== */}
            <motion.div
              className="
                absolute
                inset-0
                bg-ink/25
                backdrop-blur-xl
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* =============================================
                MOBILE GLASS PANEL
            ============================================== */}
            <motion.div
              initial={{
                y: -30,
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                y: -25,
                opacity: 0,
                scale: 0.97,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                m-4
                overflow-hidden
                rounded-[2rem]
                border border-white/35
                bg-white/20
                p-5
                shadow-[0_20px_70px_rgba(70,20,40,0.18)]
                backdrop-blur-2xl
              "
            >
              {/* =========================================
                  DECORATIVE GLOW
              ========================================== */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-rosewood/15
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-20
                  h-48
                  w-48
                  rounded-full
                  bg-plum/10
                  blur-3xl
                "
              />

              {/* =========================================
                  TOP BAR
              ========================================== */}
              <div className="relative z-10 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-xl text-plum">Us</span>

                  <motion.span
                    animate={{
                      scale: [1, 1.18, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-rosewood"
                  >
                    <Heart size={16} fill="currentColor" strokeWidth={1.5} />
                  </motion.span>
                </div>

                <motion.button
                  onClick={() => setOpen(false)}
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Close menu"
                  className="
                    rounded-full
                    border border-white/30
                    bg-white/25
                    p-2.5
                    text-plum/75
                    shadow-sm
                    backdrop-blur-md
                  "
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* =========================================
                  SMALL DIVIDER
              ========================================== */}
              <div className="relative z-10 mb-4 h-px bg-gradient-to-r from-transparent via-rosewood/20 to-transparent" />

              {/* =========================================
                  NAV LINKS
              ========================================== */}
              <div className="relative z-10 grid grid-cols-2 gap-2.5">
                {navLinks.map((link, index) => {
                  const isActive = active === link.id;

                  return (
                    <motion.button
                      key={link.id}
                      onClick={() => go(link.id)}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.045,
                        duration: 0.3,
                      }}
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className={`
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        px-4 py-3.5
                        text-left
                        text-sm
                        font-medium
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "border-rosewood/20 text-cream shadow-[0_8px_25px_rgba(122,46,68,0.18)]"
                            : "border-white/30 bg-white/30 text-plum hover:bg-white/45"
                        }
                      `}
                    >
                      {isActive && (
                        <>
                          <span
                            className="
                              absolute
                              inset-0
                              bg-gradient-to-br
                              from-rosewood
                              via-[#9a3f5d]
                              to-plum
                            "
                          />

                          <span
                            className="
                              absolute
                              left-3
                              right-3
                              top-0
                              h-px
                              bg-white/45
                            "
                          />
                        </>
                      )}

                      <span className="relative z-10">{link.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* =========================================
                  BOTTOM DECORATIVE WAVE
              ========================================== */}
              <div className="relative mt-6 h-5 overflow-hidden rounded-full opacity-30">
                <motion.div
                  animate={{
                    x: ["-10%", "10%", "-10%"],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -top-4
                    left-0
                    h-10
                    w-[120%]
                    rounded-[50%]
                    border-t
                    border-rosewood/40
                  "
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}