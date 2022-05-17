import Image from "next/image";
import { Status } from "../../interfaces/interfaces";

interface CharacterImageProps {
  alt: string;
  src: string;
  characterStatus: Status;
}

export const CharacterImage = ({
  alt,
  src,
  characterStatus,
}: CharacterImageProps) => {
  return (
    <div className="relative border-8 mx-auto border-white shadow-zinc-600 hover:shadow-2xl w-36 h-36 rounded-full  ">
      <Image
        src={src}
        alt={`avatar: ${alt}`}
        width="144px"
        height="144px"
        className="rounded-full"
      />
      <div
        className={`absolute ${
          characterStatus === "Alive" && "bg-khaki opacity-40"
        } ${characterStatus === "Dead" && "bg-gray-700 opacity-60"} ${
          characterStatus === "unknown" && "bg-powderblue opacity-30"
        } top-0 left-0 w-full h-full rounded-full hover:opacity-0 duration-100`}></div>
    </div>
  );
};
