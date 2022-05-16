import { ChangeEvent } from "react";
import { InputLabel } from "./InputLabel";

interface FilterProps {
  name: string;
  onChange: () => void;
  options: Array<string>;
}

export const Filter = ({ name, onChange, options }: FilterProps) => {
  return (
    <div>
      <InputLabel label={name} />
      <select
        className="text-gray-600 text-lg p-2.5 pr-6 border-2 rounded-lg bg-gray-100"
        name={name}
        id={name}
        onChange={onChange}>
        <option value={""} className="text-gray-600">
          any
        </option>
        {options.map((option: any) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
