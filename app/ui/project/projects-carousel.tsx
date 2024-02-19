import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/components/carousel";
import ProjectItem from "./project-item";
import { Projects } from "../../lib/data";

export default function ProjectsCarousel() {
  return (
    <Carousel className="w-full md:w-7/12">
      <h1 className="pl-5 md:pl-0 mt-4 text-2xl font-semibold text-slate-50">
        <span className="grayscale">🌟 </span>Featured Projects
      </h1>
      <CarouselContent>
        {Projects.map((item, index) => (
          <CarouselItem key={item.updatedAT}>
            <ProjectItem itemdata={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
