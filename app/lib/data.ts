import { NavItemType, ProjectType } from "./types";

export const Projects: ProjectType[] = [
  {
    title: "test project 1",
    desc: "Description 1",
    github: "https://www.github.com/omarhawash/test1",
    img: "/images/test.jpg",
    video: "/videos/test.mp4",
  },
  {
    title: "the test 2",
    desc: "long 2",
    github: "https://www.github.com/omarhawash/test2",
    img: "/images/test.jpg",
    video: "/videos/test.mp4",
  },
  {
    title: "test project 3",
    desc: "Des 3 project",
    github: "https://www.github.com/omarhawash/test1",
    img: "/images/test.jpg",
    video: "/videos/test.mp4",
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

export const socials = [
  {
    title: "Github",
    path: "https://www.github.com/omarhawash",
    img: "/images/socials/github.png",
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/omarhawash",
    img: "/images/socials/linkedin.png",
  },
  {
    title: "LeetCode",
    path: "https://www.leetcode.com/omarhawash",
    img: "/images/socials/leetcode.webp",
  },
  {
    title: "HackerRank",
    path: "https://www.hackerrank.com/omarhawash",
    img: "/images/socials/hackerrank.png",
  },
  {
    title: "CodePen",
    path: "https://www.codepen.io/omarhawash",
    img: "/images/socials/codepen.webp",
  },
];
