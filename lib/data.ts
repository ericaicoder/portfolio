import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBusinessTime } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import imagetoplaylistImg from "@/public/imagetoplaylist.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Xidian University",
    location: "Xi'an, China",
    description:
      "I graduated with a Bachelor's degree in Computer Science and Engineering at Xidian University.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "iOS Developer",
    location: "Beijing, China",
    description:
      "I worked as a iOS developer for 3 years. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2018",
  },
  {
    title: "Senior iOS Engineer",
    location: "Beijing, China",
    description:
      "I worked as a Senior iOS Engineer at Kuaishou (K4 level), where I managed a team of 20 engineers across iOS, Android, Frontend and Backend development.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Full-Stack Developer & Solo founder",
    location: "1 person company",
    description:
      "I'm now running my own startup company.",
    icon: React.createElement(FaBusinessTime),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ImageToPlaylist",
    description:
      "Parse song information from image and generate a playlist by AI",
    tags: ["React", "Next.js", "Python", "Tailwind", "PostgreSQL", "Prisma"],
    imageUrl: imagetoplaylistImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Xcode",
  "Swift",
  "React Native",
  "SwiftUI",
  "AI Agent",
  "RAG",
] as const;
