import { useState } from "react";
import { ICharacter } from "../../interfaces/interfaces";
import Image from "next/image";

interface CharacterItemProps {
  data: ICharacter;
}

export const CharacterItem = ({ data }: CharacterItemProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={"rounded-md w-50 h-50"}>
      <div className="font-bold py-2">{data.name}</div>
      <Image
        src={data.image}
        alt={"avatar: " + data.name}
        width="150px"
        height="150px"
        className="rounded-full mx-auto"
      />
      <button
        className="rounded-xl shadow-md bg-gray-100 text-gray-900 text-sm p-2 px-6 m-1"
        id={data.name}
        onClick={handleClick}>
        {isClicked ? "remove" : "add"}
      </button>
    </div>
  );
};
