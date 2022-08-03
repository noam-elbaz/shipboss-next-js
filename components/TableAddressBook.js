import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

const addresses = [
  {
    address: {
      country: "USA",
      line_one: "14828 East 4th Avenue",
      zip: 90211,
      city: "Aurora",
      state: "Coloarado",
    },
    contact: {
      name: "Joe Smith",
      company: "Widgets Inc",
      phone: "123456789",
      email: "joesmith@gmail.com",
    },
    saved_to: "company",
  },
  {
    address: {
      country: "USA",
      line_one: "4828 East 4th Avenue",
      zip: 94334,
      city: "Glendale",
      state: "California",
    },
    contact: {
      name: "Jane Doe",
      company: "Gadgets Inc",
      phone: "678906789",
      email: "janedoe@gmail.com",
    },
    saved_to: "user",
  },
  {
    address: {
      country: "USA",
      line_one: "657 Broadway Street",
      zip: 91304,
      city: "El Segundo",
      state: "Texas",
    },
    contact: {
      name: "Mike Green",
      company: "Plastics Inc",
      phone: "4576476466",
      email: "green@plastics.com",
    },
    saved_to: "company",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TableAddressBook() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedaddresses, setSelectedaddresses] = useState([]);

  useEffect(() => {
    const isIndeterminate =
      selectedaddresses.length > 0 &&
      selectedaddresses.length < addresses.length;
    setChecked(selectedaddresses.length === addresses.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedaddresses]);

  function toggleAll() {
    setSelectedaddresses(checked || indeterminate ? [] : addresses);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="">
      <div className="">
        <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded">
          {selectedaddresses.length > 0 && (
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
                  className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Name / Company
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Phone / Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Saved To
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
              {addresses.map((address, index) => (
                <tr key={index} className="even:bg-gray-50 pr-0">
                  <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                    {selectedaddresses.includes(address) && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-red-600" />
                    )}
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 sm:left-6"
                      value={address.email}
                      checked={selectedaddresses.includes(address)}
                      onChange={(e) =>
                        setSelectedaddresses(
                          e.target.checked
                            ? [...selectedaddresses, address]
                            : selectedaddresses.filter((p) => p !== address)
                        )
                      }
                    />
                  </td>
                  <td
                    className={classNames(
                      "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                      selectedaddresses.includes(address)
                        ? "text-red-600"
                        : "text-gray-900"
                    )}
                  >
                    {address.contact.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {address.address.country}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-blue-600 underline hover:text-blue-800 cursor-pointer">
                    {address.contact.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {address.saved_to}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-sm space-x-2">
                    <Button label="Edit" />
                    <Button label="Delete" />
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
