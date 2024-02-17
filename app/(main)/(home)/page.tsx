"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { socials } from "@/app/lib/data";
import Link from "next/link";
import SocialItem from "@/app/ui/social-item";
export default function Home() {
  return (
    <main className="w-full h-[80vh] overflow-hidden">
      <motion.div
        className="h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-full h-full flex justify-center">
          <div className="w-full flex flex-col h-full justify-around">
            <div className="text-center">
              <h1 className="font-bold text-3xl md:text-5xl text-slate-50">
                Omar Hawash
              </h1>
              <p className="w-full md:text-xl p-4 text-slate-100">
                Full Stack Developer, Designer, and Creator. I build things for
                the Internet people to make life better.
              </p>
              <div className="grid grid-flow-row grid-cols-3 gap-1 sm:flex sm:flex-row md:justify-center">
                {socials.map((item) => {
                  return (
                    <React.Fragment key={item.title}>
                      <SocialItem {...item} />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
