import Image from "next/image";
import { ProjectType } from "../../lib/types";
import { Card, CardContent } from "../components/card";
import ItemTag from "./item-tag";
import { Badge } from "../components/badge";

export default function ProjectItem({ itemdata }: { itemdata: ProjectType }) {
  const { title, img, github, video, link, techs } = itemdata;
  return (
    <div className="p-4 m-6 md:m-2 md:mt-6 text-slate-200 bg-zinc-800 rounded-xl shadow-lg">
      <Card className="border-2 border-zinc-600 bg-zinc-900">
        <CardContent className="flex aspect-video items-center justify-center p-0 rounded-lg overflow-hidden object-cover relative">
          <video
            src={video}
            autoPlay
            muted
            loop
            poster={img}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white px-1.5 py-0.5 rounded-md text-xs flex items-center">
            <svg
              className="w-3 h-3 mr-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Demo
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between items-center mt-4">
        {link ? (
          <a
            target="_blank"
            href={link}
            className="hover:opacity-80 transition-opacity"
          >
            <h2 className="font-bold text-xl line-clamp-1 text-white">
              {title} <span className="text-blue-400 ml-2">(Live) ↗</span>
            </h2>
          </a>
        ) : (
          <h2 className="font-bold text-xl line-clamp-1 text-white">{title}</h2>
        )}
        <a
          className="flex items-center bg-zinc-700 px-3 py-1 rounded-full hover:bg-zinc-600 transition-colors"
          target="_blank"
          href={github}
        >
          <p className="text-base flex items-center">
            <span className="text-sm font-medium">Github ↗</span>
          </p>
        </a>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap items-center">
          <Badge
            className="pl-0 text-sm font-semibold mr-2"
            style={{ backgroundColor: "transparent" }}
          >
            Stack:
          </Badge>
          {techs.map((tech, index) => (
            <Badge
              key={index}
              className="mr-2 mb-2 px-3 py-1 text-sm font-medium"
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
