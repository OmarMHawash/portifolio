import Image from "next/image";
import { ProjectType } from "../../lib/types";
import { Card, CardContent } from "../components/card";
import ItemTag from "./item-tag";
import { Badge } from "../components/badge";

export default function ProjectItem({ itemdata }: { itemdata: ProjectType }) {
  const { title, img, github, video, link, techs } = itemdata;
  return (
    <div className="p-1 m-4 md:m-0 md:mt-4 text-slate-200 bg-transparent">
      <Card className="border-none bg-transparent">
        <CardContent className="flex aspect-video items-center justify-center p-0 rounded-lg border-4 border-zinc-700 overflow-hidden object-cover bg-transparent">
          <video src={video} autoPlay muted loop poster={img} />
        </CardContent>
      </Card>
      <div className="flex justify-between">
        {link ? (
          <a target="_blank" href={link}>
            <h2 className="m-2 ml-0 font-bold text-lg line-clamp-1">
              {title} <span className="text-blue-500">(Live) ↗</span>
            </h2>
          </a>
        ) : (
          <h2 className="m-2 ml-0 font-bold text-lg line-clamp-1">{title}</h2>
        )}
        <a className="flex" target="_blank" href={github}>
          <p className="mt-3 mr-1 text-base flex underline">
            <Image
              className="invert m-1 w-[14px] h-[14px]"
              src="/images/socials/github.png"
              alt="github"
              width={20}
              height={20}
            />
            <span className="text-sm">Github</span>
          </p>
        </a>
      </div>
      <div className="">
        <div className="flex justify-start py-2">
          <Badge className="pl-0" style={{ backgroundColor: "transparent" }}>
            Stack:{" "}
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
