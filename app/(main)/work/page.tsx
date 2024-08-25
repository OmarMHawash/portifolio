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
        className="w-full md:w-8/12 lg:w-7/12 py-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Table className="text-zinc-100 w-full border-collapse">
          <TableCaption className="mb-4 text-zinc-400 text-sm">
            Professional Work Experience
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left font-semibold text-zinc-300 pb-3 border-b border-zinc-700">
                Project
              </TableHead>
              <TableHead className="text-left font-semibold text-zinc-300 pb-3 border-b border-zinc-700">
                Description
              </TableHead>
              <TableHead className="text-right font-semibold text-zinc-300 pb-3 border-b border-zinc-700">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {works.map((work) => (
              <TableRow
                key={work.title}
                className="hover:bg-zinc-800 transition-colors duration-200"
              >
                <TableCell className="py-4 text-blue-400 font-medium">
                  <a
                    target="_blank"
                    href={work.link}
                    className="hover:underline"
                  >
                    {work.title}
                  </a>
                </TableCell>
                <TableCell className="py-4 text-zinc-300">
                  {work.desc}
                </TableCell>
                <TableCell className="py-4 text-right text-zinc-400">
                  {work.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
