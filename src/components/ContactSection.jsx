import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-visible">
      <div className="container mx-auto flex justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-2xl bg-card rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">
            Contact
          </h2>

          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg">
                <FaEnvelope className="w-5 h-5 !text-black" />
              </div>
              <div>
                <p className="font-medium text-black">Email</p>
                <a className="text-sm text-black" href="mailto:alaricomeva@gmail.com">alaricomeva@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg">
                <FaPhone className="w-5 h-5 !text-black" />
              </div>
              <div>
                <p className="font-medium text-black">Phone</p>
                <div className="text-sm text-black">
                  <a href="tel:+17787937846">+1 (778) 793-7846</a><br/>
                  <a href="tel:+525518294302">+52 55 1829 4302</a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg">
                <FaMapMarkerAlt className="w-5 h-5 !text-black" />
              </div>
              <div>
                <p className="font-medium text-black">Location</p>
                <p className="text-sm text-black">Vancouver, Canada</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/alaricomv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center p-4  rounded-full hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <FaGithub className="w-7 h-7 !text-black" />
              </a>

              <a
                href="https://www.linkedin.com/in/alarico-mercado-255814b7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center p-4 rounded-full hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <FaLinkedin className="w-7 h-7 !text-black" />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:alaricomeva@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-95 transition"
              >
                <FaEnvelope className="w-4 h-4" />
                <span className="font-medium">Email me</span>
              </a>

              <a
                href="src/assets/CV2025_Alarico_Mercado.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black rounded-lg bg-transparent hover:bg-card transition text-black"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
