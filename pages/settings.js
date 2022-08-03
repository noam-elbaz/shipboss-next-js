import Card from "../components/Card";
import CardActions from "../components/CardActions";
import CardContent from "../components/CardContent";
import CardTitle from "../components/CardTitle";
import TabBar from "../components/TabBar";

const tabs = [
  { name: "General Settings", current: true },
  { name: "Dimensions", current: false },
  { name: "References", current: false },
];

const settings = [
  {
    title: "Default Address",
    description: "This address will be used by default for your shipment",
    action: "dropdown",
  },
  {
    title: "Default Label Type",
    description: "This label type will be displayed on your ship page",
    action: "dropdown",
  },
  {
    title: "Default Dimensions",
    description:
      "These will be the default dimensions for all packages in your shipment",
    action: "dropdown",
  },
  {
    title: "Default Reference #1",
    description:
      "This will be the default reference #1 value for your shipment",
    action: "dropdown",
  },
  {
    title: "Default Reference #2",
    description:
      "This will be the default reference #2 value for your shipment",
    action: "dropdown",
  },
  {
    title: "Default Email Notifications",
    description: "This label type will be displayed on your ship page",
    action: "dropdown",
  },
  {
    title: "Default Package Type",
    description: "This will be the default package type for your shipments",
    action: "dropdown",
  },
  {
    title: "Default Bill Duties",
    description: "This value will be preselected for International Shipments",
    action: "dropdown",
  },
  {
    title: "Default Address Book",
    description: "This value will be preselected when you save an address",
    action: "dropdown",
  },
  {
    title: "Default Shipping Rate Selected",
    description:
      "This value will be preselected when you get your shipping rates, if available",
    action: "dropdown",
  },
];

export default function Settings() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardTitle title="Settings" />
          <CardActions>
            <TabBar tabs={tabs} />
          </CardActions>
          <CardContent>
            <div>
              {settings.map((setting, index) => (
                <div
                  key={index}
                  className="sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start sm:border-b sm:border-gray-200 py-4"
                >
                  <label className="my-auto block text-sm font-medium text-gray-700 sm:mt-px">
                    {setting.title}
                  </label>
                  <div className="my-auto mt-1 sm:mt-0 sm:col-span-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="max-w-lg block focus:ring-red-500 focus:border-red-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    >
                      <option>Select default value...</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                  <p className="text-sm text-gray-500 sm:col-span-2 my-auto">
                    {setting.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
