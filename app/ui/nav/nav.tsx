import { navList } from "@/app/lib/data";
import React from "react";
import NavItem from "./nav-item";

export default function Nav() {
  return (
    <header className="w-full py-6 px-4 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
          {navList.map((item) => (
            <li
              key={item.title}
              className="transition-transform hover:scale-105"
            >
              <NavItem navdata={item} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
