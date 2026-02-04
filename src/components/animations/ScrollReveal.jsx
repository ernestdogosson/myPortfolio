import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * ScrollReveal - Reveals elements when they enter the viewport
 * Inspired by Joly UI's reveal animations
 */
export function ScrollReveal({
  children,
  direction = "up", // up, down, left, right
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeIn - Simple fade animation on scroll
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer - Container for staggered children animations
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delay = 0,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem - Individual item in a stagger animation
 */
export function StaggerItem({
  children,
  direction = "up",
  distance = 30,
  className = "",
}) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directions[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScaleIn - Scale up animation on scroll
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * BlurIn - Blur + fade animation (inspired by Joly UI text effects)
 */
export function BlurIn({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
