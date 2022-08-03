import Table from "../components/Table";
import Toggle from "../components/Toggle";
import DropdownFilterTime from "../components/DropdownFilterTime";
import DropdownFilterPeople from "../components/DropdownFilterPeople";
import InputSearch from "../components/InputSearch";
import Card from "../components/Card";
import CardActions from "../components/CardActions";
import CardContent from "../components/CardContent";
import CardTitle from "../components/CardTitle";
import { navigation } from "../components/navbar";

export default function History() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardTitle title={navigation[3].name} />
          <CardActions>
            <div className="flex space-x-2">
              <InputSearch placeholder="Tracking number..." />
              <Toggle label="Only show bulk shipments" />
            </div>
            <div className="flex space-x-2">
              <DropdownFilterTime />
              <DropdownFilterPeople />
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
