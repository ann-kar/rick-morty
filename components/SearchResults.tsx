import { useQuery } from "react-query";
import { ICharacter } from "../interfaces/interfaces";
import { Services } from "../services/services";
import { CharacterItem } from "./characterPage/CharacterItem";

export const SearchResults = ({ nameQuery }: { nameQuery: string }) => {
  const { isLoading, error, data } = useQuery(
    ["getCharacters", nameQuery],
    () => Services.getCharacters(nameQuery)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error has occurred.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mx-auto">
      {data &&
        data.results.map((character: ICharacter) => {
          return <CharacterItem key={character.id} data={character} />;
        })}
    </div>
  );
};
