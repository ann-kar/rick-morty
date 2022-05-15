import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface SearchBoxProps {
  setNameQuery: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<string>>;
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
    if (e.target.value.length > 0) {
      setStatus(e.target.value);
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
        <option value="" className="text-gray-600">
          any
        </option>
        <option value="Dead">dead</option>
        <option value="Alive">alive</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  );
};
