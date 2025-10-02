"use client";

import React, { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const WorkSection = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
    };
  }, []);

  const work = [
    {
      company: "Sandman Media",
      role: "Full-Stack Developer (Intern)",
      period: "September 2023 – December 2023",
      bullets: [
        "Developed and maintained client websites using PHP within a Joomla environment; implemented MVC modules for Joomla and used MySQL for data management.",
        "Fixed bugs and added frontend and backend features across multiple sites; trained new developers during final month; worked with cloud servers.",
        "Built an MVC PHP module for a parking reservation system with CRON jobs and documentation; produced diagrams for future development; live at https://parking.exchange/.",
      ],
    },
    {
      company: "Oracle",
      role: "Software Developer",
      period: "January 2022 – August 2022",
      bullets: [
        "Completed a 1-month remote training on shell usage and git; contributed to public Java projects handling SQL and NoSQL databases, focusing on data extraction and repurposing.",
        "Fixed data-detection bugs and added alerting; implemented features to retrieve specific data and metadata for reuse across similar projects.",
        "Collaborated with the big data team to support ongoing projects and ran biweekly feedback checks.",
      ],
    },
  ];

  return (
    <section id="work" className="py-24 relative overflow-hidden" aria-label="Work Experience">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-700/12 via-transparent to-indigo-700/6" />

      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-muted-foreground">Work Experience</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:flex-wrap md:gap-8"
        >
          {work.map((w, idx) => (
            <motion.article
              key={idx}
              variants={item}
              className="group p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-tr from-white/6 to-white/3 border border-white/8 shadow-lg hover:shadow-2xl transition-all transform-gpu"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1 flex flex-col items-center text-center">
                  <div className="bg-primary text-white p-3 rounded-full shadow-md transform transition-transform group-hover:scale-105 mb-2">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{w.period}</div>
                    <h3 className="text-2xl md:text-3xl font-semibold mt-1 text-muted-foreground group-hover:text-primary transition-colors">{w.role}</h3>
                    <div className="text-lg text-primary/90 font-semibold mt-1">{w.company}</div>
                  </div>
                </div>
              </div>

              <ul className="mt-3 list-disc list-inside text-base text-muted-foreground space-y-2">
                {w.bullets.map((b, i) => (
                  <motion.li key={i} variants={item} whileHover={!prefersReducedMotion ? { x: 6 } : {}} className="transition-colors">
                    {typeof b === "string" && b.includes("https://") ? (
                      <a className="text-primary underline-offset-4 hover:underline" href={b.match(/https?:\/\/\S+/)?.[0]} target="_blank" rel="noreferrer">
                        {b}
                      </a>
                    ) : (
                      b
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

