import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/components/accordion";
import { AllProjects } from "@/app/lib/data";
import Image from "next/image";
import { Badge } from "../components/badge";

export default function AllProjectsComp() {
  const sortedProjects = AllProjects.sort((a, b) => {
    return b.rating - a.rating;
  });
  return (
    <Accordion className="m-4 md:m-0 w-full md:w-7/12 pt-8 pb-24" type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger className="ml-1 text-2xl font-semibold">
          <p className="underline-none">
            <span className="grayscale">⭐ </span>More Projects
          </p>
        </AccordionTrigger>
        <AccordionContent className="mt-4">
          {sortedProjects.map((item) => (
            <div
              key={item.title}
              className="flex justify-start bg-zinc-800 text-slate-100 mb-6 border-2 rounded-xl border-zinc-700 overflow-ellipsis overflow-hidden shadow-inner shadow-zinc-900"
            >
              <Image
                src={item.img}
                width={300}
                height={300}
                alt={item.title}
                className="bg-white rounded-2xl p-3 m-3 w-[110px] min-w-[110px] max-h-[110px] object-contain"
              />
              <div className="relative py-4 pl-2 pb-1 w-full">
                <h2 className="pb-2 text-xl font-bold line-clamp-1">
                  {item.title}
                </h2>
                <p className="text-base line-clamp-2 max-w-[94%]">
                  {item.desc}
                </p>
                <div className="flex justify-start py-2">
                  {item.techs.map((tech, index) => (
                    <Badge
                      key={index}
                      className="mr-1 text-[10px] w-auto h-auto p-[0.5px] px-[6px]"
                      style={{ backgroundColor: tech.color }}
                    >
                      {tech.title}
                    </Badge>
                  ))}
                </div>
                <a target="_blank" href={item.github}>
                  <span className="absolute float-right underline right-3 bottom-2">
                    Github ↗
                  </span>
                </a>
              </div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
