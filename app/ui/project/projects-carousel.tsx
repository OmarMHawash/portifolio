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
    <Carousel className="w-full md:w-8/12">
      <CarouselContent>
        {Projects.map((item, index) => (
          <CarouselItem key={item.updatedAT}>
            <ProjectItem
              itemdata={item}
              index={index + 1}
              size={Projects.length}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
