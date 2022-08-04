import React from "react";
import Card from "../../components/Card";
import CardActions from "../../components/CardActions";
import CardTitle from "../../components/CardTitle";
import TabBar from "../../components/TabBar";
import CardContent from "../../components/CardContent";

const tabs = [
  { name: "View Invoices", href: "/admin/invoices" },
  { name: "User Management & Roles", href: "/admin/roles" },
  { name: "Supplies", href: "/admin/supplies" },
  { name: "Rate Sheets", href: "/admin/rates" },
];

export default function Admin({ children }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Card>
        <CardTitle title="Admin" />
        <CardActions>
          <TabBar tabs={tabs} />
        </CardActions>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
