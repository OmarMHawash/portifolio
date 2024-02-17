import Image from "next/image";
import { ProjectType } from "../../lib/types";
import { Card, CardContent } from "../components/card";
import ItemTag from "./item-tag";
import { Badge } from "../components/badge";

export default function ProjectItem({
  itemdata,
  index,
  size,
}: {
  itemdata: ProjectType;
  index: number;
  size: number;
}) {
  const { title, desc, img, github, video, link, techs } = itemdata;
  return (
    <div className="p-1 m-4 md:m-0 text-slate-200 ">
      <div className="flex justify-between">
        <h2 className="m-2 ml-0 font-bold text-xl">{title}</h2>
        <p className="m-2 ml-0 text-lg">
          {index}/{size}
        </p>
      </div>
      <Card className="border-none">
        <CardContent
          className="flex aspect-video items-center justify-center p-0 border-zinc
        border-2 rounded-2xl overflow-hidden object-cover"
        >
          <video src={video} autoPlay muted poster={img} />
        </CardContent>
      </Card>
      <div className="flex justify-start py-2">
        {techs.map((tech, index) => (
          // <ItemTag key={index} title={tech.title} color={tech.color} />
          <Badge
            key={index}
            className="mr-1"
            style={{ backgroundColor: tech.color }}
          >
            {tech.title}
          </Badge>
        ))}
      </div>
      <div className="flex justify-between px-2">
        <a className="flex" target="_blank" href={github}>
          <Image
            className="invert my-3 w-[20px] h-[20px]"
            src="/images/socials/github.png"
            alt="github"
            width={24}
            height={24}
          />
          <span className="mt-3 ml-2 text-sm underline">github</span>
        </a>
        {link && (
          <a className="my-3" target="_blank" href={link}>
            <span className="ml-2 text-sm underline">demo</span>
          </a>
        )}
      </div>
      <p>{desc}</p>
    </div>
  );
}
