import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Contact section - clean, polished version
 * - Animations trigger once only (no blinking)
 * - Removed unused variants
 * - Simple CSS hover effects
 */
function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const contactLinks = [
    {
      href: "https://linkedin.com/in/ernestdogo",
      icon: "ri-linkedin-box-fill",
      iconBg: "bg-blue-50",
      iconHoverBg: "group-hover:bg-blue-100",
      iconColor: "text-blue-600",
      title: "LinkedIn",
      subtitle: "Connect with me professionally",
    },
    {
      href: "https://github.com/ernestdogosson",
      icon: "ri-github-fill",
      iconBg: "bg-stone-100",
      iconHoverBg: "group-hover:bg-stone-200",
      iconColor: "text-stone-700",
      title: "GitHub",
      subtitle: "Check out my code",
    },
    {
      href: "mailto:dogoernest@outlook.com",
      icon: "ri-mail-fill",
      iconBg: "bg-green-50",
      iconHoverBg: "group-hover:bg-green-100",
      iconColor: "text-green-600",
      title: "Email",
      subtitle: "Send me a message",
      isEmail: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 border-t border-stone-200"
      ref={sectionRef}
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-stone-400 text-xs uppercase tracking-[0.15em] mb-4">
            <i className="ri-mail-send-fill text-blue-500 text-base"></i>
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-stone-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-stone-500 text-lg">
            Interested in working together? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target={link.isEmail ? undefined : "_blank"}
              rel={link.isEmail ? undefined : "noopener noreferrer"}
              className="bg-white rounded-2xl border border-stone-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${link.iconBg} flex items-center justify-center mb-4 ${link.iconHoverBg} transition-colors`}
              >
                <i className={`${link.icon} text-2xl ${link.iconColor}`}></i>
              </div>
              <p className="text-stone-900 font-medium mb-1">{link.title}</p>
              <p className="text-sm text-stone-500 mb-3">
                {link.subtitle}
              </p>
              <span className="inline-flex items-center text-sm text-stone-400 group-hover:text-stone-600 transition-colors">
                <span className="group-hover:underline">{link.isEmail ? "Send email" : "Visit"}</span>
                <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer hint */}
        <motion.p
          className="text-center text-stone-400 text-sm mt-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <i className="ri-time-line mr-1"></i>
          Usually respond within 24 hours
        </motion.p>
      </div>
    </section>
  );
}

export default Contact;
