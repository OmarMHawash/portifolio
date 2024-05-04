"use client";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/components/table";
import { works } from "@/app/lib/data";

export default function Page() {
  return (
    <div className="overflow-hidden flex justify-center">
      <motion.div
        className="w-full md:w-6/12 py-8 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Table className="text-white w-full">
          <TableCaption>A list of my professional work projects</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-fit">Name</TableHead>
              <TableHead className="">description</TableHead>
              <TableHead className="text-right">date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {works.map((work) => (
              <TableRow key={work.title}>
                <TableCell className=" text-blue-500">
                  <a target="_blank" href={work.link}>
                    {work.title}
                  </a>
                </TableCell>
                <TableCell>{work.desc}</TableCell>
                <TableCell className="text-right">{work.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
