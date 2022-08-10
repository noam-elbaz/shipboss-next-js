import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import CardContent from "../components/CardContent";

import { useEffect, useState } from "react";

export default function Services() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getdata")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <Card>
      <CardTitle title="Services" />
      <CardContent>
        <div className="divide-y">
          {data.map((item) => (
            <div className="py-4" key={item.id}>
              {item.description}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
