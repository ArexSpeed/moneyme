import React from "react";
import { NavLink } from "./NavLink";
import { OverviewIcon } from "../Icons";

export const BottomNav = () => {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <NavLink
          pathname="/groups/overview"
          icon={<OverviewIcon className="w-6 h-6 text-white" />}
        />
        <NavLink
          pathname="/groups/overview"
          icon={<OverviewIcon className="w-6 h-6 text-white" />}
        />

        <div className="flex items-center justify-center">
          <button
            data-tooltip-target="tooltip-new"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="sr-only">New item</span>
          </button>
        </div>
        <div
          id="tooltip-new"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Create new item
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <NavLink
          pathname="/groups/overview"
          icon={<OverviewIcon className="w-6 h-6 text-white" />}
        />
        <NavLink
          pathname="/groups/overview"
          icon={<OverviewIcon className="w-6 h-6 text-white" />}
        />
      </div>
    </div>
  );
};
