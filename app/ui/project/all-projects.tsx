import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/components/accordion";
import { AllProjects } from "@/app/lib/data";
import Link from "next/link";

export default function AllProjectsComp() {
  return (
    <Accordion
      className="m-4 md:m-0 w-full md:w-8/12 pt-8 pb-24"
      type="single"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>All Projects:</AccordionTrigger>
        <AccordionContent>
          {AllProjects.map((item) => (
            <a key={item.title} href={item.github}>
              <div
                key={item.title}
                className="mb-2 p-4 bg-slate-800 rounded-xl border-2"
              >
                <h2 className="pb-2">{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
