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
    <Carousel className="w-full md:w-10/12">
      <CarouselContent>
        {Projects.map((item, index) => (
          <CarouselItem key={index}>
            <ProjectItem itemdata={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
