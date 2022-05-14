import { CharacterItem } from "../components/characterPage/CharacterItem";
import { ICharacter } from "../interfaces/interfaces";
import { useFavourites } from "../providers/FavouritesContextProvider";

const FavouriteCharactersPage = () => {
  const { favourites } = useFavourites();

  return (
    <div className="bg-gray-50 flex flex-col">
      <h1 className="block w-full text-left mb-4 text-3xl font-medium text-gray-900">
        Favourite characters
      </h1>
      <div className="grid grid-cols-5">
        {favourites && favourites.map((character: ICharacter) => {
          return <CharacterItem key={`fav-${character.id}`} data={character} />;
        })}
      </div>
    </div>
  );
};

export default FavouriteCharactersPage;
