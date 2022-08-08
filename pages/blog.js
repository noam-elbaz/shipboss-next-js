import Card from "../components/Card";
import CardContent from "../components/CardContent";
import CardTitle from "../components/CardTitle";
import supabase from "../utils/supabase";
import JSONPretty from "react-json-pretty";

export async function getStaticProps() {
  const { data: orders, error } = await supabase.from("orders").select("*");

  if (error) {
    throw new Error(error);
  }

  return {
    props: {
      orders,
    },
  };
}

export default function Blog({ orders }) {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardTitle title="Blog" />

          <CardContent>
            <JSONPretty id="json-pretty" data={orders}></JSONPretty>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
