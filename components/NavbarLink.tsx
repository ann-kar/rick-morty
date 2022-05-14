import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

interface NavbarLinkProps {
  label: string;
  href: string;
}

export const NavbarLink = ({ label, href }: NavbarLinkProps) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a
        className={
          asPath === href ? "text-green-600 font-bold" : "text-slate-600"
        }>
        {label}
      </a>
    </Link>
  );
};
