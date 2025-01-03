import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import musiclubImg from "@/public/musiclub.png";

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
    icon: React.createElement(FaReact),
    date: "2018 - 2022",
  },
  {
    title: "Full-Stack Developer & Solo founder",
    location: "1 person company",
    description:
      "I'm now running my own startup company.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Musiclub",
    description:
      "Musiclub is a playlist hub where you can manage, share and discover music playlists for all platforms (Apple Music, Spotify, YouTube, etc).",
    tags: ["React", "Next.js", "Python", "Tailwind", "PostgreSQL", "Prisma"],
    imageUrl: musiclubImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Xcode",
  "Swift",
  "React Native",
  "SwiftUI",
] as const;
