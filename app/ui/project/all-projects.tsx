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
              className="flex flex-row bg-zinc-700 text-slate-100 mb-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] text-sm md:text-base border border-zinc-600"
            >
              <div className="w-1/4 p-2 flex items-center justify-center bg-zinc-800">
                <Image
                  src={item.img}
                  width={80}
                  height={80}
                  alt={item.title}
                  className="rounded w-full max-w-[80px] h-auto object-contain"
                />
              </div>
              <div className="w-3/4 p-3">
                <h2 className="text-base font-bold mb-1 text-zinc-100 truncate">
                  {item.title}
                </h2>
                <p className="text-xs text-zinc-300 mb-2 line-clamp-2">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.techs.slice(0, 2).map((tech, index) => (
                    <Badge
                      key={index}
                      className="text-xs px-1 py-0.5"
                      style={{ backgroundColor: tech.color }}
                    >
                      {tech.title}
                    </Badge>
                  ))}
                  {item.techs.length > 2 && (
                    <Badge className="text-xs px-1 py-0.5 bg-zinc-600">
                      +{item.techs.length - 2}
                    </Badge>
                  )}
                </div>
                <a
                  target="_blank"
                  href={item.github}
                  className="inline-flex items-center text-xs text-blue-300 hover:text-blue-200 transition-colors duration-200"
                >
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
