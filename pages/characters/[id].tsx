import Image from "next/image";
import { ClipboardListIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/solid";

import { FavButton } from "../../components/FavButton";
import { SectionHeader } from "../../components/characterPage/SectionHeader";
import { SectionItem } from "../../components/characterPage/SectionItem";
import { ICharacter } from "../../interfaces/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

const CharacterProfile = ({ characterData }: { characterData: ICharacter }) => {
  const iconClassNames = "h-8 w-8 mr-2";
  const episodeNumber = characterData?.episode[0].substring(
    characterData.episode[0].lastIndexOf("/") + 1
  );

  return (
    <div>
      <div className="md:h-64 w-full bg-gray-100">
        <div className="w-9/10 sm:w-4/5 max-w-7xl mx-auto h-full items-center sm:hidden">
          <Image
            alt={characterData.name}
            src={characterData.image}
            width="350"
            height="350"
          />
          <h1 className="p-2 text-4xl sm:text-5xl md:text-7xl font-getSchwifty font-bold pl-8">
            {characterData.name}
          </h1>
        </div>
        <div className="hidden sm:flex w-9/10 sm:w-4/5 max-w-7xl mx-auto h-full items-center">
          <div className="sm:w-1/3 sm:min-w-[250px] bg-black h-full">
            <Image
              alt={characterData.name}
              src={characterData.image}
              width="256px"
              height="256px"
              className="rounded-md"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-getSchwifty font-bold pl-8">
            {characterData.name}
          </h1>
        </div>
      </div>
      <div className="w-9/10 sm:w-4/5 max-w-7xl pl-0 p-4 mx-auto flex flex-wrap">
        <section className="w-full md:w-1/3 flex flex-wrap text-left gap-3 p-1">
          <SectionHeader
            label={"Profile"}
            icon={<ClipboardListIcon className={iconClassNames} />}
          />
          <div className="flex w-full gap-3 md:flex-wrap">
            <SectionItem label={"status"} info={characterData.status} />
            <SectionItem label={"gender"} info={characterData.gender} />
            <SectionItem label={"species"} info={characterData.species} />
          </div>
          {characterData.type && (
            <SectionItem label={"type"} info={characterData.type} />
          )}
        </section>
        <div className="w-full md:w-2/3 pl-1">
          <section className="flex flex-wrap text-left gap-3 p-1">
            <SectionHeader
              label={"Location"}
              icon={<LocationMarkerIcon className={iconClassNames} />}
            />
            <div className="flex flex-wrap gap-2 w-full md:flex-nowrap">
              <SectionItem
                label={"at birth"}
                info={characterData.origin.name}
              />
              <SectionItem
                label={"current"}
                info={characterData.location.name}
              />
            </div>
          </section>
          <section className="flex flex-wrap w-full text-left gap-3 p-1">
            <SectionHeader
              label={"First sighting"}
              icon={<EyeIcon className={iconClassNames} />}
            />
            <SectionItem label={""} info={"episode no. " + episodeNumber} />
          </section>
        </div>
        <section className="w-full md:w-1/3 py-4 flex items-bottom justify-end">
          <FavButton data={characterData} />
        </section>
      </div>
    </div>
  );
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
