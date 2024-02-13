import Image from "next/image";
import Link from "next/link";

export default function SocialItem(item: any) {
  return (
    <Link
      key={item.title}
      href={item.path}
      target="_blank"
      rel="noreferrer"
      className="bg-slate-50 rounded-lg m-2"
    >
      <div className="flex flex-row">
        <Image
          className="m-2"
          src={item.img}
          alt={item.title}
          width={32}
          height={32}
        />
        <p className="my-4 font-semibold text-sm pr-4">{item.title}</p>
      </div>
    </Link>
  );
}
