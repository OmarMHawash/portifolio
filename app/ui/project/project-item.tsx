import Image from "next/image";
import { ProjectType } from "../../lib/types";
import { Card, CardContent } from "../components/card";
import ItemTag from "./item-tag";
import { Badge } from "../components/badge";

export default function ProjectItem({ itemdata }: { itemdata: ProjectType }) {
  const { title, img, github, video, link, techs } = itemdata;
  return (
    <div className="p-1 m-4 md:m-0 md:mt-4 text-slate-200 overflow-visible">
      <Card className="border-none">
        <CardContent
          className="flex aspect-video items-center justify-center p-0 border-zinc
        border-2 rounded-2xl overflow-hidden object-cover"
        >
          <video src={video} autoPlay muted poster={img} />
        </CardContent>
      </Card>
      <div className="flex justify-between">
        {link ? (
          <a target="_blank" href={link}>
            <h2 className="m-2 ml-0 font-bold text-xl line-clamp-1">
              {title} ↗
            </h2>
          </a>
        ) : (
          <h2 className="m-2 ml-0 font-bold text-xl line-clamp-1">{title}</h2>
        )}
        <a className="flex" target="_blank" href={github}>
          <p className="m-2 ml-0 text-base flex underline">
            <Image
              className="invert m-1 w-[18px] h-[18px]"
              src="/images/socials/github.png"
              alt="github"
              width={20}
              height={20}
            />
            <span>github</span>
          </p>
        </a>
      </div>
      <div className="">
        <div className="flex justify-start py-2">
          <Badge className="pl-0" style={{ backgroundColor: "transparent" }}>
            Technologies:{" "}
          </Badge>
          {techs.map((tech, index) => (
            <Badge
              key={index}
              className="mr-1"
              style={{ backgroundColor: tech.color }}
            >
              {tech.title}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
