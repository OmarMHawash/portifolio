import { ProjectType } from "../../lib/types";
import { Card, CardContent } from "../components/card";

export default function ProjectItem({ itemdata }: { itemdata: ProjectType }) {
  const { title, desc, img, github, video } = itemdata;
  return (
    <div className="p-1 m-4 md:m-0">
      <h2>{title}</h2>
      <Card className="border-none">
        <CardContent
          className="flex aspect-video items-center justify-center p-0 border-zinc
        border-2 rounded-2xl overflow-hidden object-cover"
        >
          <video src={video} autoPlay muted poster={img} />
        </CardContent>
      </Card>
      <a href={github}>Github</a>
      <p>{desc}</p>
    </div>
  );
}
