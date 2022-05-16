export const LoadMore = ({ onClick, hasNextPage, isFetchingNextPage }: any) => {
  return (
    <button
      onClick={() => onClick()}
      disabled={!hasNextPage || isFetchingNextPage}
      className={`text-3xl font-extrabold p-4 m-8 mb-11 font-getSchwifty hover:text-powderblue ${
        !hasNextPage && "text-zinc-400 hover:text-zinc-400"
      }`}>
      {hasNextPage ? "more results" : "no more results"}
    </button>
  );
};
