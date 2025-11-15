import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

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
    subtitle: "Small Business Organization System",
    description: "A full-stack web application helping small retailers manage daily operations in one centralized system.",
    imageUrls: ["/src/assets/images/transacto-home.png",
      "/src/assets/images/transacto-operations.png",
      "/src/assets/images/transacto-reports.png"
    ],
    link: "https://transactoapp.xyz",
    dateRange: "March 2025 – June 2025",
    technologies: ["Angular", "Node.js", "Express", "MySQL", "AWS EC2"],
    features: [
      "User registration & secure login",
      "Transaction recording",
      "Custom date-based reports",
      "Responsive UI"
    ],
    githubLink: "https://github.com/alaricomv/Store-transactions-and-organization-system",
  },
  {
    title: "Task Manager App",
    subtitle: "Full-Stack Task Management Tool",
    description: "A comprehensive task management solution with real-time updates and authentication.",
    imageUrls: ["/src/assets/images/parking-signup.png",
      "/src/assets/images/parking-app.png",
      "/src/assets/images/parking-calendar.png"
    ],
    link: "https://parking.exchange",
    dateRange: "Your Date Range",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Real-time updates",
      "User authentication",
      "Task scheduling",
      "Team collaboration"
    ]
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description: "A responsive portfolio website built with React and Tailwind CSS.",
    imageUrls: ["/images/portfolio.png"],
    link: "",
    dateRange: "2025",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Smooth animations",
      "Dark mode support"
    ],
    githubLink: "https://github.com/alaricomv/Portfolio",
  }
];

const otherProjects = [
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description: "A responsive portfolio website built with React and Tailwind CSS.",
    
    link: "",
    dateRange: "2025",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Smooth animations",
      "Dark mode support"
    ],
    githubLink: "#",
  }
];

export const ProjectsSection = () => {
  return (
    <>
    <section id="projects" className="py-24 pb-80 bg-background relative overflow-visible">
      <div className="container mx-auto overflow-visible">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Live Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 overflow-visible">
          {projects.map((project, index) => (
            <div key={index} className="overflow-visible">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, zIndex: 20 }}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block relative h-full flex flex-col"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <ImageCarousel images={project.imageUrls} />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                    <p className="text-sm text-black/60">{project.subtitle}</p>
                    <p className="text-xs text-black/50 mt-1">{project.dateRange}</p>
                  </div>
                  
                  <p className="text-black/70 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-black/60 mb-2">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-black/10 text-black text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-xs font-semibold text-black/60 mb-2">KEY FEATURES</p>
                    <ul className="text-xs text-black/70 space-y-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.a>
              {/* GitHub Button - Only render if githubLink is not empty */}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center mt-6">
                  <FaGithub className="text-foreground w-8 h-8 " />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="other-projects" className="py-24 bg-background relative overflow-visible">
      <div className="container mx-auto overflow-visible">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Other Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 overflow-visible">
          {otherProjects.map((project, index) => (
            <div key={index} className="overflow-visible">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, zIndex: 20 }}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block relative h-full flex flex-col"
              >
                <div className="overflow-hidden rounded-t-lg">
                  {project.imageUrls && (
                    <ImageCarousel images={project.imageUrls} />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                    <p className="text-sm text-black/60">{project.subtitle}</p>
                    <p className="text-xs text-black/50 mt-1">{project.dateRange}</p>
                  </div>
                  
                  <p className="text-black/70 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-black/60 mb-2">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-black/10 text-black text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-xs font-semibold text-black/60 mb-2">KEY FEATURES</p>
                    <ul className="text-xs text-black/70 space-y-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.a>
              {/* GitHub Button - Only render if githubLink is not empty */}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center mt-4">
                  <FaGithub className="text-foreground w-8 h-8 " />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

