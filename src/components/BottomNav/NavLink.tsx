"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  pathname: string;
}

export const NavLink = ({ icon, pathname }: Props) => {
  const currentPathname = usePathname();

  return (
    <Link
      href={pathname}
      passHref
      className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      {icon}
    </Link>
  );
};
