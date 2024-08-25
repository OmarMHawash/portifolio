"use client";

import { usePathname } from "next/navigation";
import { NavItemType } from "../../lib/types";
import Link from "next/link";

export default function NavItem({ navdata }: { navdata: NavItemType }) {
  const pathname = usePathname();
  const { title, path } = navdata;
  return (
    <Link href={path} className="">
      <div className="min-w-24 text-lg group">
        <h2
          className={`w-full text-center font-medium text-slate-100 
          px-4 py-3 rounded-lg ${
            path === pathname
              ? "bg-zinc-800 shadow-md"
              : "hover:bg-zinc-800 hover:shadow-md"
          } transition-all duration-150 ease-in-out`}
        >
          {title}
          <span
            className={`block h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-150 ease-in-out ${
              path === pathname ? "scale-x-100" : "group-hover:scale-x-100"
            }`}
          ></span>
        </h2>
      </div>
    </Link>
  );
}
