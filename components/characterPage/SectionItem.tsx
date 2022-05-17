import { InputLabel } from "../InputLabel";

interface SectionItemProps {
  label: string;
  info: string;
}

export const SectionItem = ({ label, info }: SectionItemProps) => {
  return (
    <div className="w-full rounded-md border-powderblue/10 border-2 bg-gradient-to-br from-white to-powderblue/10 text-xl p-2">
      <InputLabel label={label} />
      <div className="ml-1 tracking-wider">{info}</div>
    </div>
  );
};
