import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.img
      key={images[current]}
      src={images[current]}
      alt="Project preview"
      className="w-full h-48 object-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};

const projects = [
  {
    title: "Transacto",
    description: "A sleek personal portfolio built with React and Tailwind CSS.",
    imageUrls: ["/src/assets/images/transacto-home.png",
      "/src/assets/images/transacto-operations.png",
      "/src/assets/images/transacto-reports.png"
    ],
    link: "https://transactoapp.xyz",
  },
  {
    title: "Task Manager App",
    description: "A full-stack task management tool with authentication and real-time updates.",
    imageUrls: ["/src/assets/images/parking-signup.png",
      "/src/assets/images/parking-app.png",
      "/src/assets/images/parking-calendar.png"
    ],
    link: "https://parking.exchange",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather app using OpenWeatherMap API and geolocation.",
    imageUrls: ["/images/weather.png"],
    link: "https://weatherdashboard.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    imageUrls: ["/images/portfolio.png"],
    link: "https://portfolio.com",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <ImageCarousel images={project.imageUrls} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
