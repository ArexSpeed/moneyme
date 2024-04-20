'use client'

import { MoonIcon, SunIcon } from "@/components/Icons";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <div className="flex flex-row items-center justify-center w-full text-black rounded-lg bg-light-primary dark:text-white dark:bg-dark-primary">
      <div
        className="flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md bg-transparent"
      >
        <SunIcon className="w-6 h-6" />
        Light
      </div>
      <div
        className="flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md  bg-transparent"
      >
        <MoonIcon className="w-6 h-6" />
        Dark
      </div>
    </div>
  )
  return (
    <div className="flex flex-row items-center justify-center w-full text-black rounded-lg bg-light-primary dark:text-white dark:bg-dark-primary">
      <button
        type="button"
        className="flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md bg-light-secondary dark:bg-transparent"
        onClick={() => setTheme("light")}
      >
        <SunIcon className="w-6 h-6" />
        Light
      </button>
      <button
        type="button"
        className="flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md  bg-transparent dark:bg-dark-secondary"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="w-6 h-6" />
        Dark
      </button>
    </div>
  );
}