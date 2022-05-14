import { ReactNode } from "react";

export interface LayoutProps {
  children?: ReactNode[] | ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <nav>navigation</nav>
      <h1>header</h1>
      <main className="grow py-4 text-center">{children}</main>
    </div>
  );
};
