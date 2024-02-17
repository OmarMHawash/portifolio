import { NavItemType, ProjectMiniType, ProjectType } from "./types";

export const Projects: ProjectType[] = [
  {
    title: "Seepick - A Freepik Clone",
    desc: "A clone of the freepik website, build with react, bootstrap. It's a Fully responsive website, 8 different pages, featuring a complex seach page with filters, and a detailed page for each item. Also used selenium to scrape some data for testing.",
    github: "https://github.com/Yousef-Salah/freepik-clone",
    img: "/images/projects/seepick.webp",
    video: "",
    link: "https://freepik-clone.vercel.app",
    techs: [
      { title: "React", color: "blue" },
      { title: "Bootstrap", color: "purple" },
      { title: "Selenium", color: "green" },
      { title: "Vercel", color: "black" },
    ],
    updatedAT: 163000023412,
    rating: 10,
    type: "school",
  },
  {
    title: "EcBulider - Landing Page Builder",
    desc: "A landing page builder, build with laravel, and react (with typescript). it offers a simple interface to choose components and colors for the page, and export it as a react project.",
    github: "https://github.com/OmarMHawash/ecBuilder",
    img: "/images/projects/ecbuilder.jpeg",
    video: "/videos/ecbuilder.mp4",
    link: "",
    techs: [
      { title: "Laravel", color: "red" },
      { title: "MySql", color: "orange" },
      { title: "React", color: "blue" },
      { title: "TypeScript", color: "darkblue" },
      { title: "shadcn/ui", color: "black" },
    ],
    updatedAT: 1630012000000,
    rating: 8,
    type: "personal",
  },
  {
    title: "Auto-rello-it - Trello to CSV",
    desc: "A script made with AutoIt to export Trello list to csv, it's a simple web app that uses trello GUI to get data from a list (including images), and export them data as csv file, and images directory.",
    github: "https://github.com/OmarMHawash/auto-rello-it",
    img: "/images/projects/auto-rello-it.webp",
    video: "/videos/auto-rello-it.mp4",
    link: "",
    techs: [
      { title: "AutoIt", color: "mediumslateblue" },
      { title: "Trello", color: "blueviolet" },
      { title: "CSV", color: "black" },
    ],
    updatedAT: 1630000071200,
    rating: 7,
    type: "personal",
  },
];

export const navList: NavItemType[] = [
  {
    title: "Home",
    path: "/",
    desc: "a teny tiny description for you!",
  },
  {
    title: "Projects",
    path: "/projects",
    desc: "a teny tiny description for you!",
  },
  {
    title: "Work",
    path: "/work",
    desc: "a teny tiny description for you!",
  },
];

export const AllProjects: ProjectMiniType[] = [
  {
    title: "Snacks-mv",
    desc: "Movies discovery app built using MERN stack. Browse Trending and search for movies with filters",
    github: "https://github.com/OmarMHawash/MernProject",
    techs: [],
    type: "school",
    rating: 6,
    img: "/images/projects/snacksmv.png",
  },
  {
    title: "Anime Euphoria",
    desc: "WebApp that helps you discover Anime and discuss it with other users",
    github: "https://github.com/OmarMHawash/anime_euphoria",
    techs: [],
    type: "school",
    rating: 6,
    img: "/images/projects/anime_euphoria.jpeg",
  },
  {
    title: "userpanel",
    desc: "Boilerblate for Courses discovery using Firebase Auth and FIrestore",
    github: "https://github.com/OmarMHawash/userpanel",
    techs: [],
    type: "personal",
    rating: 7,
    img: "/images/projects/userpanel.png",
  },
  {
    title: "HollyLand",
    desc: "Palestinian villages discovery using Leaflet map-API",
    github: "https://github.com/OmarMHawash/HollyLand",
    techs: [],
    type: "personal",
    rating: 7.5,
    img: "/images/projects/hollyland.jpeg",
  },
  {
    title: "React Weather",
    desc: "Using OpenWeather API to view weather based on city",
    github: "https://github.com/OmarMHawash/ReactWeather",
    techs: [],
    type: "personal",
    rating: 5,
    img: "/images/projects/reactweather.png",
  },
  {
    title: "MedusaJS",
    desc: "Contributing to Medusajs: Building blocks for digital commerce",
    github: "https://github.com/medusajs/medusa",
    techs: [],
    type: "OpenSource",
    rating: 9,
    img: "/images/projects/medusajs.png",
  },
];

export const socials = [
  {
    title: "Github",
    path: "https://www.github.com/omarmhawash",
    img: "/images/socials/github.png",
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/omar-m-hawash-59545420a",
    img: "/images/socials/linkedin.png",
  },
  {
    title: "LeetCode",
    path: "https://www.leetcode.com/omarmhawash",
    img: "/images/socials/leetcode.webp",
  },
  {
    title: "HackerRank",
    path: "https://www.hackerrank.com/omarmhawash",
    img: "/images/socials/hackerrank.png",
  },
  {
    title: "CodePen",
    path: "https://codepen.io/omarmhawash",
    img: "/images/socials/codepen.webp",
  },
  {
    title: "Medium",
    path: "https://www.medium.com/@omarmhawash",
    img: "/images/socials/medium.png",
  },
];
