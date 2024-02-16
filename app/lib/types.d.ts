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
  updatedAT: number; // used as key for updating static data
  techs: techItemType[];
};

export type techItemType = {
  title: string;
  color: string;
};
