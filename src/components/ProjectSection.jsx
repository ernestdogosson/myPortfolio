import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ProjectsData from "../data/ProjectData.jsx";
import ProjectPopup from "./ProjectPopup.jsx";
import { techColors, defaultTech } from "../data/techColors.js";

const accents = [
  { color: "text-green-500", icon: "ri-code-box-fill" },
  { color: "text-amber-500", icon: "ri-gamepad-fill" },
  { color: "text-blue-500", icon: "ri-layout-grid-fill" },
  { color: "text-purple-500", icon: "ri-film-fill" },
  { color: "text-rose-500", icon: "ri-rocket-fill" },
];

/**
 * ProjectSection - Clean, polished version
 * - Scroll animations trigger once
 * - Side-to-side carousel transitions
 * - Static tech badges (no blinking)
 */
function ProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLive, setShowLive] = useState(false);
  const [direction, setDirection] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-70% 0px 0px 0px" });

  const project = ProjectsData[activeIndex];
  const accent = accents[activeIndex % accents.length];

  const goPrev = () => {
    setDirection(-1);
    setShowLive(false);
    setActiveIndex((prev) => (prev === 0 ? ProjectsData.length - 1 : prev - 1));
  };

  const goNext = () => {
    setDirection(1);
    setShowLive(false);
    setActiveIndex((prev) => (prev === ProjectsData.length - 1 ? 0 : prev + 1));
  };

  const goTo = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setShowLive(false);
    setActiveIndex(index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Side-to-side slide animation for carousel
  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const contentSlideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
  };

  return (
    <div className="max-w-4xl mx-auto w-full" ref={sectionRef}>
      {/* Section Header */}
      <motion.div
        className="mb-12 text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="inline-flex items-center gap-2 text-txt-muted text-xs uppercase tracking-[0.15em] mb-4">
          <i className="ri-folder-3-fill text-amber-400 text-base"></i>
          <span>Selected Work</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-normal text-txt mb-4">
          Projects
        </h2>
        <p className="text-txt-muted max-w-lg text-lg mx-auto">
          A collection of things I've built while learning and growing as a
          developer.
        </p>
      </motion.div>

      {/* Main Showcase */}
      <motion.div
        className="relative"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="glass-card rounded-3xl overflow-hidden shadow-sm">
          {/* Browser Chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-elevated border-b border-bdr">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <span className="ml-4 text-xs text-txt-muted font-medium">
                {project.name}
              </span>
            </div>

            {/* View Toggle */}
            {project.liveUrl && (
              <div className="flex items-center gap-1 bg-alt rounded-lg p-1">
                <button
                  onClick={() => setShowLive(false)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    !showLive
                      ? "bg-surface text-txt shadow-sm"
                      : "text-txt-muted hover:text-txt-secondary"
                  }`}
                >
                  <i className="ri-image-line mr-1"></i>
                  Preview
                </button>
                <button
                  onClick={() => setShowLive(true)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    showLive
                      ? "bg-surface text-txt shadow-sm"
                      : "text-txt-muted hover:text-txt-secondary"
                  }`}
                >
                  <i className="ri-play-circle-line mr-1"></i>
                  Live
                </button>
              </div>
            )}
          </div>

          {/* Preview Area */}
          <div className="relative h-[350px] md:h-[420px] bg-elevated overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {showLive && project.liveUrl ? (
                <motion.iframe
                  key={`live-${activeIndex}`}
                  src={project.liveUrl}
                  className="w-full h-full border-0"
                  title={`Live preview of ${project.name}`}
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.div
                  key={`preview-${activeIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0"
                >
                  {project.bgImage ? (
                    <div
                      className="absolute inset-0 bg-cover bg-top"
                      style={{ backgroundImage: `url(${project.bgImage})` }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
                      <i
                        className={`${accent.icon} text-9xl text-stone-600`}
                      ></i>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Project Info */}
          <div className="p-5 md:p-6 border-t border-bdr-light">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={contentSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                {/* Title + Description */}
                <div className="mb-4">
                  <h3 className="font-serif text-xl md:text-2xl font-normal text-txt mb-2">
                    {project.name}
                  </h3>
                  <p className="text-txt-muted text-sm md:text-base line-clamp-2">
                    {project.projectDescription}
                  </p>
                </div>

                {/* Tech + Actions Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech Stack - Static badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack?.map((tech, i) => {
                      const colors = techColors[tech] || defaultTech;
                      return (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 ${colors.bg} ${colors.text} rounded-md text-xs font-medium`}
                        >
                          <i className={`${colors.icon} text-[10px]`}></i>
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-btn-primary text-btn-primary-text rounded-lg text-sm font-medium hover:bg-btn-primary-hover transition-colors duration-150"
                    >
                      <i className="ri-article-line text-xs"></i>
                      Details
                    </button>
                    {project.githubRepo && (
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-bdr text-txt-secondary rounded-lg text-sm font-medium hover:bg-elevated hover:border-bdr-strong transition-colors duration-150"
                      >
                        <i className="ri-github-fill text-xs"></i>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          aria-label="Previous project"
          className="absolute -left-4 md:-left-5 top-[250px] md:top-[300px] w-10 h-10 md:w-12 md:h-12 rounded-full glass-card shadow-lg flex items-center justify-center text-txt-secondary hover:scale-110 transition-transform duration-150 z-10"
        >
          <i className="ri-arrow-left-s-line text-xl"></i>
        </button>
        <button
          onClick={goNext}
          aria-label="Next project"
          className="absolute -right-4 md:-right-5 top-[250px] md:top-[300px] w-10 h-10 md:w-12 md:h-12 rounded-full glass-card shadow-lg flex items-center justify-center text-txt-secondary hover:scale-110 transition-transform duration-150 z-10"
        >
          <i className="ri-arrow-right-s-line text-xl"></i>
        </button>
      </motion.div>

      {/* Thumbnail Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {ProjectsData.map((proj, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            style={{ width: "112px", height: "63px" }}
            className={`relative rounded-xl overflow-hidden border-2 transition-all duration-150 bg-elevated ${
              index === activeIndex
                ? "border-stone-400 shadow-lg"
                : "border-bdr opacity-50 hover:opacity-100 hover:border-bdr-strong"
            }`}
          >
            {proj.bgImage ? (
              <img
                src={proj.bgImage}
                alt={proj.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                <i
                  className={`${accents[index % accents.length].icon} text-xl text-stone-500`}
                ></i>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ProjectPopup
            project={{
              name: project.name,
              description: project.projectDescription,
              githubRepo: project.githubRepo,
              liveUrl: project.liveUrl,
              info: project.projectInfo,
              challenges: project.challenges,
              skillsLearned: project.skillsLearned,
              bgImage: project.bgImage,
              techStack: project.techStack,
              details: project.details,
            }}
            onClose={() => setIsModalOpen(false)}
            accent={accent}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectSection;
