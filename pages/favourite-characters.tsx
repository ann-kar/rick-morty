import { CharacterItem } from "../components/charactersPage/CharacterItem";
import { ICharacter } from "../interfaces/interfaces";
import { useFavourites } from "../providers/FavouritesContextProvider";
import { Hero } from "../components/Hero";
import { HeroImage } from "../components/heroSection/HeroImage";

const FavouriteCharactersPage = () => {
  const { favourites } = useFavourites();

  return (
    <div className="flex flex-col">
      <Hero shortLabel={"the best of"} longLabel={"your favourites from"}>
        <HeroImage
          src="/favourites.png"
          alt="main graphic: Morty and Rick happy"
        />
      </Hero>
      <div className="grid xl:max-w-7xl p-4 grid-cols-2 grid-flow-row xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mx-auto">
        {favourites &&
          favourites.map((character: ICharacter) => {
            return (
              <CharacterItem key={`fav-${character.id}`} data={character} />
            );
          })}
      </div>
    </div>
  );
};

export default FavouriteCharactersPage;
