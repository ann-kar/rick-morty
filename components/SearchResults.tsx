import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { ICharacter, Status } from "../interfaces/interfaces";
import { Services } from "../services/services";
import { CharacterItem } from "./characterPage/CharacterItem";

export const SearchResults = ({
  nameQuery,
  status,
}: {
  nameQuery: string;
  status: Status | "";
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
    ["getCharacters", { name: nameQuery, status: status }],
    ({ pageParam = 1 }) =>
      Services.getCharacters({
        name: nameQuery,
        status: status,
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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error has occurred.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mx-auto">
        {data &&
          data.pages.map((page) =>
            page.results.map((character: ICharacter) => {
              return <CharacterItem key={character.id} data={character} />;
            })
          )}
      </div>
      <button
        onClick={() => {
          setCurrentPage(currentPage + 1);
          fetchNextPage();
        }}
        disabled={!hasNextPage || isFetchingNextPage}>
        load more
      </button>
    </>
  );
};
