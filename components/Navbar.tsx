import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  return (
    <nav className="justify-end font-semibold tracking-wide bg-gray-100 flex gap-5 p-3 uppercase text-xs sm:text-sm md:text-md">
      <NavbarLink
        href={"/favourite-characters"}
        label={"favourites"}
      />
      <NavbarLink href={"/characters"} label={"characters"} />
    </nav>
  );
};
