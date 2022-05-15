import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Status, statusArray } from "../../interfaces/interfaces";
import { NameQuery } from "../NameQuery";

interface SearchBoxProps {
  setNameQuery: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<Status | "">>;
}

export const SearchBox = ({ setNameQuery, setStatus }: SearchBoxProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="m-4 mb-8 flex flex-wrap gap-3">
      <div>
        <NameQuery query={query} handleChange={handleChange} />
      </div>
      <select
        className="text-gray-600 text-lg p-2.5 pr-6 border-2 rounded-lg bg-gray-100"
        name="status"
        id="status"
        onChange={handleStatus}>
        <option value={""} className="text-gray-600">
          any
        </option>
        {statusArray.map((status) => {
          return (
            <option key={status} value={status}>
              {status}
            </option>
          );
        })}
      </select>
    </div>
  );
};
