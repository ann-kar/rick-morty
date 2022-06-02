import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { Gender, ICharacter, IInfo, Status } from "../../interfaces/interfaces";
import { Services } from "../../services/services";
import { CharacterItem } from "./CharacterItem";
import { LoadMore } from "./LoadMore";
import { Error } from "../Error";
import { Loading } from "../Loading";

export const SearchResults = ({
  initialData,
  nameQuery,
  status,
  gender,
}: {
  initialData?: IInfo<ICharacter[]>;
  nameQuery: string;
  status: Status | "";
  gender: Gender | "";
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    isLoading,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["getCharacters", { name: nameQuery, status: status, gender: gender }],
    ({ pageParam = 1 }) =>
      Services.getCharacters({
        name: nameQuery,
        status: status,
        gender: gender,
        pageParam: pageParam,
      }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.info.next) {
          return currentPage + 1;
        }
        return undefined;
      },
    }
  );

  const getMore = () => {
    setCurrentPage(currentPage + 1);
    fetchNextPage();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error && nameQuery.length > 2) {
    return <Error type="no-results" />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-wrap justify-center">
      <h2 className="w-full mx-auto xl:max-w-7xl text-xs sm:text-sm font-bold tracking-wide uppercase text-slate-700 text-left p-5 pt-0 mb-4">
        Number of relevant beings:{" "}
        <strong className="font-extrabold text-md">
          {initialData
            ? initialData?.info?.count
            : data?.pages[0].info.count}
        </strong>
      </h2>
      <div className="grid xl:max-w-7xl px-4 grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mx-auto">
        {/* {data &&
          data.pages.map((page) =>
            page.results.map((character: ICharacter) => {
              return <CharacterItem key={character.id} data={character} />;
            })
          )} */}

        {initialData &&
          initialData?.results?.map((character: ICharacter) => {
            return <CharacterItem key={character.id} data={character} />;
          })}
      </div>
      <div className="relative w-full flex justify-center">
        <LoadMore
          onClick={getMore}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
    </div>
  );
};
