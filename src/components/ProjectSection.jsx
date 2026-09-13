import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ProjectsData from "../data/ProjectData.jsx";
import ProjectPopup from "./ProjectPopup.jsx";
import { techColors, defaultTech } from "../data/techColors.js";
import { fadeUp, springSettle, liftHover, pressTap, useCanHover } from "../utils/motion.js";

const accents = [
  { color: "text-accent", icon: "ri-rocket-fill" },
  { color: "text-amber-500", icon: "ri-calendar-todo-fill" },
  { color: "text-blue-500", icon: "ri-layout-grid-fill" },
  { color: "text-purple-500", icon: "ri-film-fill" },
  { color: "text-rose-500", icon: "ri-code-box-fill" },
];

/**
 * ProjectSection — bento grid. One flagship project gets the large tile,
 * the rest fill in around it. Every tile opens the same detail popup.
 */
function ProjectSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const canHover = useCanHover();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-70% 0px 0px 0px" });

  const openProject = (index) => setActiveIndex(index);
  const closeProject = () => setActiveIndex(null);

  const activeProject = activeIndex !== null ? ProjectsData[activeIndex] : null;
  const activeAccent = activeIndex !== null ? accents[activeIndex % accents.length] : null;

  const tileSpans = ["md:col-span-2 md:row-span-2", "", "", "md:col-span-3"];

  return (
    <div className="max-w-5xl mx-auto w-full" ref={sectionRef}>
      {/* Section Header — left-aligned, split into label + heading */}
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={springSettle}
      >
        <div>
          <div className="inline-flex items-center gap-2 text-txt-muted text-xs uppercase tracking-[0.15em] mb-4">
            <i className="ri-folder-3-fill text-accent text-base"></i>
            <span>Selected Work</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-txt leading-[1.05] tracking-[-0.015em]">
            Projects
          </h2>
        </div>
        <p className="text-txt-muted text-lg max-w-xs md:text-right">
          A selection of things I've built.
        </p>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-4">
        {ProjectsData.map((project, index) => {
          const accent = accents[index % accents.length];
          return (
            <motion.button
              key={project.name}
              onClick={() => openProject(index)}
              className={`group relative rounded-2xl overflow-hidden text-left glass-card ${tileSpans[index] || ""}`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ ...springSettle, delay: 0.1 + index * 0.08 }}
              whileHover={canHover ? liftHover : undefined}
              whileTap={pressTap}
            >
              {/* Background image or fallback */}
              {project.bgImage ? (
                <div
                  className="absolute inset-0 bg-cover bg-top transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900">
                  {/* Corner badge, not centered — a title that wraps to two
                      lines must never fight the icon for the same space. */}
                  <i className={`${accent.icon} ${accent.color} absolute top-4 right-4 text-2xl opacity-40`}></i>
                </div>
              )}

              {/* Darkening scrim so text stays legible even over a bright
                  image (e.g. a light-colored screenshot) */}
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-5">
                <h3 className="font-serif text-xl md:text-2xl font-normal text-white mb-1">
                  {project.name}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2 mb-3">
                  {project.projectDescription}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack?.slice(0, 3).map((tech) => {
                    const colors = techColors[tech] || defaultTech;
                    return (
                      <span
                        key={tech}
                        className={`inline-flex items-center gap-1 px-2 py-0.5 ${colors.bg} ${colors.text} rounded-md text-xs font-medium`}
                      >
                        <i className={`${colors.icon} text-[10px]`}></i>
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectPopup
            project={{
              name: activeProject.name,
              description: activeProject.projectDescription,
              githubRepo: activeProject.githubRepo,
              liveUrl: activeProject.liveUrl,
              info: activeProject.projectInfo,
              challenges: activeProject.challenges,
              skillsLearned: activeProject.skillsLearned,
              bgImage: activeProject.bgImage,
              techStack: activeProject.techStack,
              details: activeProject.details,
            }}
            onClose={closeProject}
            accent={activeAccent}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectSection;
