import Image from "next/image";
import { Status } from "../interfaces/interfaces";

interface CharacterImageProps {
  alt: string;
  src: string;
  characterStatus: Status;
  type: "avatar" | "profile";
}

export const CharacterImage = ({ alt, src, type, characterStatus }: CharacterImageProps) => {
  let size, classes;
  switch (type) {
    case "avatar":
      size = "144px";
      classes = "rounded-full";
      break;
    case "profile":
      size = "250px";
      classes = "rounded-lg mx-auto";
      break;
  }

  return (
    <div className="relative border-8 mx-auto border-white shadow-zinc-600 hover:shadow-2xl w-36 h-36 rounded-full  ">
      <Image
        src={src}
        alt={`${type}: ${alt}`}
        width={size}
        height={size}
        className={classes}
      />
      <div className={`absolute ${characterStatus === 'Alive' && 'bg-khaki opacity-40'} ${characterStatus === 'Dead' && 'bg-gray-700 opacity-60'} ${characterStatus === 'unknown' && 'bg-powderblue opacity-30'} top-0 left-0 w-full h-full rounded-full hover:opacity-0 duration-100`}></div>
    </div>
  );
};
