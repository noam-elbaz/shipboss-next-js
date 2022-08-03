import React from "react";
import Card from "../components/Card";
import CardActions from "../components/CardActions";
import CardContent from "../components/CardContent";
import CardTitle from "../components/CardTitle";
import { navigation } from "../components/navbar";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Table from "../components/Table";
import Button from "../components/Button";

export default function BulkShipments() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardTitle title={navigation[1].name}>
            <div className="space-x-2">
              <Button label="Upload Shipments" />
              <Button label="Download Sample" />
            </div>
          </CardTitle>
          <CardActions>
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
                    The Bulk Uploads feature is in early beta testing. We are
                    not returning error messages at this time. If your upload
                    file fails check: 1) Leading zeros did not get deleted in
                    the file. 2) Be sure all the data is filled, correct and
                    verified.
                  </p>
                </div>
              </div>
            </div>
          </CardActions>
          <CardContent>
            <Table />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
