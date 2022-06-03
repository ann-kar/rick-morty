import { InferGetStaticPropsType } from "next";
import { CharactersView } from "../../components/charactersPage/CharactersView";
import { ICharacter, IInfo } from "../../interfaces/interfaces";

const CharactersPage = ({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CharactersView initialData={data} />;
};

export default CharactersPage;

export const getStaticProps = async () => {

  const pageOne = await fetch(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const data: IInfo<ICharacter[]> = await pageOne.json();
  return {
    props: {
      data
    },
  };
};
