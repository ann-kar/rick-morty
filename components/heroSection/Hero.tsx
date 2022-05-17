import Image from "next/image";
import { ReactNode } from "react";
import { HeroHeader } from "./HeroHeader";

interface HeroProps {
  shortLabel: string;
  longLabel: string;
  children: ReactNode | ReactNode[];
}

export const Hero = ({ shortLabel, longLabel, children }: HeroProps) => {
  return (
    <div className="w-full  max-h-72 flex bg-gray-100">
      <div className="w-full flex flex-wrap justify-end items-center">
        <div className="w-4/5">
          <HeroHeader shortLabel={shortLabel} longLabel={longLabel} />
          <Image
            src="/logo.svg"
            className="m-6"
            alt="Rick and Morty"
            width="380px"
            height="100px"
          />
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};
