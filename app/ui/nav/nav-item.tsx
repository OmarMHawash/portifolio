import { NavItemType } from "../../lib/types";
import Link from "next/link";
export default function NavItem({ navdata }: { navdata: NavItemType }) {
  const { title, path, desc } = navdata;
  return (
    <Link href={path} className="">
      <div className="min-w-24 text-lg">
        <h2 className="w-full text-center font-medium text-slate-100 px-2 py-3 rounded-lg hover:bg-slate-900 transform transition">
          {title}
        </h2>
        {/* <p className="">{desc}</p> */}
      </div>
    </Link>
  );
}
