'use client'

import {
  MenuIcon
} from "@/components/Icons";
import { Li } from "./Li";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useAppSelector } from "@/lib/hooks";

export const Sidebar = () => {
  const openSidebar = useAppSelector((state) => state.header.openSidebar);

  return (
    <nav className="relative z-10">
      <div
        className={`bg-primary justify-between flex flex-col p-4 w-full h-[calc(100vh_-_64px)] fixed t-10 transition-transform duration-300 bg-primaryLight dark:bg-primaryDark ${
          !openSidebar && "-translate-x-full"
        } md:sticky md:w-[256px] md:translate-x-0`}
      >
        <ul className="flex flex-col gap-2">
          <Li title="Home" icon={<MenuIcon />} pathname="/" />
          <Li title="Groups" icon={<MenuIcon />} pathname="/groups" />
          <Li title="People" icon={<MenuIcon />} pathname="/people" />
          <Li title="Settlements" icon={<MenuIcon />} pathname="/settlements" />
          <Li title="Settings" icon={<MenuIcon />} pathname="/settings" />
          <Li title="Docs" icon={<MenuIcon />} pathname="/docs" />
        </ul>
        <div className="flex flex-col w-full gap-4 py-4">
          <ThemeToggle />
          
        </div>
      </div>
    </nav>
  );
};