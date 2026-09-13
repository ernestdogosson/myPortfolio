import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, springSettle, liftHover } from "../utils/motion.js";

/**
 * About section - polished with consistent spacing
 * - Single column layout for better readability
 * - Bio integrated with cards for cohesive flow
 * - Consistent animations
 */
function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-70% 0px 0px 0px",
  });

  return (
    <section id="about" className="py-24 md:py-32 px-6" ref={sectionRef}>
      <div className="max-w-3xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={springSettle}
        >
          <div className="inline-flex items-center gap-2 text-txt-muted text-xs uppercase tracking-[0.15em] mb-4">
            <i className="ri-user-heart-fill text-emerald-400 text-base"></i>
            <span>About Me</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-txt mb-4 leading-[1.05] tracking-[-0.015em]">
            Who I Am
          </h2>
          <p className="text-txt-muted max-w-lg text-lg mx-auto">
            From mapping the world to building for the web.
          </p>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          className="glass-card rounded-2xl p-8 mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ ...springSettle, delay: 0.15 }}
        >
          <div className="flex items-center gap-2 text-txt-muted text-[0.65rem] uppercase tracking-[0.15em] mb-4">
            <i className="ri-route-fill text-blue-500 text-sm"></i>
            <span>My Journey</span>
          </div>
          <div className="space-y-4 text-txt-secondary leading-relaxed">
            <p>
              I came to web development through an unusual path — a Geography
              degree, a Master's in Geomatics, and years of working with
              spatial data and mapping systems. That background shaped how I
              think about structuring information and building interfaces.
            </p>
            <p>
              I completed a backend-focused Yrkeshögskola program in 2026,
              covering API development, databases, authentication, and
              production deployment, and now build fullstack projects end to
              end while coaching youth football at Landskrona BoIS.
            </p>
          </div>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Currently Learning */}
          <motion.div
            className="glass-card border-t-2 border-t-blue-500/50 rounded-2xl p-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={springSettle}
            whileHover={liftHover}
          >
            <div className="flex items-center gap-2 text-txt-muted text-[0.65rem] uppercase tracking-[0.15em] mb-4">
              <i className="ri-graduation-cap-fill text-blue-500 text-sm"></i>
              <span>Background</span>
            </div>
            <div className="space-y-2">
              <p className="text-txt-secondary text-sm leading-snug">
                <span className="font-medium text-txt">Backend-utvecklare</span>
                <br />
                Sundsgårdens folkhögskola, 2026
              </p>
              <p className="text-txt-secondary text-sm leading-snug">
                <span className="font-medium text-txt">M.Sc. Geomatics</span>
                <br />
                Lund University, 2022
              </p>
              <p className="text-txt-muted text-xs">Swedish: upper-intermediate</p>
            </div>
          </motion.div>

          {/* Beyond Code */}
          <motion.div
            className="glass-card border-t-2 border-t-rose-500/50 rounded-2xl p-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={springSettle}
            whileHover={liftHover}
          >
            <div className="flex items-center gap-2 text-txt-muted text-[0.65rem] uppercase tracking-[0.15em] mb-4">
              <i className="ri-heart-fill text-rose-500 text-sm"></i>
              <span>Beyond Code</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-400 rounded-lg text-sm font-medium">
                <i className="ri-football-fill"></i>
                Football Coach
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-400 rounded-lg text-sm font-medium">
                <i className="ri-music-2-fill"></i>
                Music
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/10 text-rose-400 rounded-lg text-sm font-medium">
                <i className="ri-disc-fill"></i>
                Guitar
              </span>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="glass-card border-t-2 border-t-amber-500/50 rounded-2xl p-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={springSettle}
            whileHover={liftHover}
          >
            <div className="flex items-center gap-2 text-txt-muted text-[0.65rem] uppercase tracking-[0.15em] mb-4">
              <i className="ri-tools-fill text-amber-500 text-sm"></i>
              <span>Building With</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/10 text-orange-400 rounded-lg text-sm font-medium">
                <i className="ri-html5-fill"></i>
                HTML
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium">
                <i className="ri-css3-fill"></i>
                CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-pink-500/10 text-pink-400 rounded-lg text-sm font-medium">
                <i className="ri-sass-fill"></i>
                SCSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-400 rounded-lg text-sm font-medium">
                <i className="ri-javascript-fill"></i>
                JS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg text-sm font-medium">
                <i className="ri-reactjs-fill"></i>
                React
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-500/10 text-teal-400 rounded-lg text-sm font-medium">
                <i className="ri-tailwind-css-fill"></i>
                Tailwind
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-400 rounded-lg text-sm font-medium">
                <i className="ri-nodejs-fill"></i>
                Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-500/10 text-sky-400 rounded-lg text-sm font-medium">
                <i className="ri-database-2-fill"></i>
                PostgreSQL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium">
                <i className="ri-ship-2-fill"></i>
                Docker
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/10 text-orange-400 rounded-lg text-sm font-medium">
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
