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

        {/* Stats row */}
        <motion.div
          className="flex items-center justify-center divide-x divide-bdr mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ ...springSettle, delay: 0.2 }}
        >
          {[
            { value: "4+", label: "Projects Shipped" },
            { value: "3/4", label: "YH Modules Graded VG" },
            { value: "2", label: "Languages Spoken" },
          ].map((stat) => (
            <div key={stat.label} className="flex-1 text-center px-4">
              <p className="font-serif text-4xl md:text-5xl text-accent leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-txt-muted text-xs uppercase tracking-[0.1em]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        </div>

        {/* Skills — logo grid instead of colored pills */}
        <motion.div
          className="mt-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ ...springSettle, delay: 0.25 }}
        >
          <div className="flex items-center gap-2 text-txt-muted text-[0.65rem] uppercase tracking-[0.15em] mb-4 justify-center">
            <i className="ri-tools-fill text-accent text-sm"></i>
            <span>Building With</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {[
              { icon: "ri-html5-fill", label: "HTML", color: "text-orange-400" },
              { icon: "ri-css3-fill", label: "CSS", color: "text-blue-400" },
              { icon: "ri-javascript-fill", label: "JS", color: "text-amber-400" },
              { icon: "ri-reactjs-fill", label: "React", color: "text-cyan-400" },
              { icon: "ri-tailwind-css-fill", label: "Tailwind", color: "text-teal-400" },
              { icon: "ri-nodejs-fill", label: "Node.js", color: "text-green-400" },
              { icon: "ri-database-2-fill", label: "PostgreSQL", color: "text-sky-400" },
              { icon: "ri-ship-2-fill", label: "Docker", color: "text-blue-400" },
              { icon: "ri-git-branch-fill", label: "Git", color: "text-orange-400" },
              { icon: "ri-sass-fill", label: "SCSS", color: "text-pink-400" },
            ].map((skill) => (
              <motion.div
                key={skill.label}
                className="skill-tile rounded-xl p-4 flex flex-col items-center gap-2"
                whileHover={{ y: -3 }}
                transition={springSettle}
              >
                <i className={`${skill.icon} ${skill.color} text-2xl`}></i>
                <span className="text-txt-secondary text-xs">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
