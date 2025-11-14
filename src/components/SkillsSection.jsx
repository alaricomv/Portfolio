import { motion } from "framer-motion";
import { 
  FaJs, FaPython, FaJava, FaReact, FaAngular, FaNodeJs, FaDatabase, FaGitAlt, FaCloud
} from "react-icons/fa";
import { 
  SiTypescript, SiCplusplus, SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiSocketdotio 
} from "react-icons/si";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { icon: <FaJs className="text-yellow-500 text-4xl" />, name: "JavaScript" },
      { icon: <SiTypescript className="text-blue-600 text-4xl" />, name: "TypeScript" },
      { icon: <FaPython className="text-blue-400 text-4xl" />, name: "Python" },
      { icon: <FaJava className="text-red-600 text-4xl" />, name: "Java" },
      { icon: <SiCplusplus className="text-blue-700 text-4xl" />, name: "C++" },
    ],
  },
  {
    category: "Frameworks & Environments",
    items: [
      { icon: <FaReact className="text-cyan-500 text-4xl" />, name: "React" },
      { icon: <FaAngular className="text-red-500 text-4xl" />, name: "Angular" },
      { icon: <FaNodeJs className="text-green-600 text-4xl" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-700 text-4xl" />, name: "Express" },
      { icon: <SiTailwindcss className="text-sky-400 text-4xl" />, name: "Tailwind CSS" },
      { icon: <SiSocketdotio className="text-black text-4xl" />, name: "Socket.io" },
      { icon: <FaCloud className="text-orange-500 text-4xl" />, name: "AWS" },
      { icon: <FaCloud className="text-blue-500 text-4xl" />, name: "Azure" },
    ],
  },
  {
    category: "Databases",
    items: [
      { icon: <SiMysql className="text-blue-500 text-4xl" />, name: "MySQL" },
      { icon: <SiMongodb className="text-green-500 text-4xl" />, name: "MongoDB" },
      { icon: <SiPostgresql className="text-indigo-600 text-4xl" />, name: "PostgreSQL" },
      { icon: <FaDatabase className="text-gray-600 text-4xl" />, name: "SQLite" },
    ],
  },
  {
    category: "Other Skills",
    items: [
      { icon: <FaGitAlt className="text-orange-600 text-4xl" />, name: "Git & GitHub" },
      { icon: <FaDatabase className="text-gray-600 text-4xl" />, name: "REST APIs" },
      { icon: <FaDatabase className="text-gray-600 text-4xl" />, name: "Agile/Scrum" },
      { icon: <FaDatabase className="text-gray-600 text-4xl" />, name: "Cloud Deployment" },
    ],
  },
  {
    category: "Languages",
    items: [
      { icon: <span className="text-black text-3xl">🌐</span>, name: "English" },
      { icon: <span className="text-black text-3xl">🌐</span>, name: "Spanish" },
      { icon: <span className="text-black text-3xl">🌐</span>, name: "French" },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-visible">
      <div className="container mx-auto overflow-visible">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Skills
        </h2>

        {/* Loop through categories */}
        <div className="space-y-12">
          {skills.map((skillCategory, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-center mb-6 ">
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 text-center">
                {skillCategory.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    {item.icon}
                    <span className="mt-2 text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
