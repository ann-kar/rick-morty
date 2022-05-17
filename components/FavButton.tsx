import React from "react";
import { useState, useEffect } from "react";
import { ICharacter } from "../interfaces/interfaces";
import { useFavourites } from "../providers/FavouritesContextProvider";
import { StarIcon } from "@heroicons/react/solid";

export const FavButton = ({ data }: { data: ICharacter }) => {
  const { addToFavourites, removeFromFavourites, favourites } = useFavourites();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    if (favourites.find((favCharacter) => favCharacter.id === data.id)) {
      setIsClicked(true);
    }
  }, [data.id, favourites]);

  return React.useMemo(() => {
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
      <button
        className={`min-w-32 max-w-36 max-h-16 mx-auto rounded-xl shadow-none bg-gradient-to-br from-gray-50 to-gray-300/70 text-gray-400 text-lg p-2 px-3 m-1 hover:text-emerald-500 active:scale-90 duration-75
      ${isClicked && "font-extrabold from-white to-emerald-600/30"}`}
        id={data.name}
        onClick={handleClick}>
        <span
          className={`font-semibold text-sm px-2 tracking-wide ${
            isClicked && "text-emerald-500"
          }`}>
          Favourite
        </span>
        <StarIcon
          className={`h-6 w-6 inline-block ${isClicked && "text-emerald-500"}`}
        />
      </button>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isClicked]);
};
