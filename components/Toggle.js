/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Toggle({ label, left }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group as="div" className="flex items-center">
      {left && (
        <Switch.Label as="span" className="mr-3">
          <span className="text-sm font-base text-gray-900">{label}</span>
        </Switch.Label>
      )}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-red-600" : "bg-gray-200",
          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-red-200"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      </Switch>
      {!left && (
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-base text-gray-900">{label}</span>
        </Switch.Label>
      )}
    </Switch.Group>
  );
}
