import { useQuery } from "react-query";
import { Services } from "../../services/services";

const CharactersPage = () => {
  const { isLoading, error, data } = useQuery("getCharacters", Services.getCharacters);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error has occurred.</div>;
  }

  return (
    <div className="bg-gray-50 flex flex-col">
      characters
      <span>{data?.info?.pages || ""}</span>
    </div>
  );
};

export default CharactersPage;
