import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { Gender, ICharacter, Status } from "../interfaces/interfaces";
import { Services } from "../services/services";
import { CharacterItem } from "./charactersPage/CharacterItem";
import { LoadMore } from "./LoadMore";

export const SearchResults = ({
  nameQuery,
  status,
  gender,
}: {
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
    return <div>Loading...</div>;
  }

  if (error && nameQuery.length > 2) {
    return (
      <div>
        I haven&apos;t heard of such a being. And I know everything, mind you.
      </div>
    );
  }

  if (error) {
    return <div>Sorry, it seems I have trouble accessing my memory today.</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      <h2 className="w-full text-xs sm:text-sm font-bold tracking-wide uppercase text-slate-700 text-left p-5 pt-0 mb-4">
        Number of relevant beings:{" "}
        <strong className="font-extrabold text-md">
          {data?.pages[0].info.count}
        </strong>
      </h2>
      <div className="grid xl:max-w-7xl px-4 grid-cols-2 grid-flow-row xs:grid-cols-3  sm:grid-cols-4 md:grid-cols-5 gap-4 mx-auto">
        {data &&
          data.pages.map((page) =>
            page.results.map((character: ICharacter) => {
              return <CharacterItem key={character.id} data={character} />;
            })
          )}
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
