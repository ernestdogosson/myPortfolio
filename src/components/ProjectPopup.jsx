import { useEffect } from "react";
import { motion } from "framer-motion";
import { techColors, defaultTech } from "../data/techColors.js";

/**
 * ProjectPopup with enhanced framer-motion animations
 *
 * Animations added:
 * - Backdrop: Smooth blur + fade in
 * - Modal: Spring-based scale + slide up entrance
 * - Image section: Subtle zoom effect
 * - Content: Staggered reveal of sections
 * - Close button: Rotate on hover
 * - Tech badges: Pop-in with stagger
 * - Features list: Slide in from left with stagger
 * - Action buttons: Scale on hover
 */
function ProjectPopup({ project, onClose, accent }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-backdrop backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="bg-[#141920] border border-bdr rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full max-h-[90vh]"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Side by side layout: 60% image, 40% content */}
        <div className="flex flex-col md:flex-row h-full md:h-[600px]">
          {/* Image Section - 60% */}
          <motion.div
            className="relative w-full md:w-[60%] h-[250px] md:h-full bg-elevated flex-shrink-0 overflow-hidden"
            variants={imageVariants}
          >
            {project.bgImage ? (
              <motion.img
                src={project.bgImage}
                alt={project.name}
                className="w-full h-full object-cover object-top"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
                <motion.i
                  className={`${accent?.icon || 'ri-code-box-fill'} text-8xl text-stone-600`}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                />
              </div>
            )}
          </motion.div>

          {/* Content Section - 40% */}
          <div className="w-full md:w-[40%] p-6 md:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative">
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-elevated text-txt-muted hover:bg-alt hover:text-txt-secondary transition-colors flex items-center justify-center"
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="ri-close-line text-lg"></i>
            </motion.button>

            {/* Card label */}
            <motion.div
              className="flex items-center gap-2 text-txt-muted text-[0.65rem] uppercase tracking-[0.15em] mb-3"
              variants={contentVariants}
            >
              <i className={`${accent?.icon || 'ri-folder-3-fill'} ${accent?.color || 'text-amber-500'} text-sm`}></i>
              <span>Project Details</span>
            </motion.div>

            {/* Project Title */}
            <motion.h2
              className="font-serif text-2xl md:text-3xl font-normal text-txt mb-4 pr-10"
              variants={contentVariants}
            >
              {project.name}
            </motion.h2>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <motion.div className="flex flex-wrap gap-1.5 mb-5" variants={contentVariants}>
                {project.techStack.map((tech, i) => {
                  const colors = techColors[tech] || defaultTech;
                  return (
                    <motion.span
                      key={i}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 ${colors.bg} ${colors.text} rounded-lg text-xs font-medium`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <i className={`${colors.icon} text-xs`}></i>
                      {tech}
                    </motion.span>
                  );
                })}
              </motion.div>
            )}

            {/* About */}
            <motion.div className="mb-5" variants={contentVariants}>
              <h3 className="flex items-center gap-2 text-txt-muted text-xs uppercase tracking-[0.1em] mb-2">
                <i className="ri-information-line text-blue-500"></i>
                About
              </h3>
              <p className="text-txt-secondary leading-relaxed text-sm">
                {project.details?.longDescription || project.description}
              </p>
            </motion.div>

            {/* Features */}
            {project.details?.features && (
              <motion.div className="mb-5" variants={contentVariants}>
                <h3 className="flex items-center gap-2 text-txt-muted text-xs uppercase tracking-[0.1em] mb-2">
                  <i className="ri-star-line text-amber-500"></i>
                  Key Features
                </h3>
                <ul className="space-y-1.5">
                  {project.details.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-txt-secondary text-sm"
                      variants={featureVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <motion.i
                        className="ri-checkbox-circle-fill text-green-500 mt-0.5 text-xs"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 400 }}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Design Notes */}
            {project.details?.designNotes && (
              <motion.div className="mb-6" variants={contentVariants}>
                <h3 className="flex items-center gap-2 text-txt-muted text-xs uppercase tracking-[0.1em] mb-2">
                  <i className="ri-pencil-ruler-2-line text-purple-500"></i>
                  Design Notes
                </h3>
                <p className="text-txt-secondary leading-relaxed text-sm">
                  {project.details.designNotes}
                </p>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              className="flex items-center gap-3 pt-5 border-t border-bdr-light"
              variants={contentVariants}
            >
              {project.githubRepo && (
                <motion.a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-btn-primary text-btn-primary-text rounded-lg text-sm font-medium hover:bg-btn-primary-hover transition-colors duration-150"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="ri-github-fill"></i>
                  View Code
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-bdr text-txt-secondary rounded-lg text-sm font-medium hover:bg-elevated hover:border-bdr-strong transition-colors duration-150"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="ri-external-link-line"></i>
                  View Live
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectPopup;
