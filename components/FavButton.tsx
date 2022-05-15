import { useState, useEffect } from "react";
import { ICharacter } from "../interfaces/interfaces";
import { useFavourites } from "../providers/FavouritesContextProvider";

export const FavButton = ({data}:{data: ICharacter}) => {
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
        <button
        className="rounded-xl shadow-md bg-gray-100 text-gray-900 text-sm p-2 px-6 m-1"
        id={data.name}
        onClick={handleClick}>
        {isClicked ? "remove" : "add"}
      </button>
    )
}