import { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const SearchBox = ({ setNameQuery }: any) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      setNameQuery(e.target.value);
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
    </div>
  );
};
