import React, { useEffect, useRef, useState } from "react";
import { FedExLogo, UPSLogo, DHLLogo } from "./CarrierLogos";

const people = [
  {
    date: "2022-07-19 15:06:58",
    carrier: FedExLogo,
    service: "FedEx Standard Overnight",
    tracking: "#275731798423",
    from: "Ocean NJ US",
    to: "14391 E 4th Ave",
    estimate: "$87.52",
  },
  {
    date: "2022-07-14 12:49:08",
    carrier: UPSLogo,
    service: "UPS Ground",
    tracking: "#275534008393",
    from: "Gold Phoenix - Pudong, CN",
    to: "Zevi - Redmond, WA US",
    estimate: "$250.38",
  },
  {
    date: "2022-07-19 15:06:58",
    carrier: DHLLogo,
    service: "DHL Standard Overnight",
    tracking: "#275731798423",
    from: "Ocean NJ US",
    to: "14391 E 4th Ave",
    estimate: "$87.52",
  },
  {
    date: "2022-07-14 12:49:08",
    carrier: FedExLogo,
    service: "FedEx Ground",
    tracking: "#275534008393",
    from: "Gold Phoenix - Pudong, CN",
    to: "Zevi - Redmond, WA US",
    estimate: "$250.38",
  },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Table() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="">
      <div className="">
        <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded">
          {selectedPeople.length > 0 && (
            <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
              <button
                type="button"
                className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Bulk edit
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Delete all
              </button>
            </div>
          )}
          <table className="min-w-full table-fixed divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                  <input
                    type="checkbox"
                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 sm:left-6"
                    ref={checkbox}
                    checked={checked}
                    onChange={toggleAll}
                  />
                </th>
                <th
                  scope="col"
                  className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Carrier
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Service
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Tracking
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  From Address
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  To Address
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Estimate
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {people.map((person, index) => (
                <tr key={index} className="even:bg-gray-50 pr-0">
                  <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                    {selectedPeople.includes(person) && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-red-600" />
                    )}
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 sm:left-6"
                      value={person.email}
                      checked={selectedPeople.includes(person)}
                      onChange={(e) =>
                        setSelectedPeople(
                          e.target.checked
                            ? [...selectedPeople, person]
                            : selectedPeople.filter((p) => p !== person)
                        )
                      }
                    />
                  </td>
                  <td
                    className={classNames(
                      "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                      selectedPeople.includes(person)
                        ? "text-red-600"
                        : "text-gray-900"
                    )}
                  >
                    {person.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {React.createElement(person.carrier)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.service}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-blue-600 underline hover:text-blue-800 cursor-pointer">
                    {person.tracking}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.from}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.to}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.estimate}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm">
                    <a href="#" className="text-red-500 hover:text-red-900">
                      Actions<span className="sr-only">, {person.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
