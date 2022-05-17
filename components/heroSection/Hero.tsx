import Image from "next/image";
import { ReactNode } from "react";
import { HeroHeader } from "./HeroHeader";
import { HeroSubheader } from "./HeroSubheader";

interface HeroProps {
  header: string;
  subheader: string;
  children: ReactNode | ReactNode[];
}

export const Hero = ({ header, subheader, children }: HeroProps) => {
  return (
    <div className="w-full max-h-72 flex bg-gray-100">
      <div className="w-full flex flex-wrap justify-center xl:justify-end items-center">
        <div className="w-4/5 pt-6 sm:text-left">
          <div className="sm:hidden">
            <Image
              src="/logo.svg"
              alt="rick and morty logo"
              width="200px"
              height="50px"
            />
          </div>
          <HeroHeader label={header} />
          <HeroSubheader label={subheader} />
        </div>
      </div>
      <div className="hidden sm:block w-full">{children}</div>
    </div>
  );
};
