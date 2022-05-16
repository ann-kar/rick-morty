import { SearchBox } from "./SearchBox";
import { useState } from "react";
import { SearchResults } from "../SearchResults";
import { Gender, Status } from "../../interfaces/interfaces";
import { Hero } from "../Hero";

export const CharactersView = () => {
  const [nameQuery, setNameQuery] = useState("");
  const [status, setStatus] = useState<Status | "">("");
  const [gender, setGender] = useState<Gender | "">("");

  return (
    <div className="flex flex-col">
      <Hero />
      <SearchBox
        setNameQuery={setNameQuery}
        setStatus={setStatus}
        setGender={setGender}
      />
      <SearchResults nameQuery={nameQuery} status={status} gender={gender} />
    </div>
  );
};
