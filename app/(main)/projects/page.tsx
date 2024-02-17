"use client";
import { AllProjects } from "@/app/lib/data";
import AllProjectsComp from "@/app/ui/project/all-projects";
import ProjectsCarousel from "@/app/ui/project/projects-carousel";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className=" overflow-x-hidden">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex justify-center">
          <ProjectsCarousel />
        </div>
        <div className="flex justify-center w-full text-slate-50">
          <AllProjectsComp />
        </div>
      </motion.div>
    </main>
  );
}
