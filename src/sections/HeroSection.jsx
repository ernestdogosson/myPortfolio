import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.jpg";

/**
 * HeroSection with page-load animations
 *
 * Animations added:
 * - Profile image: Scale up + fade with blur effect (creates focus)
 * - Name: Slide up + fade with slight delay (draws attention)
 * - Role badge: Fade in after name (hierarchy)
 * - Bio text: Gentle fade in (readable entrance)
 * - Location: Slide up from below
 * - CTA buttons: Staggered slide up (encourages action)
 * - Scroll indicator: Maintained bounce with delayed entrance
 */
function HeroSection() {
  // Staggered animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Individual item animations
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Profile image specific animation
  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Button hover animation
  const buttonHover = {
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  };

  const buttonTap = { scale: 0.98 };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-20"
      id="home"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div className="mb-8 inline-block" variants={profileVariants}>
          <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-stone-200 shadow-lg">
            <img
              src={profilePic}
              alt="Ernest Dogo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name with green accent dot */}
        <motion.h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-stone-900 mb-4 tracking-tight"
          variants={itemVariants}
        >
          <motion.span
            className="inline-block w-3 h-3 bg-green-500 rounded-full mr-3 mb-1"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.4)",
                "0 0 0 8px rgba(34, 197, 94, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1,
            }}
          />
          Ernest Dogo
        </motion.h1>

        {/* Role */}
        <motion.p
          className="text-sm font-medium text-stone-500 uppercase tracking-[0.2em] mb-6"
          variants={itemVariants}
        >
          Frontend Developer
        </motion.p>

        {/* Bio - more personality */}
        <motion.p
          className="text-lg text-stone-600 leading-relaxed mb-8 max-w-lg mx-auto"
          variants={itemVariants}
        >
          I craft clean interfaces and thoughtful experiences. Currently
          building with React, learning every day, and coaching football on the
          side.
        </motion.p>

        {/* Location */}
        <motion.div
          className="flex items-center justify-center gap-2 text-stone-500 text-sm mb-10"
          variants={itemVariants}
        >
          <i className="ri-map-pin-2-fill text-blue-500"></i>
          <span>Helsingborg, Sweden</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <i className="ri-folder-3-line"></i>
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-stone-200 text-stone-700 rounded-xl text-sm font-medium hover:border-stone-300 hover:bg-stone-50 transition-colors"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <i className="ri-mail-line"></i>
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.i
            className="ri-arrow-down-line text-stone-400 text-xl"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
