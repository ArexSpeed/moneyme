import { MoonIcon, SunIcon } from "@/components/Icons";
import { selectedTheme, setTheme } from "@/lib/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";


export function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectedTheme);

  return (
    <div className="flex flex-row items-center justify-center w-full text-black rounded-lg bg-red-100 dark:text-white dark:bg-red-100">
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md ${theme === "light" && "bg-white "}`}
        onClick={() => dispatch(setTheme("light"))}
      >
        <SunIcon />
        Light
      </button>
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md  ${theme === "dark" && "bg-black"}`}
        onClick={() => dispatch(setTheme("dark"))}
      >
        <MoonIcon />
        Dark
      </button>
    </div>
  );
}