import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10" style={{ backgroundColor: "hsl(var(--wave))" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <ul className="flex flex-wrap gap-6 text-sm">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-foreground transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="text-muted-foreground hover:text-foreground transition">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/alaricomv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-background hover:shadow-md transition"
              >
                <FaGithub className="w-5 h-5 text-foreground" />
              </a>

              <a
                href="https://www.linkedin.com/in/alarico-mercado-255814b7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-background hover:shadow-md transition"
              >
                <FaLinkedin className="w-5 h-5 text-foreground" />
              </a>

              <a
                href="mailto:alaricomeva@gmail.com"
                aria-label="Email"
                className="p-2 rounded-lg bg-background hover:shadow-md transition"
              >
                <FaEnvelope className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-foreground/10 mt-8 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Created by Alarico Mercado Vazquez.
          </p>
        </div>
      </div>
    </footer>
  );
};
