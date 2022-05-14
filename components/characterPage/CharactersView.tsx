import { useQuery } from "react-query";
import { CharacterItem } from "./CharacterItem";
import { ICharacter } from "../../interfaces/interfaces";
import { Services } from "../../services/services";
import { SearchBox } from "./SearchBox";

export const CharactersView = () => {
  const { isLoading, error, data } = useQuery(
    "getCharacters",
    Services.getCharacters
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error has occurred.</div>;
  }

  return (
    <div className="bg-gray-50 flex flex-col">
      <h1 className="block w-full text-left mb-4 text-3xl font-medium text-gray-900">Who are you looking for?
</h1>
<SearchBox/>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mx-auto">
        {data &&
          data.results.map((character: ICharacter) => {
            return <CharacterItem key={character.id} data={character} />;
          })}
      </div>
    </div>
  );
};
