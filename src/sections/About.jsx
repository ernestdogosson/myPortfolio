import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, springSettle, useCanHover } from "../utils/motion.js";

/**
 * About — asymmetric two-column layout. Left: heading and bio.
 * Right: a simple icon list (education, background).
 */
function About() {
  const canHover = useCanHover();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-70% 0px 0px 0px",
  });

  const timelineItems = [
    {
      icon: "ri-graduation-cap-fill",
      title: "Backend-utvecklare",
      subtitle: "Sundsgårdens folkhögskola, 2026",
      detail: "3 of 4 modules graded VG",
    },
    {
      icon: "ri-graduation-cap-line",
      title: "M.Sc. Geomatics",
      subtitle: "Lund University, 2022",
    },
    {
      icon: "ri-football-fill",
      title: "Football Coach",
      subtitle: "Landskrona BoIS, 2026–present",
      detail: "Youth academy, P14 squad",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:items-center">
        {/* Left column — heading, bio, stats */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={springSettle}
        >
          <div className="inline-flex items-center gap-2 text-txt-muted text-xs uppercase tracking-[0.15em] mb-4">
            <i className="ri-user-heart-fill text-accent text-base"></i>
            <span>About Me</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-txt mb-6 leading-[1.05] tracking-[-0.015em]">
            Who I Am
          </h2>
          <div className="space-y-4 text-txt-secondary leading-relaxed mb-10">
            <p>
              I came to web development through an unusual path: a Geography
              degree, a Master's in Geomatics, and years of working with
              spatial data and mapping systems. That background shaped how I
              think about structuring information and building interfaces.
            </p>
            <p>
              I completed a backend-focused Yrkeshögskola program in 2026,
              covering API development, databases, authentication, and
              production deployment, and now build fullstack projects end to
              end.
            </p>
          </div>

          <p className="text-txt-muted text-sm flex items-center gap-2">
            <i className="ri-music-2-fill text-accent"></i>
            Off the clock: guitar and writing music.
          </p>
        </motion.div>

        {/* Right column — icon list, no dots or connecting line */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ ...springSettle, delay: 0.15 }}
        >
          {timelineItems.map((item) => (
            <div key={item.title} className="flex gap-3">
              <i className={`${item.icon} text-accent text-base shrink-0 mt-1`}></i>
              <div>
                <p className="text-txt font-medium">{item.title}</p>
                <p className="text-txt-secondary text-sm">{item.subtitle}</p>
                {item.detail && (
                  <p className="text-txt-muted text-xs mt-0.5">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Skills — full-width logo grid below the two columns */}
      <motion.div
        className="max-w-5xl mx-auto w-full mt-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ ...springSettle, delay: 0.25 }}
      >
        <div className="flex items-center gap-2 text-txt-muted text-[0.65rem] uppercase tracking-[0.15em] mb-4">
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
            { icon: "ri-file-code-fill", label: "SCSS", color: "text-pink-400" },
          ].map((skill) => (
            <motion.div
              key={skill.label}
              className="skill-tile rounded-xl p-4 flex flex-col items-center gap-2"
              whileHover={canHover ? { y: -3 } : undefined}
              transition={springSettle}
            >
              <i className={`${skill.icon} ${skill.color} text-2xl`}></i>
              <span className="text-txt-secondary text-xs">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
