import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import About from "./sections/About.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Contact from "./sections/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";

function App() {
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: false, margin: "-50px" });

  return (
    <div className="relative z-10">
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
        className="py-12 px-6 border-t border-stone-200 text-center"
        initial={{ opacity: 0 }}
        animate={footerInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-stone-400 text-sm"
          initial={{ y: 10 }}
          animate={footerInView ? { y: 0 } : { y: 10 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          © {new Date().getFullYear()} Ernest Dogo. Built with React & Tailwind CSS.
        </motion.p>
      </motion.footer>
    </div>
  );
}

export default App;
