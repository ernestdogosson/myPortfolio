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
      className="relative min-h-screen flex items-center px-6 pt-20"
      id="home"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-12">
        {/* Text column — left-aligned, not centered */}
        <motion.div
          className="order-2 md:order-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Role */}
          <motion.p
            className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4"
            variants={itemVariants}
          >
            Fullstack Developer
          </motion.p>

          {/* Name with accent dot */}
          <motion.h1
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal text-txt mb-6 leading-[0.95] tracking-[-0.025em]"
            variants={itemVariants}
          >
            <span className="inline-block w-3 h-3 bg-accent rounded-full mr-3 mb-2" />
            Ernest
            <br />
            Dogo
          </motion.h1>

          {/* Bio */}
          <motion.p
            className="text-lg text-txt-secondary leading-relaxed mb-6 max-w-md mx-auto md:mx-0"
            variants={itemVariants}
          >
            I build fullstack web applications end to end — React and Tailwind
            on the frontend, Node.js, Express, and PostgreSQL underneath.
          </motion.p>

          {/* Location */}
          <motion.div
            className="flex items-center justify-center md:justify-start gap-2 text-txt-muted text-sm mb-8"
            variants={itemVariants}
          >
            <i className="ri-map-pin-2-fill text-rose-400"></i>
            <span>Helsingborg, Sweden</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
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
        </motion.div>

        {/* Photo column */}
        <motion.div
          className="order-1 md:order-2 flex justify-center md:justify-end"
          variants={profileVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="relative">
            {/* The ring — larger than the photo, offset behind it. This
                shape is the site's signature and echoes elsewhere. */}
            <motion.div
              className="ring-motif absolute -inset-4 rounded-full"
              initial={{ opacity: 0.5 }}
              variants={{ hover: { opacity: 0.8, scale: 1.04 } }}
              transition={springSettleFast}
            />
            <motion.div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-bdr shadow-lg ring-1 ring-white/5"
              variants={{ hover: { scale: 1.03 } }}
              transition={springSettleFast}
            >
              <img
                src={profilePic}
                alt="Ernest Dogo"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — anchored to viewport bottom, not the text flow */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
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
    </section>
  );
}

export default HeroSection;
