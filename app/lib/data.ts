import { NavItemType, ProjectMiniType, ProjectType } from "./types";

export const Projects: ProjectType[] = [
  {
    title: "Freepik Clone",
    desc: "My largest project contribution yet: a ReactJS Front-end website inspired by Freepik’s website. This project initially started as a school assignment, but me and Yousef Khodrojy, we decided to take on a new branch and revamp the codebase. We improved project conventions, standardizing code formatting, and implementing linting specifically for React. Also introduced Layouts and ContextAPI, which allowed us to make component dynamic. The project has 8+ pages and over 34 different components, all responsive.",
    github: "https://github.com/Yousef-Salah/freepik-clone",
    img: "/images/projects/seepick.webp",
    video: "/videos/seepick.mp4",
    link: "https://freepik-clone.vercel.app",
    techs: [{ title: "React", color: "blue" }],
    updatedAT: 163000023412,
    rating: 10,
    type: "school",
  },
  {
    title: "Landing Page Builder",
    desc: "A landing page builder, build with laravel, and react (with typescript). it offers a simple interface to choose components and colors for the page, and export it as a react project.",
    github: "https://github.com/OmarMHawash/ecBuilder",
    img: "/images/projects/ecbuilder.jpeg",
    video: "/videos/ecbuilder.mp4",
    link: "",
    techs: [
      { title: "Laravel", color: "red" },
      { title: "ReactTS", color: "darkblue" },
      { title: "MySql", color: "orange" },
    ],
    updatedAT: 1630012000000,
    rating: 8,
    type: "personal",
  },
  {
    title: "Trello CSV Exporter",
    desc: "A script made with AutoIt to export Trello list to csv, it's a simple web app that uses trello GUI to get data from a list (including images), and export them data as csv file, and images directory.",
    github: "https://github.com/OmarMHawash/auto-rello-it",
    img: "/images/projects/auto-rello-it.webp",
    video: "/videos/auto-rello-it.mp4",
    link: "",
    techs: [
      { title: "AutoIt", color: "mediumslateblue" },
      { title: "Trello", color: "blueviolet" },
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
  // {
  //   title: "Work",
  //   path: "/work",
  //   desc: "a teny tiny description for you!",
  // },
];

export const AllProjects: ProjectMiniType[] = [
  {
    title: "Snacks-mv",
    desc: "Movies discovery app for browsing trends and search for movies with filters",
    github: "https://github.com/OmarMHawash/MernProject",
    type: "school",
    rating: 6,
    img: "/images/projects/snacksmv.webp",
    techs: [
      { title: "React", color: "blue" },
      { title: "NodeJS", color: "seagreen" },
    ],
  },
  {
    title: "Anime Euphoria",
    desc: "WebApp that helps you discover Anime and discuss it with other users",
    github: "https://github.com/OmarMHawash/anime_euphoria",
    type: "school",
    rating: 6.5,
    img: "/images/projects/anime_euphoria.png",
    techs: [
      { title: "Django", color: "darkgreen" },
      { title: "Nosql", color: "midnightblue" },
    ],
  },
  {
    title: "Learngrow",
    desc: "Boilerblate for learning courses discovery and admin built with Firebase",
    github: "https://github.com/OmarMHawash/userpanel",
    type: "personal",
    rating: 7,
    img: "/images/projects/learngrow.png",
    techs: [
      { title: "React", color: "blue" },
      { title: "Firebase", color: "yellowgreen" },
    ],
  },
  {
    title: "HolyLand",
    desc: "Palestinian villages discovery using Leaflet map-API, with admin dashboard implementation",
    github: "https://github.com/OmarMHawash/HollyLand",
    type: "school",
    rating: 7.5,
    img: "/images/projects/holyland.png",
    techs: [
      { title: "Springboot", color: "green" },
      { title: "Mysql", color: "blue" },
    ],
  },
  {
    title: "React Weather",
    desc: "Using OpenWeather API to view weather based on city",
    github: "https://github.com/OmarMHawash/ReactWeather",
    type: "school",
    rating: 5,
    img: "/images/projects/reactweather.png",
    techs: [
      { title: "React", color: "blue" },
      { title: "WeatherAPI", color: "yellowgreen" },
    ],
  },
  {
    title: "MedusaJS",
    desc: "Contributing to Medusajs: Building blocks for digital commerce",
    github: "https://github.com/medusajs/medusa",
    type: "OpenSource",
    rating: 8,
    img: "/images/projects/medusajs.png",
    techs: [{ title: "OpenSource", color: "black" }],
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
