import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.jpg";
import { springSettle, springSettleFast, springMomentum, pressTap } from "../utils/motion.js";

function HeroSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springSettle,
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: springSettle,
    },
  };

  const buttonHover = { scale: 1.03, transition: springMomentum };
  const buttonTap = pressTap;

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
        {/* Profile Image with blue glow */}
        <motion.div
          className="mb-8 inline-block relative"
          variants={profileVariants}
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 rounded-full blur-[50px]"
            style={{ background: "#3b82f6" }}
            initial={{ opacity: 0.25, scale: 1.1 }}
            variants={{ hover: { opacity: 0.4, scale: 1.2 } }}
            transition={springSettleFast}
          />
          <motion.div
            className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-bdr shadow-lg ring-1 ring-white/5"
            variants={{ hover: { scale: 1.03 } }}
            transition={springSettleFast}
          >
            <img
              src={profilePic}
              alt="Ernest Dogo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Name with blue accent dot */}
        <motion.h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-txt mb-4 leading-[1.02] tracking-[-0.02em]"
          variants={itemVariants}
        >
          <span className="inline-block w-3 h-3 bg-accent rounded-full mr-3 mb-1" />
          Ernest Dogo
        </motion.h1>

        {/* Role */}
        <motion.p
          className="text-sm font-medium text-cyan-400 uppercase tracking-[0.2em] mb-6"
          variants={itemVariants}
        >
          Fullstack Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          className="text-lg text-txt-secondary leading-relaxed mb-8 max-w-lg mx-auto"
          variants={itemVariants}
        >
          I build fullstack web applications end to end — React and Tailwind
          on the frontend, Node.js, Express, and PostgreSQL underneath.
        </motion.p>

        {/* Location */}
        <motion.div
          className="flex items-center justify-center gap-2 text-txt-muted text-sm mb-10"
          variants={itemVariants}
        >
          <i className="ri-map-pin-2-fill text-rose-400"></i>
          <span>Helsingborg, Sweden</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-xl text-sm font-medium transition-colors duration-150"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <i className="ri-folder-3-line"></i>
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="glass-card inline-flex items-center gap-2 px-6 py-3 text-txt-secondary rounded-xl text-sm font-medium"
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
            className="ri-arrow-down-line text-txt-muted text-xl"
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
