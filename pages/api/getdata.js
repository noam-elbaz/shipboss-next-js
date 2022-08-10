import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    database: "webship2",
    user: "root",
    password: "rootroot",
    host: 3306,
  });
  try {
    const query = "SELECT * FROM `carrier_services` LIMIT 50";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    res.status(200).json(data);
    dbconnection.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
