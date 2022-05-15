import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { Gender, ICharacter, Status } from "../interfaces/interfaces";
import { Services } from "../services/services";
import { CharacterItem } from "./characterPage/CharacterItem";

export const SearchResults = ({
  nameQuery,
  status,
  gender
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error && nameQuery.length > 2) {
    return <div>I haven&apos;t heard of such a being. And I know everything, mind you.</div>
  }

  if (error) {
    return <div>Sorry, it seems I have trouble accessing my memory today.</div>;
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
