import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { springSettleFast, pressTap } from "../utils/motion.js";

/**
 * Navbar — translucent material that materializes on scroll,
 * with a fluid active-section indicator that slides between links.
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  const navLinks = [
    { id: "portfolio", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <>
      {/* Plain fixed wrapper — no transform here, so it can't collide with
          Framer's own transform on the animated pill inside it. */}
      <div className="fixed top-3 md:top-5 inset-x-0 z-50 flex justify-center px-3 pointer-events-none">
      <motion.header
        className="pointer-events-auto w-full md:w-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springSettleFast}
      >
        <div
          className="flex justify-between md:justify-start items-center gap-1 px-3 md:px-3 py-2 rounded-full shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]"
          style={{
            backgroundColor: isScrolled ? "rgba(20, 25, 32, 0.75)" : "rgba(20, 25, 32, 0.55)",
            backdropFilter: "blur(20px) saturate(1.6)",
            WebkitBackdropFilter: "blur(20px) saturate(1.6)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderTopColor: "rgba(255, 255, 255, 0.18)",
          }}
        >
        {/* Logo/Name */}
        <motion.button
          onClick={() => scrollToSection("home")}
          className="font-serif text-lg text-txt px-3 py-1.5"
          whileHover={{ scale: 1.05 }}
          whileTap={pressTap}
          transition={springSettleFast}
        >
          <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2" />
          ED
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-1.5 text-sm rounded-full transition-colors ${
                activeSection === item.id ? "text-txt" : "text-txt-muted hover:text-txt-secondary"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, ...springSettleFast }}
              whileTap={pressTap}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-elevated rounded-full"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-txt-muted hover:text-txt p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={pressTap}
          transition={springSettleFast}
          aria-label="Toggle menu"
        >
          <i className={`${isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"} text-xl`}></i>
        </motion.button>
        </div>
      </motion.header>
      </div>

      {/* Scroll progress bar — mobile only, fixed to viewport top edge */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-40 md:hidden">
        <motion.div
          className="h-full bg-accent origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

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
              className="absolute top-20 left-3 right-3 glass-card-heavy rounded-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={springSettleFast}
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors text-base font-medium ${
                      activeSection === item.id
                        ? "text-txt bg-elevated"
                        : "text-txt-secondary hover:text-txt hover:bg-elevated"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, ...springSettleFast }}
                    whileTap={pressTap}
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
