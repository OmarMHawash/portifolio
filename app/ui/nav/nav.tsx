import { navList } from "@/app/lib/data";
import React from "react";
import NavItem from "./nav-item";

export default function Nav() {
  return (
    <div className="w-full h-1/12 flex justify-center p-4">
      {navList.map((item) => {
        return (
          <React.Fragment key={item.title}>
            <NavItem navdata={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
