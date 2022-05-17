interface HeroHeaderProps {
  shortLabel: string;
  longLabel: string;
}

export const HeroHeader = ({ shortLabel, longLabel }: HeroHeaderProps) => {
  return (
    <>
      <div className="md:hidden text-xl sm:text-2xl w-full font-getSchwifty text-zinc-600 font-bold my-3">
        {shortLabel}
      </div>
      <div className="hidden md:block md:text-3xl lg:text-4xl xl:text-5xl w-full font-getSchwifty text-zinc-600 font-bold my-3">
        {longLabel}
      </div>
    </>
  );
};
