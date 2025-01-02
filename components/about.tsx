"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a passionate software developer with a strong foundation in{" "}
        <span className="font-medium">full-stack web/client development</span>. What
        drives me most is the creative and analytical aspects of programming - I
        thrive on architecting elegant solutions to complex problems. My expertise
        lies in modern technologies, particularly{" "}
        <span className="font-medium">
          LLM, Image generation, and AI Agents
        </span>
        . I have a keen interest in building AI agents and intelligent systems
        that can understand and interact naturally with users. Currently, I'm
        focused on expanding my knowledge in machine learning, natural language
        processing, and developing AI-powered applications that solve real-world
        problems.
      </p>

      <p>
        Beyond coding, I'm deeply fascinated by AI and its potential to transform our world.
        I'm always excited to connect with others who share my passion for AI and discuss innovative ways to apply this technology.
      </p>
    </motion.section>
  );
}
