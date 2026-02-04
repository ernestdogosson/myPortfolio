import { motion } from "framer-motion";

/**
 * HoverScale - Subtle scale on hover (for cards, buttons)
 */
export function HoverScale({
  children,
  scale = 1.02,
  className = "",
  ...props
}) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * HoverLift - Lift up effect on hover (for cards)
 */
export function HoverLift({
  children,
  y = -4,
  className = "",
  ...props
}) {
  return (
    <motion.div
      whileHover={{ y, transition: { duration: 0.2 } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * MagneticButton - Button that follows cursor slightly
 */
export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  ...props
}) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * TextReveal - Character-by-character text reveal
 */
export function TextReveal({
  text,
  delay = 0,
  className = "",
  charDelay = 0.03,
}) {
  const characters = text.split("");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: charDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * SlideIn - Slide animation with configurable direction
 */
export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.5,
  className = "",
}) {
  const slideVariants = {
    left: { x: -60, opacity: 0 },
    right: { x: 60, opacity: 0 },
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
  };

  return (
    <motion.div
      initial={slideVariants[direction]}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * PulseGlow - Subtle pulsing glow effect for accent elements
 */
export function PulseGlow({
  children,
  className = "",
  color = "rgba(34, 197, 94, 0.4)",
}) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 0 0 ${color}`,
          `0 0 0 8px transparent`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default HoverScale;
