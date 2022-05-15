import { SearchBox } from "./SearchBox";
import { useState } from "react";
import { SearchResults } from "../SearchResults";

export const CharactersView = () => {
  const [nameQuery, setNameQuery] = useState("");

  return (
    <div className="bg-gray-50 flex flex-col">
      <h1 className="block w-full text-left mb-4 text-3xl font-medium text-gray-900">
        Who are you looking for?
      </h1>
      <SearchBox setNameQuery={setNameQuery} />
      <SearchResults nameQuery={nameQuery} />
    </div>
  );
};
