import { ICharacter } from "../../interfaces/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { CharacterView } from "../../components/characterPage/CharacterView";

const CharacterProfile = ({ characterData }: { characterData: ICharacter }) => {
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
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  const ids = new Array(await data.info.count).fill("0").map((el, i) => {
    return { params: { id: (i + 1).toString() } };
  });
  return ids;
};

const getCharacterData = async (id: string) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${Math.ceil(
      parseInt(id) / 20
    )}`
  );
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
