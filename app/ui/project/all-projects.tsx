import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/components/accordion";
import { AllProjects } from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function AllProjectsComp() {
  return (
    <Accordion
      className="m-4 md:m-0 w-full md:w-8/12 pt-8 pb-24"
      type="single"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>All Projects:</AccordionTrigger>
        <AccordionContent className="mt-4">
          {AllProjects.map((item) => (
            <a key={item.title} href={item.github}>
              <div className="flex mb-6 justify-start bg-slate-800 rounded-xl border-2">
                <Image
                  src={item.img}
                  width={256}
                  height={144}
                  alt={item.title}
                  className="rounded-xl p-3 w-[192px] md:w-[256px]"
                />
                <div key={item.title} className="mb-2 p-4">
                  <h2 className="pb-2 text-xl font-bold">{item.title}</h2>
                  <p className="text-base">{item.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
