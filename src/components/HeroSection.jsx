import { useEffect, useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./css/Hero.css";
import heroGif from "../assets/images/hero-gif.gif"; 

export const HeroSection = () => {
  const [showScroll, setShowScroll] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const popupRef = useRef(null); // Ref for the popup

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false); // Close popup if clicked outside
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside); // Listen for clicks

    // Disable scrolling when popup is open
    if (showPopup) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      document.body.style.backgroundColor = "gray"; // Change background color
    } else {
      document.body.style.overflow = ""; // Restore scrolling
      document.body.style.backgroundColor = ""; // Restore background color
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside); // Clean up listener
      document.body.style.overflow = ""; // Restore scrolling on cleanup
      document.body.style.backgroundColor = ""; // Restore background color on cleanup
    };
  }, [showPopup]); // Add showPopup to the dependency array

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 py-12">
        {/* Left: text column */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{once: false, amount:0.2}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-7/12 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient mb-4">
            Alarico Mercado Vazquez
          </h1>

          <h2 className="text-xl md:text-2xl font-medium mb-4 text-muted-foreground">
            <Typewriter
              options={{
                strings: ["Full-Stack Developer", "Software Developer"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h2>

          <p className="mb-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            I am a passionate developer with experience in building web applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 md:gap-4">
            <button
              onClick={togglePopup}
              className="px-5 py-2 bg-primary text-primary-foreground rounded-md shadow hover:opacity-95"
            >
              My CV
            </button>

            <a
              href="#projects"
              className="px-5 py-2 border rounded-md text-foreground bg-transparent hover:bg-card"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right: gif column */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{once: false, amount:0.2}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-5/12 flex justify-center md:justify-end"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block rounded-lg overflow-hidden"
            style={{ maxWidth: 360 }}
          >
            <img
              src={heroGif}
              alt="Animated illustration"
              className="w-72 h-72 md:w-96 md:h-96 object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Popup for PDF viewer */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              ref={popupRef}
              className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4 md:mx-0"
              style={{ height: "85vh", display: "flex", flexDirection: "column", overflow: "hidden" }}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold mb-2">PDF Viewer</h3>
                <button
                  onClick={togglePopup}
                  className="ml-4 text-gray-600"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>

              <div className="flex-1 min-h-0">
                <iframe
                  src="src/assets/CV2025_Alarico_Mercado.pdf"
                  title="PDF Viewer"
                  className="w-full h-full border"
                  onMouseDown={(e) => e.stopPropagation()}
                  style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                />
              </div>

              <div className="mt-3">
                <a
                  href="src/assets/CV2025_Alarico_Mercado.pdf"
                  download
                  className="inline-block text-blue-500 hover:underline"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};