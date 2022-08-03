import React from "react";
import Card from "../components/Card";
import CardActions from "../components/CardActions";
import CardContent from "../components/CardContent";
import CardTitle from "../components/CardTitle";
import { navigation } from "../components/navbar";

import TableAddressBook from "../components/TableAddressBook";
import Toggle from "../components/Toggle";
import Button from "../components/Button";
import DropdownFilterTime from "../components/DropdownFilterTime";
import DropdownFilterPeople from "../components/DropdownFilterPeople";
import InputSearch from "../components/InputSearch";

export default function AddressBook() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardTitle
            title={navigation[2].name}
            button="Fix 4 Broken Addresses"
          />
          <CardActions>
            <div className="flex space-x-2">
              <InputSearch />
            </div>
            <div className="flex space-x-2">
              <Button label="Add New" />
              <Button label="Import Addresses" />
              <Button label="Export Addresses" />
              <Button label="Download Sample" />
            </div>
          </CardActions>
          <CardContent>
            <TableAddressBook />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
