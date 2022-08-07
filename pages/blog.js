import Card from "../components/Card";
import CardContent from "../components/CardContent";
import CardTitle from "../components/CardTitle";

export function getStaticProps() {
  return {
    props: {
      orders: [],
    },
  };
}

export default function Blog({ orders }) {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardTitle title="Blog" />

          <CardContent>{JSON.stringify(orders, null, 2)}</CardContent>
        </Card>
      </div>
    </>
  );
}
