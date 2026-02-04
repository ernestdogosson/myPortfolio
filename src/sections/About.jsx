import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * About section - polished with consistent spacing
 * - Single column layout for better readability
 * - Bio integrated with cards for cohesive flow
 * - Consistent animations
 */
function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 border-t border-stone-200"
      ref={sectionRef}
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-stone-400 text-xs uppercase tracking-[0.15em] mb-4">
            <i className="ri-user-heart-fill text-rose-500 text-base"></i>
            <span>About Me</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-stone-900 mb-4">
            Who I Am
          </h2>
          <p className="text-stone-500 max-w-lg text-lg mx-auto">
            From mapping the world to building for the web.
          </p>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          className="bg-white rounded-2xl border border-stone-200 p-8 mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-2 text-stone-400 text-[0.65rem] uppercase tracking-[0.15em] mb-4">
            <i className="ri-route-fill text-blue-500 text-sm"></i>
            <span>My Journey</span>
          </div>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              I came to frontend through an unusual path—Geography degree, Master's
              in Geomatics, years of working with spatial data and mapping systems.
              That background shaped how I think about visualizing information and
              building interfaces.
            </p>
            <p>
              Now I'm expanding into full-stack development while coaching youth
              football at Landskrona BoIS and writing music on the side.
            </p>
          </div>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Currently Learning */}
          <motion.div
            className="bg-white rounded-2xl border border-stone-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-2 text-stone-400 text-[0.65rem] uppercase tracking-[0.15em] mb-4">
              <i className="ri-graduation-cap-fill text-blue-500 text-sm"></i>
              <span>Learning</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                <i className="ri-typescript-fill"></i>
                TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-medium">
                <i className="ri-server-fill"></i>
                Backend
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium">
                <i className="ri-database-2-fill"></i>
                Databases
              </span>
            </div>
          </motion.div>

          {/* Beyond Code */}
          <motion.div
            className="bg-white rounded-2xl border border-stone-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-2 text-stone-400 text-[0.65rem] uppercase tracking-[0.15em] mb-4">
              <i className="ri-heart-fill text-rose-500 text-sm"></i>
              <span>Beyond Code</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-sm font-medium">
                <i className="ri-football-fill"></i>
                Football Coach
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-sm font-medium">
                <i className="ri-music-2-fill"></i>
                Music
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-lg text-sm font-medium">
                <i className="ri-guitar-fill"></i>
                Guitar
              </span>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="bg-white rounded-2xl border border-stone-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-2 text-stone-400 text-[0.65rem] uppercase tracking-[0.15em] mb-4">
              <i className="ri-tools-fill text-amber-500 text-sm"></i>
              <span>Building With</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-sm font-medium">
                <i className="ri-javascript-fill"></i>
                JS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-50 text-cyan-600 rounded-lg text-sm font-medium">
                <i className="ri-reactjs-fill"></i>
                React
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 text-teal-600 rounded-lg text-sm font-medium">
                <i className="ri-tailwind-css-fill"></i>
                Tailwind
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium">
                <i className="ri-git-branch-fill"></i>
                Git
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
