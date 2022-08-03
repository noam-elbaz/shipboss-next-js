import React from "react";
import Card from "../../components/Card";
import CardActions from "../../components/CardActions";
import CardContent from "../../components/CardContent";
import CardTitle from "../../components/CardTitle";
import { navigation } from "../../components/navbar";
import TableComponent from "../../components/TableComponent";
import Dropdown from "../../components/Dropdown";
import InputSearch from "../../components/InputSearch";
import TabBar from "../../components/TabBar";

const tabs = [
  { name: "View Invoices", current: true },
  { name: "User Management & Roles", current: false },
  { name: "Supplies", current: false },
  { name: "Rate Sheets", current: false },
];

const data = {
  cols: ["Invoice ID", "Invoice Date", "Invoice Total", "Invoice Status"],
  rows: [
    {
      id: "1",
      date: "2022-07-19 15:06:58",
      total: "$87.52",
      status: "Paid",
    },
    {
      id: "2",
      date: "2022-07-14 12:49:08",
      total: "$250.38",
      status: "Paid",
    },
    {
      id: "3",
      date: "2022-07-19 15:06:58",
      total: "1287.52",
      status: "Not Paid",
    },
  ],
};

export default function Admin() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardTitle title={navigation[5].name} />
          <CardActions>
            <TabBar tabs={tabs} />
          </CardActions>
          <CardActions>
            <div className="flex space-x-2">
              <InputSearch placeholder="Search by invoice number..." />
              <InputSearch placeholder="Search by tracking number..." />
            </div>
            <Dropdown options={["All", "Paid", "Not Paid"]} />
          </CardActions>
          <CardContent>
            {/* TABLE STARTS HERE */}
            <TableComponent data={data} actions={["delete", "edit"]} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
