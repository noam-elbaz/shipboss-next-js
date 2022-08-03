import { useState } from "react";
import Card from "../components/Card";
import CardActions from "../components/CardActions";
import CardContent from "../components/CardContent";
import CardTitle from "../components/CardTitle";
import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Toggle from "../components/Toggle";
import DropdownFilterPeople from "../components/DropdownFilterPeople";
import DropdownFilterLabel from "../components/DropdownLabel";
import Button from "../components/Button";
import {
  FedExLogoNoBG,
  DHLLogoNoBG,
  UPSLogoNoBG,
} from "../components/CarrierLogos";

const sections = {
  from: "From Address",
  to: "To Address",
  details: "Package Details",
  plans: "Service Plans",
  notification: "Email Notification",
  confirm: "Confirm & Print Label",
  customs: "International Customs Info",
};

const reset = () => {
  console.log("reset");
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NewShipment() {
  const [packageCount, setPackageCount] = useState(2);
  const [billDuty, setBillDuty] = useState("receiver");
  const handleChange = (event) => {
    setBillDuty(event.target.value);
  };
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col space-y-6 pb-32">
        <Card>
          <CardTitle title="New Shipment" button="Reset" action={reset} />
          <CardActions>
            <div className="flex justify-between w-full space-x-4">
              <div className="flex items-center w-1/2 space-x-2 ">
                <span>From:</span>
                <DropdownFilterPeople />
                <Button label="Edit" />
              </div>
              <button
                className="bg-red-500 text-white rounded-xl p-2  hover:bg-red-600 hover:ring-4 ring-red-200"
                onClick={() => console.log("switch order")}
              >
                <SwitchHorizontalIcon className="w-6 h-6" />
              </button>
              <div className="flex items-center w-1/2 space-x-4 ">
                <span>To:</span>
                <DropdownFilterPeople />
                <Button label="Edit" />
                <Toggle label="Residential Address" />
              </div>
            </div>
          </CardActions>

          <div className="grid grid-cols-4 w-full divide-x">
            <div className="grid grid-cols-2 col-span-2  divide-x">
              <div className="p-6 flex flex-col space-y-2">
                <span className="text-xs text-gray-400 uppercase">
                  From Address
                </span>

                <span>
                  US
                  <br />
                  584 Northeast State Street
                  <br />
                  64683 Marion Township MO
                </span>
              </div>
              <div className="p-6  flex flex-col space-y-2">
                <span className="text-xs text-gray-400 uppercase">
                  From Contact Details
                </span>
                <span>
                  Montana DAS Fee <br />
                  (666) 666-6666
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 col-span-2 divide-x">
              <div className="p-6 flex flex-col space-y-2">
                <span className="text-xs text-gray-400 uppercase">
                  To Address
                </span>

                <span>
                  US
                  <br />
                  584 Northeast State Street
                  <br />
                  64683 Marion Township MO
                </span>
              </div>
              <div className="p-6  flex flex-col space-y-2">
                <span className="text-xs text-gray-400 uppercase">
                  To Contact Details
                </span>
                <span>
                  Montana DAS Fee <br />
                  (666) 666-6666
                </span>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <CardTitle title={sections["details"]}>
            {packageCount === 0 && <span>No packages added</span>}
            {packageCount === 1 && <span>1 package added</span>}
            {packageCount > 1 && <span>{packageCount} packages added</span>}
          </CardTitle>

          <CardActions>
            <div className="w-full flex items-end justify-between">
              <div className="flex flex-row gap-x-4">
                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Package Type
                  </label>
                  <select className="text-ellipsis w-32 mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option>Custom Package</option>
                    <option>Large Box</option>
                    <option>Medium Box</option>
                    <option>Small Box</option>
                    <option>Envelope</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Quantity
                  </label>
                  <div className="mt-1 relative ">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">#</span>
                    </div>
                    <input
                      placeholder="0"
                      type="number"
                      className="pl-7 block w-32 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Pkg. Weight (LB)
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="0 lbs."
                      type="number"
                      className="w-32  shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Prefill Dimensions
                  </label>
                  <select className="text-ellipsis w-32 mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option>Choose...</option>
                    <option>Standard 12 x 8 x 10</option>
                    <option>Oversized 24 x 16 x 20</option>
                  </select>
                </div>

                <div className="flex -space-x-px">
                  <div>
                    <label className="text-xs pb-2 font-medium text-gray-700">
                      Length (in.)
                    </label>
                    <div className="mt-1">
                      <input
                        placeholder="0 in."
                        type="number"
                        className="w-24  shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 relative rounded-l-md focus:z-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="  text-xs pb-2 font-medium text-gray-700">
                      Width (in.)
                    </label>
                    <div className="mt-1">
                      <input
                        placeholder="0 in."
                        type="number"
                        className="w-24  shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 relative focus:z-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="  text-xs pb-2 font-medium text-gray-700">
                      Height (in.)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        placeholder="0 in."
                        className="w-24 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 relative rounded-r-md focus:z-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs pb-2 font-medium text-gray-700">
                    Add-on Options
                  </label>
                  <select className="w-32 mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option>None</option>
                    <option>Insurance</option>
                    <option>Dry Ice</option>
                    <option>Reference</option>
                    <option>Signature</option>
                  </select>
                </div>
              </div>
              <button
                type="button"
                className="h-10 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Add Package
              </button>
            </div>
          </CardActions>

          {!packageCount && (
            <CardContent>
              <div className="bg-red-100/50 w-full h-24 p-4 rounded-lg grid place-content-center border border-red-500 border-dashed">
                <div className="flex space-y-2 place-items-center">
                  <div className="my-auto text-red-500">
                    You packages will be added here
                  </div>
                </div>
              </div>
            </CardContent>
          )}

          {packageCount > 0 && (
            <CardContent>
              <div className="space-y-4">
                <div className="group flex justify-between p-4 border rounded-lg border-gray-300 items-center hover:shadow">
                  <div className="flex space-x-2 items-center">
                    <div className="px-4 py-4 bg-red-500 text-white flex text-center items-center rounded group-hover:bg-red-600">
                      A
                    </div>
                    <div className="pl-4">
                      <div className="text-xs font-medium text-gray-600">
                        Quantity
                      </div>
                      <div className="text-ellipsis w-20 mt-1 block py-2 text-base">
                        4<span className="text-gray-400 pl-2">x</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600">
                        Package Type
                      </div>
                      <div className="text-ellipsis w-32 py-2 text-base">
                        Large Box
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-gray-600">
                        Weight
                      </div>
                      <div className="text-ellipsis w-28 mt-1 block py-2 text-base">
                        22 lbs. <span className="text-gray-400">/pkg</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600">
                        Dimensions{" "}
                        <span className="text-gray-400"> (inches)</span>
                      </div>
                      <div className="w-36 mt-1 block py-2 text-base space-x-2">
                        <span>12</span>
                        <span className="text-gray-400">x</span>
                        <span>26</span>
                        <span className="text-gray-400">x</span>
                        <span>10</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600">
                        Add-on Options
                      </div>
                      <div className="text-ellipsis mt-1 block py-2 text-base">
                        No add-ons
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
                    <div className="px-4 py-4 bg-red-500 text-white flex text-center items-center rounded">
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
                    <div className="px-4 py-4 bg-red-500 text-white flex text-center items-center rounded">
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
              </div>
            </CardContent>
          )}
        </Card>

        <Card>
          <CardTitle title="Third Party Billing & Cash On Delivery" />
          <CardContent>
            <Toggle label="Third party billing" />
          </CardContent>
          <CardContent>
            <Toggle label="Cash On Delivery (COD) - extra fee" />
          </CardContent>
        </Card>

        <Card>
          <CardTitle title={sections["plans"]} button="Show All Plans" />
          <CardContent>
            {packageCount === 0 && (
              <div className="bg-red-100/50 w-full h-24 p-4 rounded-lg grid place-content-center border border-red-500 border-dashed">
                <div className="flex space-y-2 place-items-center">
                  <div className="my-auto text-red-500">
                    You must add atleast one package to see rates
                  </div>
                </div>
              </div>
            )}

            {packageCount !== 0 && (
              <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
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
                    <button className="bg-red-500 text-white hover:bg-red-600 mt-8   w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">
                      Select
                    </button>
                  </div>
                </div>

                <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex-1">
                    <UPSLogoNoBG className="w-32 h-32 rounded-full mx-auto" />
                    <p className="text-3xl font-extrabold tracking-tight text-center">
                      $45.55
                    </p>

                    <p className="mt-6 text-gray-500 text-center">
                      FedEx Express Saver®
                    </p>
                    <p className="mt-6 text-gray-500 text-center">
                      Thu, Aug 4 4:30 PM
                    </p>
                    <button className="bg-red-500 text-white hover:bg-red-600 mt-8   w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">
                      Select
                    </button>
                  </div>
                </div>

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
                    <button className="bg-red-500 text-white hover:bg-red-600 mt-8   w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">
                      Select
                    </button>
                  </div>
                </div>

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
                    <button className="bg-red-500 text-white hover:bg-red-600 mt-8   w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardTitle title={sections["customs"]}>
            International shipping requires a commercial invoice
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
              <Toggle label="Create commercial invoice through our system" />
            </div>

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
          </CardContent>
        </Card>

        <Card>
          <CardTitle title={sections["notification"]}>
            <div className="flex space-x-4 place-items-center h-12">
              <div className="font-base text-gray-800 text-right">
                {!checked
                  ? "Activate Email Notifications"
                  : "Disable Email Notifications"}
              </div>
              <button
                type="button"
                onClick={() => setChecked(!checked)}
                className={classNames(
                  "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                  checked ? "bg-red-600" : "bg-gray-200"
                )}
              >
                <span
                  className={classNames(
                    "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                    checked ? "translate-x-5" : "translate-x-0"
                  )}
                ></span>
              </button>
            </div>
          </CardTitle>
          {checked && (
            <CardContent>
              <div className="rounded-md bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon
                      className="h-6 w-6 text-blue-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-md text-blue-700">
                      You may set up default email notifications for your next
                      shipment in your personal settings. These notifications
                      will be used for this shipment{" "}
                      <span className="font-bold">only</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        <Card>
          <CardTitle title={sections["confirm"]}>
            <Toggle label="This shipment requires pickup" left />
          </CardTitle>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <span>Label Type</span>
                <DropdownFilterLabel />
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
