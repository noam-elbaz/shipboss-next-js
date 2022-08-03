import React from "react";

export default function TabBar({ tabs }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <nav className="flex space-x-4">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            className={classNames(
              tab.current
                ? "bg-red-100 text-red-600 hover:bg-red-200"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
              "px-3 py-2 font-medium text-sm rounded-md"
            )}
          >
            {tab.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
