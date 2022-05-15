import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Gender, genderArray, Status, statusArray } from "../../interfaces/interfaces";
import { Filter } from "../Filter";
import { NameQuery } from "../NameQuery";

interface SearchBoxProps {
  setNameQuery: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<Status | "">>;
  setGender: Dispatch<SetStateAction<Gender | "">>;
}

export const SearchBox = ({ setNameQuery, setStatus, setGender }: SearchBoxProps) => {
  const [query, setQuery] = useState("");

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      setNameQuery(e.target.value);
    }
  };

  const handleStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    if (statusArray.find((el) => el === e.target.value)) {
      setStatus(e.target.value as Status);
    } else {
      setStatus("");
    }
  };

  const handleGender = (e: ChangeEvent<HTMLSelectElement>) => {
    if (genderArray.find((el) => el === e.target.value)) {
      setGender(e.target.value as Gender);
    } else {
      setGender("");
    }
  }

  return (
    <div className="m-4 mb-8 flex flex-wrap gap-3">
      <div>
        <NameQuery query={query} handleChange={handleQuery} />
      </div>
      <Filter name={"status"} onChange={handleStatus} options={statusArray} />
      <Filter name={"gender"} onChange={handleGender} options={genderArray} />
    </div>
  );
};
