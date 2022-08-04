import Admin from "./index";
import Table from "../../components/Table";
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

export default function invoices() {
  return (
    <Admin>
      <Table data={data} />
    </Admin>
  );
}
