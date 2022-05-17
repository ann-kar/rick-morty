interface SectionHeaderProps {
  label: string;
  icon: JSX.Element;
}

export const SectionHeader = ({ label, icon }: SectionHeaderProps) => (
  <div className="w-full flex items-center mx-auto font-extrabold text-zinc-900 text-2xl text-left pt-3 p-1">
    {icon}
    <h3>{label}</h3>
  </div>
);
