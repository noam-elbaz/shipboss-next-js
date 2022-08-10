import { useState, useEffect } from "react";
import Card from "../components/Card";
import CardActions from "../components/CardActions";
import CardContent from "../components/CardContent";
import CardTitle from "../components/CardTitle";
import { InformationCircleIcon, CheckCircleIcon } from "@heroicons/react/solid";
import DropdownFilterPeople from "../components/DropdownFilterPeople";
import Button from "../components/Button";
import {
  FedExLogoNoBG,
  DHLLogoNoBG,
  UPSLogoNoBG,
} from "../components/CarrierLogos";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NewShipment() {
  const [billDuty, setBillDuty] = useState("receiver");
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pickupRequired, setPickupRequired] = useState(false);
  const [makeCommercialInvoice, setMakeCommercialInvoice] = useState(false);
  const [thirdPartyBilling, setThirdPartyBilling] = useState(false);
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [residentialAddress, setResidentialAdderess] = useState(false);
  const [switchedAddresses, setSwitchedAddresses] = useState(false);
  const [fromAddress, setFromAddress] = useState(0);
  const [toAddress, setToAddress] = useState(0);
  const [packageDetailInput, setPackageDetailInput] = useState({
    id: null,
    type: null,
    quantity: 0,
    weight: 0,
    length: 0,
    width: 0,
    height: 0,
    addons: [
      { key: "choose", title: "Choose...", active: false },
      { key: "signature", title: "Signature", active: false },
      { key: "dry-ice", title: "Dry Ice", active: false },
      { key: "reference", title: "Reference", active: false },
      { key: "insurance", title: "Insurance", active: false },
    ],
  });

  const [packages, setPackages] = useState([]);

  const handleChange = (event) => {
    setBillDuty(event.target.value);
  };

  function reset() {
    setFromAddress(0);
    setToAddress(0);
  }

  function switchAddresses() {
    let tempTo = toAddress;
    let tempFrom = fromAddress;

    setFromAddress(tempTo);
    setToAddress(tempFrom);
  }

  const addresses = [
    {
      id: 0,
      name: "Select address...",
    },
    {
      id: 1,
      name: "John Smith",
      company: "Widgets Unlimited LLC",
      address: {
        street: "343 Maple Dr",
        city: "Houston",
        state: "TX",
        zip: "92499",
      },
      contact: {
        phone: "(310) 656-2838",
        email: "jsmith@gmail.com",
      },
      isResidental: false,
    },
    {
      id: 2,
      name: "Rebecca O'Connor",
      company: "Coca Cola Co.",
      address: {
        street: "87 4th Ave.",
        city: "Dallas",
        state: "TX",
        zip: "83483",
      },
      contact: {
        phone: "(560) 333-3848",
        email: "roconnor@cocacola.com",
      },
      isResidental: false,
    },
    {
      id: 3,
      name: "Jacque Rouel",
      company: null,
      address: {
        street: "87 4th Ave.",
        city: "Paris",
        country: "France",
        zip: "46373",
      },
      contact: {
        phone: "+93 (23) 33-3842",
        email: "jaqueroel@gmail.com",
      },
      isResidental: true,
    },
  ];

  function addPackage() {
    if (packageDetailInput.weight != 0 && packageDetailInput.quantity != 0) {
      setPackages([...packages, packageDetailInput]);
      resetPackageDetailInput();
    }
  }

  const handleWeightInput = (event) => {
    if (event.target.value >= 0) {
      setPackageDetailInput({
        ...packageDetailInput,
        weight: event.target.value,
      });
    }
  };

  const handleWidthInput = (event) => {
    if (event.target.value >= 0) {
      setPackageDetailInput({
        ...packageDetailInput,
        width: event.target.value,
      });
    }
  };

  const handleHeightInput = (event) => {
    if (event.target.value >= 0) {
      setPackageDetailInput({
        ...packageDetailInput,
        height: event.target.value,
      });
    }
  };

  const handleLengthInput = (event) => {
    if (event.target.value >= 0) {
      setPackageDetailInput({
        ...packageDetailInput,
        length: event.target.value,
      });
    }
  };

  const handleQuantityInput = (event) => {
    if (event.target.value >= 0) {
      setPackageDetailInput({
        ...packageDetailInput,
        quantity: event.target.value,
      });
    }
  };

  const handleTypeInput = (event) => {
    setPackageDetailInput({
      ...packageDetailInput,
      type: event.target.value,
    });
  };

  const handlePrefillDimensions = (event) => {
    if (event.target.value === "standard") {
      setPackageDetailInput({
        ...packageDetailInput,
        length: 12,
        width: 8,
        height: 10,
      });
    } else if (event.target.value === "oversized") {
      setPackageDetailInput({
        ...packageDetailInput,
        length: 24,
        width: 16,
        height: 20,
      });
    } else {
      setPackageDetailInput({
        ...packageDetailInput,
        length: 0,
        width: 0,
        height: 0,
      });
    }
  };

  const handleAddonRemoval = (event) => {
    let tempArray = [];

    packageDetailInput.addons.map((addon, index) => {
      if (index === event) {
        let tempItem = packageDetailInput.addons[event];
        tempItem.active = false;
      }
      tempArray.push(addon);
    });

    setPackageDetailInput({ ...packageDetailInput, addons: tempArray });
  };

  const handleAddonSelection = (event) => {
    let tempArray = [];
    let tempIndex = packageDetailInput.addons.findIndex(
      (addon) => addon.title === event.target.value
    );

    packageDetailInput.addons.map((addon, index) => {
      if (index === tempIndex) {
        let tempItem = packageDetailInput.addons[tempIndex];
        tempItem.active = true;
      }
      tempArray.push(addon);
    });

    setPackageDetailInput({ ...packageDetailInput, addons: tempArray });
  };

  function resetPackageDetailInput() {
    setPackageDetailInput({
      ...packageDetailInput,
      quantity: 0,
      weight: 0,
      length: 0,
      width: 0,
      height: 0,
    });
  }

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col space-y-4 sm:space-y-6 pb-32">
        <Card>
          <CardTitle title="New Shipment">
            <div className="flex place-items-center space-x-2 sm:space-x-4">
              <button
                onClick={switchAddresses}
                className="items-center px-2 py-1 sm:px-4 sm:py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <span>Switch</span>
                <span className="hidden sm:inline">&nbsp;Addresses</span>
              </button>
              <button
                onClick={reset}
                className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2  border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <span>Reset</span>
                <span className="hidden sm:inline">&nbsp;Order Form</span>
              </button>
            </div>
          </CardTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 w-full divide-y sm:divide-x sm:divide-y-0">
            {/* FROM - LEFT */}
            <div className="p-6">
              <div className="flex w-full place-items-center space-x-4 pb-6">
                <span className="font-semibold">From</span>
                <select
                  className={classNames(
                    "text-ellipsis w-full block py-2 border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",
                    fromAddress != 0 ? "text-black" : "text-gray-500"
                  )}
                  onChange={(event) => setFromAddress(event.target.value)}
                  value={fromAddress}
                >
                  {addresses.map((address) => (
                    <option value={address.id} key={address.id}>
                      {address.name}
                    </option>
                  ))}
                </select>
                <Button label="Edit" />
              </div>

              {fromAddress == 0 ? (
                <div className="p-12 bg-red-50 grid place-content-center text-red-400 rounded-lg">
                  Select a sender address...
                </div>
              ) : null}

              {fromAddress != 0 ? (
                <div className="p-12 bg-gray-50 grid place-content-center text-gray-400 rounded-lg">
                  Address selected: {addresses[fromAddress].name}
                </div>
              ) : null}
            </div>

            {/* TO - RIGHT */}
            <div className="p-6">
              <div className="flex w-full place-items-center space-x-4 pb-6">
                <span className="font-semibold">To</span>
                <select
                  className={classNames(
                    "text-ellipsis w-full block py-2 border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",
                    toAddress != 0 ? "text-black" : "text-gray-500"
                  )}
                  onChange={(event) => setToAddress(event.target.value)}
                  value={toAddress}
                >
                  {addresses.map((address) => (
                    <option value={address.id} key={address.id}>
                      {address.name}
                    </option>
                  ))}
                </select>
                <Button label="Edit" />
              </div>
              {toAddress == 0 ? (
                <div className="p-12 bg-red-50 grid place-content-center text-red-400 rounded-lg">
                  Select a sender address...
                </div>
              ) : null}
              {toAddress != 0 ? (
                <div className="p-12 bg-gray-50 grid place-content-center text-gray-400 rounded-lg ">
                  Address selected: {addresses[toAddress].name}
                </div>
              ) : null}
            </div>
          </div>
        </Card>

        <Card>
          <CardTitle title="Package Details">
            <span>
              ACTIVE:
              {
                packageDetailInput.addons.filter(
                  (addon) => addon.active === true
                ).length
              }
            </span>
            {packages === 0 && <span>No packages added</span>}
            {packages.length === 1 && <span>1 package added</span>}
            {packages.length > 1 && (
              <span>{packages.length} packages added</span>
            )}
          </CardTitle>

          <CardActions>
            <div className="flex flex-wrap gap-x-4 gap-y-6">
              <div className="flex flex-col gap-y-2 border border-gray-300 rounded-md pl-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                <label className="text-xs text-gray-900">Package Type</label>
                <select
                  value={packageDetailInput.type}
                  onChange={handleTypeInput}
                  className="p-0 pr-12 text-ellipsis text-base focus:border-none focus:outline-none rounded-lg border-0 border-transparent focus-within:ring-0"
                >
                  <option>Custom Package</option>
                  <option>Large Box</option>
                  <option>Medium Box</option>
                  <option>Small Box</option>
                  <option>Envelope</option>
                </select>
              </div>
              <div className="relative flex flex-col gap-y-2 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                <label htmlFor="name" className="text-xs text-gray-900">
                  Quantity
                </label>
                <div className="absolute bottom-2 left-0 pl-3 flex  pointer-events-none">
                  <span className="text-gray-500 text-base ">#</span>
                </div>
                <input
                  type="number"
                  value={packageDetailInput.quantity}
                  onChange={handleQuantityInput}
                  className="w-24 pl-4 inline border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-base"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col gap-y-2 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                <label htmlFor="name" className="text-xs text-gray-900">
                  Pkg. Weight<span className="text-gray-500">&nbsp;lbs.</span>
                </label>
                <input
                  value={packageDetailInput.weight}
                  onChange={handleWeightInput}
                  type="number"
                  className="inline w-24 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-base"
                  placeholder="0"
                />
              </div>

              <div className="flex -space-x-[1px]">
                <div className="flex flex-col gap-y-2 border border-gray-300 rounded-l-md pl-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600 focus-within:z-10">
                  <label className="text-xs text-gray-900">
                    Prefill Dimensions
                  </label>
                  <select
                    onChange={handlePrefillDimensions}
                    className="w-40 p-0 pr-12 text-ellipsis text-base focus:border-none focus:outline-none rounded-lg border-0 border-transparent focus-within:ring-0"
                  >
                    <option>Choose...</option>
                    <option value={"standard"}>Standard 12 x 8 x 10</option>
                    <option value={"oversized"}>Oversized 24 x 16 x 20</option>
                  </select>
                </div>
                <div className="flex flex-col gap-y-2 border border-gray-300  px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600 focus-within:z-10">
                  <label htmlFor="name" className="text-xs text-gray-900">
                    Length<span className="text-gray-500">&nbsp;in.</span>
                  </label>
                  <input
                    type="number"
                    value={packageDetailInput.length}
                    onChange={handleLengthInput}
                    className="w-16 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-base"
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col gap-y-2 border border-gray-300 px-3 py-2  shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600 focus-within:z-10">
                  <label htmlFor="name" className="text-xs text-gray-900">
                    Width<span className="text-gray-500">&nbsp;in.</span>
                  </label>
                  <input
                    type="number"
                    value={packageDetailInput.width}
                    onChange={handleWidthInput}
                    className="w-16 flex-1 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-base"
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col gap-y-2 border border-gray-300 rounded-r-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600 focus-within:z-10">
                  <label htmlFor="name" className="text-xs text-gray-900">
                    Height<span className="text-gray-500">&nbsp;in.</span>
                  </label>
                  <input
                    type="number"
                    value={packageDetailInput.height}
                    onChange={handleHeightInput}
                    className="w-16 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-base"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2 border border-gray-300 rounded-md pl-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                <label className="text-xs text-gray-900">Addon Options</label>
                <select
                  onChange={handleAddonSelection}
                  value="yo"
                  className="w-32 p-0 pr-10 text-ellipsis text-base focus:border-none focus:outline-none rounded-lg border-0 border-transparent focus-within:ring-0"
                >
                  {packageDetailInput.addons.map((addon, index) => (
                    <option
                      key={index}
                      value={packageDetailInput.addons[index].value}
                    >
                      {packageDetailInput.addons[index].title}
                    </option>
                  ))}
                </select>
              </div>
              {packageDetailInput.addons[1].active === true && (
                <div className="flex flex-col gap-y-2 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                  <label className="text-xs text-gray-900 flex justify-between">
                    <div>Signature</div>
                    <button
                      onClick={() => handleAddonRemoval(1)}
                      className="text-red-500 font-medium hover:text-red-700"
                    >
                      Remove
                    </button>
                  </label>
                  <select className="p-0 pr-12 text-ellipsis text-base focus:border-none focus:outline-none rounded-lg border-0 border-transparent focus-within:ring-0">
                    <option default>Choose...</option>
                    <option>Signature 1</option>
                    <option>Signature 2</option>
                  </select>
                </div>
              )}
              {packageDetailInput.addons[2].active === true && (
                <div className="flex flex-col gap-y-2 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                  <label className="text-xs text-gray-900 flex justify-between">
                    <div>
                      Dry Ice<span className="text-gray-500">&nbsp;lbs</span>
                    </div>
                    <button
                      onClick={() => handleAddonRemoval(2)}
                      className="text-red-500 font-medium hover:text-red-700"
                    >
                      Remove
                    </button>
                  </label>
                  <input
                    value={packageDetailInput.weight}
                    type="number"
                    className="inline w-40 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-base"
                    placeholder="0"
                  />
                </div>
              )}
              {packageDetailInput.addons[3].active === true && (
                <div className="flex flex-col gap-y-2 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                  <label className="text-xs text-gray-900 flex justify-between">
                    <div>References</div>
                    <button
                      onClick={() => handleAddonRemoval(3)}
                      className="text-red-500 font-medium hover:text-red-700"
                    >
                      Remove
                    </button>
                  </label>
                  <select className="p-0 pr-12 text-ellipsis text-base focus:border-none focus:outline-none rounded-lg border-0 border-transparent focus-within:ring-0">
                    <option default>Choose...</option>
                    <option>Ref 1</option>
                    <option>Ref 2</option>
                  </select>
                </div>
              )}
              {packageDetailInput.addons[4].active === true && (
                <div className="flex flex-col gap-y-2 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                  <label className="text-xs text-gray-900 flex justify-between">
                    <div>
                      Insurance
                      <span className="text-gray-500">&nbsp;$USD</span>
                    </div>
                    <button
                      onClick={() => handleAddonRemoval(4)}
                      className="text-red-500 font-medium hover:text-red-700"
                    >
                      Remove
                    </button>
                  </label>
                  <input
                    value={packageDetailInput.weight}
                    type="number"
                    className="inline w-40 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-base"
                    placeholder="0"
                  />
                </div>
              )}

              <button
                onClick={addPackage}
                className={classNames(
                  "grow-1 md:grow-0 flex-1 md:flex-0 whitespace-nowrap place-self-center px-4 py-5 border border-transparent font-medium text-base rounded-md shadow-sm transition-all duration-200",
                  packageDetailInput.weight == 0 ||
                    packageDetailInput.quantity == 0
                    ? "bg-gray-200 text-gray-400 hover:bg-gray-200"
                    : "bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                )}
              >
                Add Pkg.
              </button>
            </div>

            <div className="hidden space-x-2">
              <div className="flex flex-col">
                <label className="text-xs pb-2 font-medium text-gray-700">
                  Insurance
                </label>
                <input
                  value={packageDetailInput.quantity}
                  onChange={handleQuantityInput}
                  placeholder="0"
                  type="number"
                  className="pl-7 w-20 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-md border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs pb-2 font-medium text-gray-700">
                  Dry Ice
                </label>
                <div className="flex space-x-2 place-items-center">
                  <input
                    value={packageDetailInput.quantity}
                    onChange={handleQuantityInput}
                    placeholder="0"
                    type="number"
                    className="pl-7 w-20 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-md border-gray-300 rounded-md"
                  />
                  <div className="relative flex items-start">
                    <div className="ml-4 flex items-center h-5">
                      <input
                        type="checkbox"
                        className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">Medical use</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs pb-2 font-medium text-gray-700">
                  Reference #1
                </label>
                <select className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-md">
                  <option>Ref name one</option>
                  <option>Ref name two</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs pb-2 font-medium text-gray-700">
                  Reference #2
                </label>
                <select className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-md">
                  <option>Ref name one</option>
                  <option>Ref name two</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs pb-2 font-medium text-gray-700">
                  Signature
                </label>
                <select className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-md rounded-md">
                  <option>Adult signature required</option>
                  <option>Signature required</option>
                  <option>Signature may be required</option>
                  <option>Signature not required</option>
                  <option>Default for that service</option>
                </select>
              </div>
              <button
                onClick={addPackage}
                className={classNames(
                  "px-4 py-2 text-sm border border-transparent font-medium rounded-md shadow-sm text-white transition-all duration-200",
                  packageDetailInput.weight == 0 ||
                    packageDetailInput.quantity == 0
                    ? "bg-gray-300 text-gray-400 hover:bg-gray-300 "
                    : "bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                )}
              >
                Add Package
              </button>
            </div>
          </CardActions>

          {packages.length === 0 && (
            <CardContent>
              <div className="bg-red-100/50 w-full h-24 p-4 rounded-lg grid place-content-center">
                <div className="flex space-y-2 place-items-center">
                  <div className="my-auto text-red-500">
                    Your packages will be added here
                  </div>
                </div>
              </div>
            </CardContent>
          )}

          {packages.length > 0 && (
            <CardContent>
              <div className="space-y-4">
                {/* PACKAGE A START THE LOOP*/}
                {packages.map((packageItem, index) => (
                  <div
                    key={index}
                    className="group flex justify-between p-4 border rounded-lg border-gray-300 items-center hover:shadow"
                  >
                    <div className="flex space-x-2 items-center">
                      <div className="px-4 py-4 bg-red-500 text-white flex text-center items-center rounded group-hover:bg-red-600">
                        {index + 1}
                      </div>
                      <div className="pl-4">
                        <div className="text-xs font-medium text-gray-600">
                          Quantity
                        </div>
                        <div className="text-ellipsis w-20 mt-1 block py-2 text-base">
                          {packageItem.quantity}
                          <span className="text-gray-400 pl-2">x</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-600">
                          Package Type
                        </div>
                        <div className="text-ellipsis w-32 py-2 text-base">
                          {packageItem.type}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-medium text-gray-600">
                          Weight
                        </div>
                        <div className="text-ellipsis w-28 mt-1 block py-2 text-base">
                          {packageItem.weight} lbs
                          <span className="text-gray-400">/pkg</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-600">
                          Dimensions{" "}
                          <span className="text-gray-400"> (inches)</span>
                        </div>
                        <div className="w-36 mt-1 block py-2 text-base space-x-2">
                          <span>{packageItem.length}</span>
                          <span className="text-gray-400">x</span>
                          <span>{packageItem.width}</span>
                          <span className="text-gray-400">x</span>
                          <span>{packageItem.height}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-600">
                          Add-on Options
                        </div>
                        <div className="text-ellipsis mt-1 block py-2 text-base capitalize">
                          {packageItem.addons === null && "No add-ons"}
                          {packageItem.addons !== null && packageItem.addons}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 items-center">
                      <Button label="Edit" />
                      <Button label="Delete" />
                    </div>
                  </div>
                ))}

                {false && (
                  <>
                    <div className="flex justify-between p-4 border rounded-lg border-gray-300 items-center hover:shadow">
                      <div className="flex space-x-2 items-center">
                        <div className="px-4 py-4 bg-orange-500 text-white flex text-center items-center rounded">
                          B
                        </div>
                        <div className="pl-4">
                          <div className="text-xs font-medium text-gray-600">
                            Quantity
                          </div>
                          <div className="w-20 mt-1 block py-2 text-base">
                            6<span className="text-gray-400 pl-2">x</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Package Type
                          </div>
                          <div className="w-32 py-2 text-base">Small Box</div>
                        </div>

                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Weight
                          </div>
                          <div className="w-28 mt-1 block py-2 text-base">
                            6 lbs. <span className="text-gray-400">/pkg</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Dimensions{" "}
                            <span className="text-gray-400"> (inches)</span>
                          </div>
                          <div className="w-36 mt-1 block py-2 text-base space-x-2">
                            <span>6</span>
                            <span className="text-gray-400">x</span>
                            <span>8</span>
                            <span className="text-gray-400">x</span>
                            <span>12</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Insurance
                          </div>
                          <div className="w-32 mt-1 block py-2 text-base">
                            $25.00 /pkg
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Dry Ice
                          </div>
                          <div className="w-40 mt-1 block py-2 text-base">
                            2 lbs. / pkg
                            <span className="pl-2 text-gray-400 text-sm">
                              (Medical)
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Signature
                          </div>
                          <div className="w-40 mt-1 block py-2 text-base">
                            Required
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 items-center">
                        <Button label="Edit" />
                        <Button label="Delete" />
                      </div>
                    </div>

                    <div className="flex justify-between p-4 border rounded-lg border-gray-300 items-center hover:shadow">
                      <div className="flex space-x-2 items-center">
                        <div className="px-4 py-4 bg-orange-500 text-white flex text-center items-center rounded">
                          C
                        </div>
                        <div className="pl-4">
                          <div className="text-xs font-medium text-gray-600">
                            Quantity
                          </div>
                          <div className="w-20 mt-1 block py-2 text-base">
                            6<span className="text-gray-400 pl-2">x</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Package Type
                          </div>
                          <div className="w-32 py-2 text-base">Pak</div>
                        </div>

                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Weight
                          </div>
                          <div className="w-28 mt-1 block py-2 text-base">
                            2 lbs. <span className="text-gray-400">/pkg</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Dimensions{" "}
                            <span className="text-gray-400"> (inches)</span>
                          </div>
                          <div className="w-36 mt-1 block py-2 text-base space-x-2">
                            <span>4</span>
                            <span className="text-gray-400">x</span>
                            <span>2</span>
                            <span className="text-gray-400">x</span>
                            <span>6</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Reference #1
                          </div>
                          <div className="w-32 mt-1 block py-2 text-base">
                            John Edwards
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-600">
                            Reference #2
                          </div>
                          <div className="w-40 mt-1 block py-2 text-base">
                            Amanda Smith
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 items-center">
                        <Button label="Edit" />
                        <Button label="Delete" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          )}
        </Card>

        <Card>
          <CardTitle title="Third Party Billing & COD" />
          <CardContent>
            <div className="flex space-x-4 place-items-center">
              <button
                type="button"
                onClick={() => setThirdPartyBilling(!thirdPartyBilling)}
                className={classNames(
                  "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                  thirdPartyBilling ? "bg-red-600" : "bg-gray-200"
                )}
              >
                <span
                  className={classNames(
                    "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                    thirdPartyBilling ? "translate-x-5" : "translate-x-0"
                  )}
                ></span>
              </button>
              <div className="font-base text-gray-800">Third Party Billing</div>
            </div>
            {thirdPartyBilling && (
              <div className="w-full grid grid-cols-5 gap-x-4 pt-6">
                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="Name..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Account Number
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="Account Number..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Postal Code
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="Postal Code..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Country
                  </label>
                  <div className="mt-1 ">
                    <input
                      placeholder="Country..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Carrier
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="Carrier..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardContent>
            <div className="flex space-x-4 place-items-center">
              <button
                type="button"
                onClick={() => setCashOnDelivery(!cashOnDelivery)}
                className={classNames(
                  "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                  cashOnDelivery ? "bg-red-600" : "bg-gray-200"
                )}
              >
                <span
                  className={classNames(
                    "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                    cashOnDelivery ? "translate-x-5" : "translate-x-0"
                  )}
                ></span>
              </button>
              <div className="font-base text-gray-800 text-right py-2 pr-6">
                COD{" "}
                <span className="ml-4 inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                  $ Extra Fee
                </span>
              </div>
              {cashOnDelivery && (
                <div className="flex place-items-center space-x-4">
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      className="focus:ring-red-500 focus:border-red-500 w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="price-currency"
                      >
                        USD
                      </span>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="ml-4 flex items-center h-5">
                      <input
                        type="checkbox"
                        className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">Secured Payment</div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Service Plans">
            <Button label="Show All Plans" />
          </CardTitle>
          <CardContent>
            {packages.length == 0 && (
              <div className="bg-red-100/50 w-full h-48 p-4 rounded-lg grid place-content-center">
                <div className="flex space-y-2 place-items-center">
                  <div className="my-auto text-red-500 text-center">
                    You must choose sender and receiver addresses and add
                    atleast one package to see rates
                  </div>
                </div>
              </div>
            )}

            {packages.length > 0 && (
              <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
                {/* Plan Choice #1 */}
                <div
                  className={classNames(
                    "relative p-8 bg-white border-gray-200 border rounded-2xl shadow-sm flex flex-col",
                    selectedPlan === 1 ? "ring-2 ring-red-500" : null
                  )}
                >
                  {selectedPlan === 1 && (
                    <CheckCircleIcon className="h-6 w-6 text-red-500 absolute right-2 top-2" />
                  )}
                  <div className="flex-1">
                    <FedExLogoNoBG className="w-32 h-32 rounded-full mx-auto" />
                    <p className="text-3xl font-extrabold tracking-tight text-center">
                      $45.55
                    </p>
                    <p className="mt-6 text-gray-500 text-center">
                      FedEx Express Saver®
                    </p>
                    <p className="mt-6 text-gray-500 text-center">
                      Thu, Aug 4 4:30 PM
                    </p>
                    {selectedPlan !== 1 && (
                      <button
                        onClick={() => setSelectedPlan(1)}
                        className="bg-red-500 text-white hover:bg-red-600 mt-8 w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                      >
                        Select
                      </button>
                    )}

                    {selectedPlan === 1 && (
                      <div className="relative justify-center flex bg-red-100 text-red-500 mt-8 w-full py-3 px-6 rounded-md text-center font-medium">
                        <span>Plan Selected</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Plan Choice #2 */}
                <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex-1">
                    <UPSLogoNoBG
                      className={classNames(
                        "w-32 h-32 rounded-full mx-auto",
                        selectedPlan !== null && selectedPlan !== 2
                          ? "grayscale opacity-40"
                          : null
                      )}
                    />
                    <p className="text-3xl font-extrabold tracking-tight text-center">
                      $45.55
                    </p>

                    <p className="mt-6 text-gray-500 text-center">
                      FedEx Express Saver®
                    </p>
                    <p className="mt-6 text-gray-500 text-center">
                      Thu, Aug 4 4:30 PM
                    </p>
                    <button
                      onClick={() => setSelectedPlan(2)}
                      className="bg-red-500 text-white hover:bg-red-600 mt-8   w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                    >
                      Select
                    </button>
                  </div>
                </div>

                {/* Plan Choice #3 */}
                <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex-1">
                    <DHLLogoNoBG className="w-32 h-32 rounded-full mx-auto" />
                    <p className="text-3xl font-extrabold tracking-tight text-center">
                      $45.55
                    </p>

                    <p className="mt-6 text-gray-500 text-center">
                      FedEx Express Saver®
                    </p>
                    <p className="mt-6 text-gray-500 text-center">
                      Thu, Aug 4 4:30 PM
                    </p>
                    <button
                      onClick={() => setSelectedPlan(3)}
                      className="bg-red-500 text-white hover:bg-red-600 mt-8   w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                    >
                      Select
                    </button>
                  </div>
                </div>

                {/* Plan Choice #4 */}
                <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex-1">
                    <FedExLogoNoBG className="w-32 h-32 rounded-full mx-auto" />
                    <p className="text-3xl font-extrabold tracking-tight text-center">
                      $45.55
                    </p>

                    <p className="mt-6 text-gray-500 text-center">
                      FedEx Express Saver®
                    </p>
                    <p className="mt-6 text-gray-500 text-center">
                      Thu, Aug 4 4:30 PM
                    </p>
                    <button
                      onClick={() => setSelectedPlan(4)}
                      className="bg-red-500 text-white hover:bg-red-600 mt-8   w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="International Customs Info">
            <span className="hidden sm:block text-right">
              International shipping requires a commercial invoice
            </span>
          </CardTitle>
          <CardContent>
            <div className="space-x-4 flex items-center">
              <span className="font-semibold">Bill Duties</span>
              <fieldset>
                <div className="ml-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="receiver"
                      onChange={handleChange}
                      checked={billDuty === "receiver"}
                      className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                    />
                    <label className="ml-3 block text-sm font-medium text-gray-700">
                      Receiver
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      value="sender"
                      type="radio"
                      onChange={handleChange}
                      checked={billDuty === "sender"}
                      className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                    />
                    <label className="ml-3 block text-sm font-medium text-gray-700">
                      Sender
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      value="third-party"
                      type="radio"
                      onChange={handleChange}
                      checked={billDuty === "third-party"}
                      className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                    />
                    <label className="ml-3 block text-sm font-medium text-gray-700">
                      Third Party
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {billDuty === "third-party" && (
              <div className="grid grid-cols-5 gap-x-4 pt-6">
                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="Name..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Account Number
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="Account Number..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Postal Code
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="Postal Code..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Country
                  </label>
                  <div className="mt-1 ">
                    <input
                      placeholder="Country..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Carrier
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="Carrier..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardContent>
            <div className="space-x-4 flex items-center">
              <span className="font-semibold">Commerical Invoice</span>
              <div className="flex space-x-4 place-items-center">
                <button
                  type="button"
                  onClick={() =>
                    setMakeCommercialInvoice(!makeCommercialInvoice)
                  }
                  className={classNames(
                    "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                    makeCommercialInvoice ? "bg-red-600" : "bg-gray-200"
                  )}
                >
                  <span
                    className={classNames(
                      "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                      makeCommercialInvoice ? "translate-x-5" : "translate-x-0"
                    )}
                  ></span>
                </button>
                <div className="font-base text-gray-800">
                  Create commercial invoice through our system
                </div>
              </div>
            </div>
            {!makeCommercialInvoice && (
              <div className="flex items-center pt-8">
                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Value{" "}
                    <span className="italic text-gray-500 font-light">
                      required
                    </span>
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      className="focus:ring-red-500 focus:border-red-500 w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="price-currency"
                      >
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ml-4 w-72">
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Description{" "}
                    <span className="italic text-gray-500 font-light">
                      required
                    </span>
                  </label>
                  <div className="mt-1 ">
                    <input
                      placeholder="Description..."
                      type="text"
                      className="w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}

            {makeCommercialInvoice && (
              <div>
                <div className="w-full flex justify-between items-end pt-8">
                  <div className="flex -space-x-px">
                    <div>
                      <label className="text-xs pb-2 font-medium text-gray-700">
                        Item
                      </label>
                      <div className="mt-1">
                        <div
                          type="text"
                          className="w-16 shadow-sm sm:text-sm border-gray-300 relative rounded-l-md focus:z-10"
                        >
                          #1
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="  text-xs pb-2 font-medium text-gray-700">
                        Description
                      </label>
                      <div className="mt-1">
                        <input
                          placeholder="Enter description..."
                          type="text"
                          className="w-56 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 relative focus:z-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="  text-xs pb-2 font-medium text-gray-700">
                        HTS#
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          placeholder="HTS#"
                          className="w-24 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 relative  focus:z-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="  text-xs pb-2 font-medium text-gray-700">
                        COO
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          placeholder="COO..."
                          className="w-24 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 relative  focus:z-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="  text-xs pb-2 font-medium text-gray-700">
                        QTY
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          defaultValue={1}
                          className="w-24 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 relative  focus:z-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="  text-xs pb-2 font-medium text-gray-700">
                        UNIT
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          placeholder="ea."
                          className="w-24 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 relative focus:z-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="  text-xs pb-2 font-medium text-gray-700">
                        VAL/UNIT
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          placeholder="$0.00"
                          className="w-24 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 relative  focus:z-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="  text-xs pb-2 font-medium text-gray-700">
                        TOTAL WT.
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          placeholder="Total weight..."
                          className="w-32 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 relative focus:z-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="  text-xs pb-2 font-medium text-gray-700">
                        TOTAL
                      </label>
                      <div className="mt-1">
                        <div
                          type="text"
                          placeholder=""
                          className="bg-gray-100 w-48 shadow-sm sm:text-sm border-gray-300 relative rounded-r-md"
                        >
                          $1332.00
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button label="Remove" />
                </div>
                <div className="pt-4">
                  <Button label="+ Add item" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Email Notification">
            <div className="flex space-x-4 place-items-center">
              <div className="font-base text-gray-800 text-right">
                {!emailNotifications
                  ? "Activate email notifications"
                  : "Email notifications enabled"}
              </div>
              <button
                type="button"
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={classNames(
                  "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                  emailNotifications ? "bg-red-600" : "bg-gray-200"
                )}
              >
                <span
                  className={classNames(
                    "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                    emailNotifications ? "translate-x-5" : "translate-x-0"
                  )}
                ></span>
              </button>
            </div>
          </CardTitle>

          {emailNotifications && (
            <CardContent>
              <div className="rounded-xl bg-red-50 p-3 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon
                      className="h-6 w-6 text-red-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-md text-red-700">
                      You may set up default email notifications for your next
                      shipment in your personal settings. These notifications
                      will be used for this shipment{" "}
                      <span className="font-bold">only</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ring-1 ring-gray-300 rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 rounded-lg">
                  <thead className="">
                    <tr className="divide-x divide-gray-300">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Email Notification
                      </th>
                      <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                      >
                        On Tender
                      </th>
                      <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                      >
                        On Delivery
                      </th>
                      <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                      >
                        On Exception
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        On Shipment
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-300">
                    <tr className="divide-x divide-gray-300">
                      <td
                        className={classNames(
                          "whitespace-nowrap relative py-4 pl-4 sm:pl-6 pr-3 text-sm w-32"
                        )}
                      >
                        <div className="font-medium text-gray-900">
                          Receiver
                        </div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Tender</div>
                        </div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Delivery</div>
                        </div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Exception</div>
                        </div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Shipment</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-300">
                      <td
                        className={classNames(
                          "whitespace-nowrap relative py-4 pl-4 sm:pl-6 pr-3 text-sm w-32"
                        )}
                      >
                        <div className="font-medium text-gray-900">Sender</div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Tender</div>
                        </div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Delivery</div>
                        </div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Exception</div>
                        </div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Shipment</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-300">
                      <td
                        className={classNames(
                          "whitespace-nowrap flex relative py-2 pl-4 sm:pl-6 pr-3 text-sm font-medium text-gray-900 w-80"
                        )}
                      >
                        <div className="font-medium text-gray-900 my-auto">
                          Custom
                        </div>
                        <input
                          placeholder="Email..."
                          type="text"
                          className="ml-4 w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                        />
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Tender</div>
                        </div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Delivery</div>
                        </div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Exception</div>
                        </div>
                      </td>
                      <td className="relative py-4">
                        <div className="flex">
                          <div className="ml-4 flex items-center h-5">
                            <input
                              type="checkbox"
                              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">On Shipment</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          )}
        </Card>

        <Card>
          <CardTitle title="Confirm & Print Label">
            <div className="flex space-x-4 place-items-center">
              <div className="font-base text-gray-800 text-right">
                This shipment requires pickup
              </div>
              <button
                type="button"
                onClick={() => setPickupRequired(!pickupRequired)}
                className={classNames(
                  "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                  pickupRequired ? "bg-red-600" : "bg-gray-200"
                )}
              >
                <span
                  className={classNames(
                    "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                    pickupRequired ? "translate-x-5" : "translate-x-0"
                  )}
                ></span>
              </button>
            </div>
          </CardTitle>
          <CardContent>
            {pickupRequired && (
              <div className="rounded-xl bg-red-50 p-3 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon
                      className="h-6 w-6 text-red-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-md text-red-700">
                      You will be prompted to enter a pickup date and time after
                      clicking confirm and print.
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-between items-center">
              <div className="space-x-4 flex items-center">
                <span>Label Type</span>
                <div>
                  <select className="text-ellipsis w-64 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option>PDF Half Sheet</option>
                    <option>4 x 6 Label</option>
                    <option>4 x 6 Label with Doc Tab</option>
                  </select>
                </div>
              </div>

              <button className="bg-red-500 text-white hover:bg-red-600 py-3 px-24 border border-transparent rounded-md text-center font-medium">
                Confirm & Print
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function Addresses() {
  return (
    <>
      <div className="grid grid-cols-2 col-span-2">
        <div className="pb-8 col-span-2 flex items-center space-x-6">
          <span>From:</span>
          <DropdownFilterPeople />
          <Button label="Edit Address" />
        </div>

        <div className="flex flex-col space-y-4">
          <span className="text-sm text-gray-500 uppercase">From Address</span>

          <span>
            US
            <br />
            584 Northeast State Street
            <br />
            64683 Marion Township MO
          </span>
        </div>
        <div className="px-6  flex flex-col space-y-4">
          <span className="text-sm text-gray-500 uppercase">
            From Contact Details
          </span>
          <span>
            Montana DAS Fee <br />
            (666) 666-6666
          </span>
        </div>
        <div className="col-span-2 flex w-full space-x-8 mt-8"></div>
      </div>

      {/* TO ADDRESS DISPLAY*/}
      <div className="grid grid-cols-2 col-span-2">
        <div className="px-6 pb-8 col-span-2 flex items-center space-x-6">
          <span>To:</span>
          <DropdownFilterPeople />
          <Button label="Edit Address" />
          <div className="flex space-x-4 place-items-center">
            <button
              type="button"
              onClick={() => setResidentialAdderess(!residentialAddress)}
              className={classNames(
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                residentialAddress ? "bg-red-600" : "bg-gray-200"
              )}
            >
              <span
                className={classNames(
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                  residentialAddress ? "translate-x-5" : "translate-x-0"
                )}
              ></span>
            </button>
            <div className="font-base text-gray-800">
              Residential Address
              <span className="ml-4 inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                $ Extra Fee
              </span>
            </div>
          </div>
        </div>
        <div className="px-6 flex flex-col space-y-4">
          <span className="text-sm text-gray-500 uppercase">To Address</span>

          <span>
            US
            <br />
            92 Maple Rd.
            <br />
            Beansville, SC 64683
          </span>
        </div>
        <div className="px-6 flex flex-col space-y-4">
          <span className="text-sm text-gray-500 uppercase">
            To Contact Details
          </span>
          <span>
            Jonathan Smith <br />
            (942) 646-3444
          </span>
        </div>
        <div className="col-span-2 px-6 flex w-full space-x-8 mt-8"></div>
      </div>
    </>
  );
}
