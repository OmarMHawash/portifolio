"use client";
import ProjectsCarousel from "@/app/ui/project/projects-carousel";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <main className="overflow-hidden">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex justify-center">
          <ProjectsCarousel />
        </div>
      </motion.div>
    </main>
  );
}
