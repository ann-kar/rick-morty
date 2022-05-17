import { ChangeEvent } from "react";
import { InputLabel } from "./InputLabel";

interface NameQueryProps {
  query: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const NameQuery = ({ query, handleChange }: NameQueryProps) => (
  <>
    <InputLabel label={"name"} />
    <input
      name="nameInput"
      value={query}
      onChange={handleChange}
      placeholder={"Enter name"}
      className="border border-gray-300 text-gray-900 text-lg rounded-lg block p-2.5"
    />
  </>
);
