interface HeroHeaderProps {
  label: string;
}

export const HeroHeader = ({ label }: HeroHeaderProps) => {
  return (
    <>
      <div className="text-2xl sm:text-4xl lg:text-6xl font-extrabold py-6 text-center sm:text-left text-powderblue">
        {label}
      </div>
    </>
  );
};
