import Image from "next/image";

export default function SocialItem(item: any) {
  return (
    <a
      key={item.title}
      href={item.path}
      target="_blank"
      rel="noreferrer"
      className="bg-zinc-700 rounded-lg m-2 text-zinc-50"
    >
      <div className="flex flex-row">
        <Image
          className="invert m-2 w-[16px] h-[16px]"
          src={item.img}
          alt={item.title}
          width={16}
          height={16}
        />
        <p className="my-2 font-semibold text-[0.7rem] pr-2">{item.title}</p>
      </div>
    </a>
  );
}
