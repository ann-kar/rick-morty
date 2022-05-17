import { ICharacter } from "../../interfaces/interfaces";
import Link from "next/link";
import { FavButton } from "../FavButton";
import { CharacterImage } from "./CharacterImage";

interface CharacterItemProps {
  data: ICharacter;
}

export const CharacterItem = ({ data }: CharacterItemProps) => {
  return (
    <div className="rounded-md w-full sm:w-44 h-60 2xl:w-52 2xl:h-68 flex flex-col items-center justify-between">
      <Link
        href={{
          pathname: "/characters/[id]/",
          query: { id: data.id },
        }}
        key={data.id}>
        <a>
          <CharacterImage
            alt={data.name}
            src={data.image}
            characterStatus={data.status}
          />
          <div className="h-10 font-bold text-sm flex items-center justify-center text-center uppercase m-1 text-zinc-600">
            {data.name}
          </div>
        </a>
      </Link>
      <FavButton data={data} />
    </div>
  );
};
