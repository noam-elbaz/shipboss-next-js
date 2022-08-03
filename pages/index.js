import Card from "../components/Card";
import CardTitle from "../components/CardTitle";

export default function Page() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardTitle title="Welcome to Shipboss, you cheeky monkey" />
        </Card>
      </div>
    </>
  );
}
