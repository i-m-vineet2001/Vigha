// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import PolkaBackground from "@/components/PolkaBackground";
// import Nav from "@/components/us/Nav";
// import Hero from "@/components/us/Hero";
// import Counter from "@/components/us/Counter";
// import Timeline from "@/components/us/Timeline";
// import Memories from "@/components/us/Memories";
// import Themes from "@/components/us/Themes";
// import SpecialPlace from "@/components/us/SpecialPlace";
// import SongPlayer from "@/components/us/SongPlayer";
// import OpenWhen from "@/components/us/OpenWhen";
// import Quiz from "@/components/us/Quiz";
// import Future from "@/components/us/Future";
// import Letter from "@/components/us/Letter";
// import FinalReveal from "@/components/us/FinalReveal";
// import { couple } from "@/data/us";

// export default function Home() {
//   const [entered, setEntered] = useState(false);

//   const enter = () => {
//     window.scrollTo({ top: 0, behavior: "auto" });
//     setEntered(true);
//   };

//   return (
//     <div className="relative min-h-screen bg-cream font-body text-ink">
//       <PolkaBackground />

//       <AnimatePresence>
//         {!entered && (
//           <motion.div
//             key="opening"
//             className="fixed inset-0 z-[70]"
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0, scale: 1.04 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <div className="absolute inset-0 bg-cream/80 backdrop-blur-[2px]" />
//             <div className="relative h-full overflow-y-auto">
//               <Hero onEnter={enter} />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         initial={false}
//         animate={{ opacity: entered ? 1 : 0 }}
//         transition={{ duration: 0.9, delay: entered ? 0.35 : 0 }}
//         className={
//           entered ? "relative" : "pointer-events-none h-screen overflow-hidden"
//         }
//         aria-hidden={!entered}
//       >
//         <Nav />
//         <main>
//           <div id="home" className="h-24" />
//           <Counter />
//           <Timeline />
//           <Memories />
//           <Themes />
//           <SpecialPlace />
//           <SongPlayer />
//           <OpenWhen />
//           <Quiz />
//           <Future />
//           <Letter />
//           <FinalReveal />
//           <footer className="px-5 pb-16 pt-4 text-center text-xs text-plum/45">
//             Made slowly, with a lot of feeling — by {couple.him}.
//           </footer>
//         </main>
//       </motion.div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PolkaBackground from "@/components/PolkaBackground";
import Nav from "@/components/us/Nav";
import Hero from "@/components/us/Hero";
import Counter from "@/components/us/Counter";
import Timeline from "@/components/us/Timeline";
import Memories from "@/components/us/Memories";
import Themes from "@/components/us/Themes";
import SpecialPlace from "@/components/us/SpecialPlace";
import SongPlayer from "@/components/us/SongPlayer";
import OpenWhen from "@/components/us/OpenWhen";
import Quiz from "@/components/us/Quiz";
import Future from "@/components/us/Future";
import Letter from "@/components/us/Letter";
import FinalReveal from "@/components/us/FinalReveal";
import { couple } from "@/data/us";
import { Heart } from "lucide-react";

export default function Home() {
  const [entered, setEntered] = useState(false);

  const enter = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setEntered(true);
  };

  return (
    <div className="relative min-h-screen selection:bg-rosewood/20 bg-cream font-body text-ink overflow-x-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blush/40 via-rosewood/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-blush/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <PolkaBackground />

      {/* Cinematic Opening Gate */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="opening"
            className="fixed inset-0 z-[70] flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 bg-cream/90 backdrop-blur-md" />
            <div className="relative h-full w-full overflow-y-auto flex items-center justify-center">
              <Hero onEnter={enter} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Experience Container */}
      <motion.div
        initial={false}
        animate={{
          opacity: entered ? 1 : 0,
          scale: entered ? 1 : 0.98,
        }}
        transition={{
          duration: 1.2,
          delay: entered ? 0.2 : 0,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={
          entered
            ? "relative z-10"
            : "pointer-events-none h-screen overflow-hidden select-none"
        }
        aria-hidden={!entered}
      >
        <Nav />
        <main className="relative">
          <div id="home" className="h-16 sm:h-24" />

          <div className="space-y-12 sm:space-y-20">
            <Counter />
            <Timeline />
            <Memories />
            <Themes />
            <SpecialPlace />
            <SongPlayer />
            <OpenWhen />
            <Quiz />
            <Future />
            <Letter />
            <FinalReveal />
          </div>

          <footer className="relative z-10 px-5 pb-20 pt-12 text-center">
            <div className="mx-auto max-w-md flex flex-col items-center gap-3">
              <div className="h-px w-16 bg-rosewood/20" />
              <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-plum/60 font-medium">
                Made slowly with{" "}
                <Heart
                  size={12}
                  className="text-rosewood fill-rosewood animate-pulse"
                />{" "}
                by {couple.him}
              </p>
            </div>
          </footer>
        </main>
      </motion.div>
    </div>
  );
}