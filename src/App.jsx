import { useRef } from "react";
import { motion, useInView, MotionConfig } from "framer-motion";
import About from "./sections/About.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Contact from "./sections/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import { fadeUp, springSettleFast } from "./utils/motion.js";

function App() {
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, margin: "-70% 0px 0px 0px" });

  return (
    // reducedMotion="user" strips transform-driven motion (respecting the OS
    // setting) while leaving opacity/color transitions intact everywhere below.
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <Navbar />
        <main>
          <HeroSection />
          <Portfolio />
          <About />
          <Contact />
        </main>

        {/* Footer */}
        <motion.footer
          ref={footerRef}
          className="py-12 px-6 text-center"
          initial="hidden"
          animate={footerInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={springSettleFast}
        >
          <p className="text-txt-muted text-sm">
            © {new Date().getFullYear()} Ernest Dogo. Built with React & Tailwind CSS.
          </p>
        </motion.footer>
      </div>
    </MotionConfig>
  );
}

export default App;
