import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Image from "next/image";
import { ClipboardListIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/solid";

import { FavButton } from "../../components/FavButton";
import { Services } from "../../services/services";
import { SectionHeader } from "../../components/characterPage/SectionHeader";
import { SectionItem } from "../../components/characterPage/SectionItem";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

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

  const iconClassNames = "h-8 w-8 mr-2";
  const episodeNumber = data?.episode[0].substring(
    data.episode[0].lastIndexOf("/") + 1
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div>
      <div className="md:h-64 w-full bg-gray-100">
        <div className="w-9/10 sm:w-4/5 max-w-7xl mx-auto h-full items-center sm:hidden">
          <Image alt={data.name} src={data.image} width="350" height="350" />
          <h1 className="p-2 text-4xl sm:text-5xl md:text-7xl font-getSchwifty font-bold pl-8">
            {data.name}
          </h1>
        </div>
        <div className="hidden sm:flex w-9/10 sm:w-4/5 max-w-7xl mx-auto h-full items-center">
          <div className="sm:w-1/3 sm:min-w-[250px] bg-black h-full">
            <Image
              alt={data.name}
              src={data.image}
              width="256px"
              height="256px"
              className="rounded-md"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-getSchwifty font-bold pl-8">
            {data.name}
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
            <SectionItem label={"status"} info={data.status} />
            <SectionItem label={"gender"} info={data.gender} />
            <SectionItem label={"species"} info={data.species} />
          </div>
          {data.type && <SectionItem label={"type"} info={data.type} />}
        </section>
        <div className="w-full md:w-2/3 pl-1">
          <section className="flex flex-wrap text-left gap-3 p-1">
            <SectionHeader
              label={"Location"}
              icon={<LocationMarkerIcon className={iconClassNames} />}
            />
            <div className="flex flex-wrap gap-2 w-full md:flex-nowrap">
              <SectionItem label={"at birth"} info={data.origin.name} />
              <SectionItem label={"current"} info={data.location.name} />
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
          <FavButton data={data} />
        </section>
      </div>
    </div>
  );
};

export default CharacterProfile;
