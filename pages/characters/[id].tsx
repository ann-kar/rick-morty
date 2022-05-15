import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { Services } from "../../services/services";

export const CharacterProfile = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

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
      <img src={data.image} className="mx-auto w-full sm:w-72" />

      <span className="text-2xl font-bold p-1">{data.name}</span>
      <p> {data.status}</p>
      <p> {data.species} </p>
      <p> {data.type || "no specific type, really, just a generic being"} </p>
      <p>{data.gender}</p>
      <p>{data.origin.name}</p>
      <p>{data.location.name}</p>
      <p>appears first in episode: {data.episode[0]}</p>
      <button id={data.name}>
        {isClicked ? "remove" : "add to favorites"}
      </button>
    </div>
  );
};

export default CharacterProfile;
