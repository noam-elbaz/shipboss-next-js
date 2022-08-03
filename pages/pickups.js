import React from "react";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import CardTitle from "../components/CardTitle";
import { navigation } from "../components/navbar";
import Table from "../components/Table";

export default function Pickups() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardTitle title={navigation[4].name} button="Schedule Pickups" />
          <CardContent>
            <Table />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
