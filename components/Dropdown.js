/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({
  options,
  placeholder = "Select an option...",
}) {
  const [selected, setSelected] = useState(placeholder);

  return (
    <Listbox value={selected} onChange={setSelected} as="div">
      {({ open }) => (
        <>
          <Listbox.Button
            as="button"
            className="flex  justify-between w-64 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-2 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
          >
            <span className="block truncate">{selected}</span>
            <span className="flex items-center pointer-events-none">
              <SelectorIcon className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              as="ul"
              className="absolute z-20 mt-1 w-64 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    classNames(
                      active ? "text-white bg-red-600" : "text-gray-900",
                      "cursor-default select-none relative py-2 pl-3 pr-9"
                    )
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate"
                        )}
                      >
                        {option}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-red-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
}
