import { useQuery } from "react-query";
import { CharacterItem } from "../../components/CharacterItem";
import { ICharacter } from "../../interfaces/interfaces";
import { Services } from "../../services/services";

const CharactersPage = () => {
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
      characters
      <span>{data.info.pages || ""}</span>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mx-auto">
        {data &&
          data.results.map((character: ICharacter) => {
            return <CharacterItem key={character.id} data={character} />;
          })}
      </div>
    </div>
  );
};

export default CharactersPage;
