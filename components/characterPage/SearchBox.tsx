import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Status, statusArray } from "../../interfaces/interfaces";

interface SearchBoxProps {
  setNameQuery: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<Status | undefined>>;
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

    if (statusArray.find((el) => el === e.target.value) || e.target.value === undefined) {
      setStatus(e.target.value as Status || undefined);
    }
  };

  return (
    <div className="m-4 mb-8 flex flex-wrap gap-3">
      <div>
        <input
          name="nameInput"
          value={query}
          onChange={handleChange}
          placeholder={"Enter name"}
          className="border border-gray-300 text-gray-900 text-lg rounded-lg block p-2.5"
        />
      </div>
      <select
        className="text-gray-600 text-lg p-2.5 pr-6 border-2 rounded-lg bg-gray-100"
        name="status"
        id="status"
        onChange={handleStatus}>
        <option value={undefined} className="text-gray-600">
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
