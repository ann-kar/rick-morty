import { GetStaticProps, InferGetStaticPropsType } from "next";
import { CharactersView } from "../../components/charactersPage/CharactersView";
import { ICharacter, IInfo } from "../../interfaces/interfaces";
import { ALL_CHARACTERS_URL } from "../../services/endpoints";

const CharactersPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CharactersView initialData={data} />;
};

export default CharactersPage;

export const getStaticProps: GetStaticProps = async () => {
  const pageOne = await fetch(ALL_CHARACTERS_URL);
  const data: IInfo<ICharacter[]> = await pageOne.json();
  return {
    props: {
      data,
    },
  };
};
