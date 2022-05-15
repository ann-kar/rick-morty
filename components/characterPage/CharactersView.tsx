import { SearchBox } from "./SearchBox";
import { useState } from "react";
import { SearchResults } from "../SearchResults";
import { Status } from "../../interfaces/interfaces";

export const CharactersView = () => {
  const [nameQuery, setNameQuery] = useState("");
  const [status, setStatus] = useState<Status | undefined>(undefined);

  return (
    <div className="bg-gray-50 flex flex-col">
      <h1 className="block w-full text-left mb-4 text-3xl font-medium text-gray-900">
        Who are you looking for?
      </h1>
      <SearchBox setNameQuery={setNameQuery} setStatus={setStatus} />
      <SearchResults nameQuery={nameQuery} />
    </div>
  );
};
