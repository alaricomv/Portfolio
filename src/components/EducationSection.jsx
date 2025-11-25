
import { GraduationCap, LogOut } from "lucide-react";
import { motion } from "framer-motion";

export const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Applied Computer Science",
      school: "Fairleigh Dickinson University, Vancouver Canada",
      year: "2023 – 2024",
      logo: "/src/assets/images/fdu.jfif",
      details: [
        "Specialization: Advanced Computer Programming",
        "Capstone project on scalable web applications",
      ],
    },
    {
      degree: "Bachelor of Science – BSc, Computer Science and Engineering",
      school: "Monterrey Institute of Technology, Mexico",
      year: "2014 – 2018",
      logo: "/src/assets/images/ITESM.svg",
      details: [
        "Top private university in Mexico",
        "Graduated with strong foundation in algorithms and systems",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-muted/30 group 
                         select-none cursor-default border border-transparent
                         hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon + Year */}
              <div className="mb-3 flex items-center gap-2">
                <div className="bg-primary text-white p-2 rounded-full shadow-md group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-base text-muted-foreground">{edu.year}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>
              <div className="flex items-center justify-center gap-2 mt-2">
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  className="w-7 h-7 object-contain"
                />
                )}
                <p className="text-xl text-muted-foreground">{edu.school}</p>
              </div>

              <ul className="mt-4 list-disc list-inside text-base text-muted-foreground space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
