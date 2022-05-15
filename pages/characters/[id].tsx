import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { CharacterImage } from "../../components/CharacterImage";
import { FavButton } from "../../components/FavButton";
import { Services } from "../../services/services";

export const CharacterProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, error, data } = useQuery(
    ["getCharacter", { id: Number(id) }],
    () =>
      Services.getCharacter({
        id: Number(id),
      })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error has occurred.</div>;
  }

  return (
    <div className="border-0">
      <CharacterImage alt={data.name} src={data.image} type={"profile"} />
      <span className="text-2xl font-bold p-1">{data.name}</span>
      <p> {data.status}</p>
      <p> {data.species} </p>
      <p> {data.type || "no specific type, really, just a generic being"} </p>
      <p>{data.gender}</p>
      <p>{data.origin.name}</p>
      <p>{data.location.name}</p>
      <p>appears first in episode: {data.episode[0]}</p>
      <FavButton data={data} />
    </div>
  );
};

export default CharacterProfile;
