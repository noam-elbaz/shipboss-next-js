import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TabBar({ tabs }) {
  const router = useRouter();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <nav className="flex space-x-4">
        {tabs.map((tab) => (
          <Link href={tab.href} key={tab.name}>
            <a
              className={classNames(
                router.asPath === tab.href
                  ? "bg-red-100 text-red-600"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
                "px-3 py-2 font-medium text-sm rounded-md"
              )}
            >
              {tab.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}
