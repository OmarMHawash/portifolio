import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/components/accordion";
import { AllProjects } from "@/app/lib/data";
import Image from "next/image";

export default function AllProjectsComp() {
  const sortedProjects = AllProjects.sort((a, b) => {
    return b.rating - a.rating;
  });
  console.log(sortedProjects);
  return (
    <Accordion
      className="m-4 md:m-0 w-full md:w-8/12 pt-8 pb-24"
      type="single"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl">All Projects:</AccordionTrigger>
        <AccordionContent className="mt-4">
          {sortedProjects.map((item) => (
            <a key={item.title} href={item.github} target="_blank">
              <div className="flex mb-6 justify-start bg-slate-600 text-slate-100 rounded-xl border-2 overflow-ellipsis overflow-hidden">
                <Image
                  src={item.img}
                  width={300}
                  height={300}
                  alt={item.title}
                  className="bg-white rounded-2xl p-3 m-2 w-[110px] max-h-[110px] object-contain"
                />
                <div key={item.title} className="mb-2 p-4">
                  <h2 className="pb-2 text-xl font-bold line-clamp-1">
                    {item.title}
                  </h2>
                  <p className="text-base line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
