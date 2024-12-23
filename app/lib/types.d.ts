export type NavItemType = {
  title: string;
  path: string;
  desc: string;
};

export type ProjectType = {
  title: string;
  desc: string;
  img: string;
  video: string;
  github: string;
  link: string;
  updatedAT: number;
  techs: techItemType[];
  type: "personal" | "work" | "school" | "OpenSource";
  rating: number;
};

export type ProjectMiniType = {
  title: string;
  desc: string;
  github: string;
  techs: techItemType[];
  type: "personal" | "work" | "school" | "OpenSource";
  rating: number;
  img: string;
  video?: string;
  link?: string;
};

export type techItemType = {
  title: string;
  color: string;
};
