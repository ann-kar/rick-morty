import { ICharacter } from "../../interfaces/interfaces";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { CharacterView } from "../../components/characterPage/CharacterView";
import {
  ALL_CHARACTERS_URL,
  SELECTED_PAGE_URL,
} from "../../services/endpoints";

const CharacterProfile = ({
  characterData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CharacterView characterData={characterData} />;
};

export default CharacterProfile;

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false,
  };
};

const getAllIds = async () => {
  const res = await fetch(ALL_CHARACTERS_URL);
  const data = await res.json();
  const ids = new Array(await data.info.count).fill("0").map((el, i) => {
    return { params: { id: (i + 1).toString() } };
  });
  return ids;
};

const getCharacterData = async (id: string) => {
  const res = await fetch(SELECTED_PAGE_URL + Math.ceil(parseInt(id) / 20));
  const data = await res.json();
  const character = await data.results.find(
    (char: ICharacter) => char.id === parseInt(id)
  );
  return character;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const characterData = await getCharacterData(id);
  return {
    props: {
      characterData,
    },
  };
};
