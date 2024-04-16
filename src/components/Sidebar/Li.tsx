'use client'

import { closeSidebar, sidebarIsOpen } from "@/lib/features/headerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { usePathname } from 'next/navigation'

interface Props {
  title: string;
  icon: React.ReactNode;
  pathname: string;
}

export const Li = ({ title, icon, pathname }: Props) => {
  const currentPathname = usePathname()
  const dispatch = useAppDispatch();
  const openSidebar = useAppSelector((state) => state.header.openSidebar);

  return (
    <li className="flex justify-center w-full">
      <Link
        href={pathname}
        passHref
        className={`flex items-center px-2 py-1 w-full rounded-lg hover:bg-primaryBlue ${
          currentPathname === pathname && "bg-primaryBlue"
        }`}
        onClick={() => openSidebar && dispatch(closeSidebar())}
      >
        {icon}
        <span
          className={`pl-2 font-semibold text-md ${
            currentPathname === pathname
              ? "text-white"
              : "text-black dark:text-white"
          }`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};