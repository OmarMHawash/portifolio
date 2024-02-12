"use client";
import ProjectsCarousel from "@/app/ui/projects-carousel";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <p>My projects</p>
        <p>Here are some of the projects I have worked on</p>
        <br />
        <div className="flex justify-center">
          <ProjectsCarousel />
        </div>
      </motion.div>
    </div>
  );
}
