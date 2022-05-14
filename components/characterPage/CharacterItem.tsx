import { useEffect, useState } from "react";
import { ICharacter } from "../../interfaces/interfaces";
import Image from "next/image";
import { useFavourites } from "../../providers/FavouritesContextProvider";

interface CharacterItemProps {
  data: ICharacter;
}

export const CharacterItem = ({ data }: CharacterItemProps) => {
  const { addToFavourites, removeFromFavourites, favourites } = useFavourites();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    if (favourites.find((favCharacter) => favCharacter.id === data.id)) {
      setIsClicked(true);
    }
  }, [data.id, favourites]);

  const handleClick = () => {
    if (isClicked) {
      removeFromFavourites(data.id);
      setIsClicked(false);
    } else {
      addToFavourites(data);
      setIsClicked(true);
    }
  };

  return (
    <div className="rounded-md w-50 h-50">
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
