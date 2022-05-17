import { CharacterItem } from "../components/charactersPage/CharacterItem";
import { ICharacter } from "../interfaces/interfaces";
import { useFavourites } from "../providers/FavouritesContextProvider";
import { Hero } from "../components/heroSection/Hero";
import { HeroImage } from "../components/heroSection/HeroImage";

const FavouriteCharactersPage = () => {
  const { favourites } = useFavourites();

  return (
    <div className="flex flex-col">
      <Hero header={"Your favourite characters"} subheader={""}>
        <HeroImage
          src="/favourites.png"
          alt="main graphic: Morty and Rick happy"
        />
      </Hero>
      {favourites.length ? (
        <div className="grid xl:max-w-7xl p-4 grid-cols-2 grid-flow-row xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mx-auto">
          {favourites.map((character: ICharacter) => {
            return (
              <CharacterItem key={`fav-${character.id}`} data={character} />
            );
          })}
        </div>
      ) : (
        <div className="p-10 font-semibold text-sm sm:text-md lg:text-lg text-center text-zinc-600">
          It seems that you don&apos;t like anyone. But you can always change
          that!
        </div>
      )}
    </div>
  );
};

export default FavouriteCharactersPage;
