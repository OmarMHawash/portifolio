"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { socials } from "@/app/lib/data";
import Link from "next/link";
import SocialItem from "@/app/ui/social-item";
export default function Home() {
  return (
    <main className="w-full h-5/6">
      <motion.div
        className="h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-full h-full flex justify-center">
          <div className="flex flex-col h-full justify-around">
            <div className=" text-center">
              <h1 className="text-5xl text-slate-50">Omar M Hawash</h1>
              <p className="text-xl p-4 text-slate-100">
                Full Stack Developer, Designer, and Creator. I build things for
                the web.
              </p>
              <div className="flex flex-row justify-center">
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
