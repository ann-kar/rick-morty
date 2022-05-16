import { ReactNode } from "react";
import { Navbar } from "./Navbar";

export interface LayoutProps {
  children?: ReactNode[] | ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar/>
      <main className="grow text-center">{children}</main>
    </div>
  );
};
