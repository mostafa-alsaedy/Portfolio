import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import docketImg from "@/public/docket.png";
import freshCartImg from "@/public/freshCart.png";
import gameReviewsImg from "@/public/gameReviews.png";
import yummyRecipesImg from "@/public/yummyRecipes.png";
import weatherAppImg from "@/public/weatherApp.png";


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
    title: "B.Sc. of Busniess Commerce - in Accounting (English Section)",
    location: "Alexandria University",
    description:
      "Studied business commerce with a focus on accounting, gaining analytical and financial expertise.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend Development Diploma",
    location: "Route Academy",
    description:
      "Completed an intensive Frontend Development diploma, mastering React, Next.js, and modern web technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2023/3 - 2023/9",
  },
  {
    title: "Frontend React Developer & Mentor",
    location: "Route Academy",
    description:
      "Guiding students in frontend development while building dynamic web applications using React and Next.js.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "FreshCart",
    description:
      "An e-commerce platform with a dynamic UI, designed for diverse shopping needs, where I contributed to front-end development and performance optimization.",
    tags: ["React", "Axios", "Formik", "Yup", "ReactQuery", "Bootstrap", "ContextAPI"],
    imageUrl: freshCartImg,
    website: "https://freshcart-main.vercel.app",
  },
  {
    title: "Docket",
    description:
      "A dynamic, API-driven note-taking platform with user authentication, allowing seamless creation, updating, and deletion of notes for efficient task management.",
    tags: ["React", "Axios", "ReactHookForm", "ZOD", "TailwindCSS", "ContextAPI"],
    imageUrl: docketImg,
    website: "https://docket-note-app.vercel.app",
  },
  {
    title: "Game Reviews",
    description:
      "This website uses JavaScript OOP for detailed game reviews across genres. it offers mobile-responsive, dynamic interfaces for reviews and ratings.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "ESNext", "JQuery"],
    imageUrl: gameReviewsImg,
    website: "https://game-reviews-black.vercel.app/",
  },
  {
    title: "Yummy Recipes",
    description:
      "Yummy is an online platform for food lovers to discover and explore delicious recipes and cooking tips, all in one place.",
    tags: ["HTML5", "JavaScript", "TailwindCSS", "JQuery"],
    imageUrl: yummyRecipesImg,
    website: "https://yummy-ruby-beta.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "A simple and responsive weather app that fetches real-time weather data, displaying key details like temperature and conditions. Built for a smooth user experience with API integration.",
    tags: ["HTML5", "CSS3", "JavaScript", "SweetAlert2"],
    imageUrl: weatherAppImg,
    website: "https://weather-app-one-phi-55.vercel.app/",
  }

] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "SASS(SCSS)",
  "Bootstrap",
  "TailwindCSS",
  "Material UI",
  "JavaScript",
  "TypeScript",
  "JQuery",
  "React.js",
  "Next.js",
  "Context API",
  "Redux",
  "React Query",
  "Framer Motion",
  "ESNext",
  "Git",
  "GitHub",
  "REST APIs",
  "GraphQL",
  "PHP",
  "MySQL",
  "OOP",
  "Problem Solving",
] as const;