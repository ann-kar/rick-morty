interface HeroSubheaderProps {
  label: string;
}

export const HeroSubheader = ({ label }: HeroSubheaderProps) => {
  return (
    <>
      <div className="text-gray-400 pb-6 text-xs leading-4 sm:leading-5 sm:text-md xl:text-lg text-center sm:text-left">
        {label}
      </div>
    </>
  );
};
