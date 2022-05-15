import { ICharacter } from "../../interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";
import { FavButton } from "../FavButton";
import { CharacterImage } from "../CharacterImage";

interface CharacterItemProps {
  data: ICharacter;
}

export const CharacterItem = ({ data }: CharacterItemProps) => {
  return (
    <div className="rounded-md w-50 h-50">
      <Link
        href={{
          pathname: "/characters/[id]/",
          query: { id: data.id },
        }}
        key={data.id}>
        <a>
          <div className="font-bold py-2">{data.name}</div>
          <CharacterImage alt={data.name} src={data.image} type={"avatar"} />
        </a>
      </Link>
      <FavButton data={data} />
    </div>
  );
};
