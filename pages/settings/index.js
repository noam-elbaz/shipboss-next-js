import React from "react";
import Card from "../../components/Card";
import CardActions from "../../components/CardActions";
import CardTitle from "../../components/CardTitle";
import TabBar from "../../components/TabBar";
import CardContent from "../../components/CardContent";

const tabs = [
  { name: "General Settings", href: "/settings/general" },
  { name: "Dimensions", href: "/settings/dimensions" },
  { name: "References", href: "/settings/references" },
];

export default function Settings({ children }) {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardTitle title="Settings" />
          <CardActions>
            <TabBar tabs={tabs} />
          </CardActions>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </>
  );
}
