import { useEffect, useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./css/Hero.css";

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
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient mb-4">
        Alarico Mercado Vazquez
      </h1>

      {/* Typewriter effect */}
      <h2 className="text-2xl sm:text-3xl font-medium text-center text-muted-foreground">
        <Typewriter
          options={{
            strings: ["Full-Stack Developer", "Software Developer"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h2>

      <p className="mt-6 text-base sm:text-lg text-center max-w-xl text-muted-foreground">
        I am a passionate developer with experience in building web applications.
      </p>

      {/* Button to open PDF popup */}
      <button
        onClick={togglePopup}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        My CV
      </button>

      {/* Popup for PDF viewer */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              ref={popupRef} // Attach ref to the popup
              className="bg-white rounded-lg p-4 max-w-7xl w-full" // Increased max width
            >
              <button
                onClick={togglePopup}
                className="absolute top-2 right-2 text-gray-600"
              >
                &times;
              </button>
              <h3 className="text-lg font-semibold mb-2">PDF Viewer</h3>
              <iframe
                src="src/assets/CV2025_Alarico_Mercado.pdf" // Replace with your PDF file path
                width="100%"
                height="700px" // Increased height
                className="border"
                title="PDF Viewer"
              />
              <a
                href="src/assets/CV2025_Alarico_Mercado.pdf" // Replace with your PDF file path
                download
                className="mt-2 inline-block text-blue-500 hover:underline"
              >
                Download PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator with fade-out */}
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