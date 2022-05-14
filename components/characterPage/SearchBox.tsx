import { ChangeEvent, useState } from "react";

export const SearchBox = () => {
  const [nameQuery, setNameQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNameQuery(value);
  };

  return (
    <div className="m-4 mb-8 flex flex-wrap gap-3">
      <div>
        <input
          name="nameInput"
          value={nameQuery}
          onChange={handleChange}
          placeholder={"Enter name"}
          className="border border-gray-300 text-gray-900 text-lg rounded-lg block p-2.5"
        />
      </div>
    </div>
  );
};
