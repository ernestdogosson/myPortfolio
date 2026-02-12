import { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

/**
 * Navbar with entrance animation and mobile menu
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const targetY = element.getBoundingClientRect().top + window.scrollY - 80;
    const startY = window.scrollY;
    const diff = targetY - startY;
    const duration = 1000;
    let start;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      window.scrollTo(0, startY + diff * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "portfolio", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 md:backdrop-blur-0 backdrop-blur-xl bg-nav md:bg-transparent"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="px-6 md:px-12 py-5 flex justify-between items-center">
        {/* Logo/Name */}
        <motion.button
          onClick={() => scrollToSection("home")}
          className="font-serif text-xl text-txt hover:text-txt-secondary transition-colors duration-150"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2" />
          ED
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-txt-muted hover:text-txt transition-colors relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-txt-muted hover:text-txt p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <i className={`${isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"} text-xl`}></i>
        </motion.button>
        </div>

        {/* Scroll progress bar — mobile only */}
        <div className="relative h-px bg-bdr-light md:hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-backdrop backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.nav
              className="absolute top-[73px] left-0 right-0 glass-card border-b border-bdr shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 text-txt-secondary hover:text-txt hover:bg-elevated rounded-xl transition-colors text-base font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
