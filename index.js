import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://ahsansahi6_db_user:GoogleTest@cluster0.fpgjv6f.mongodb.net/?appName=Cluster0";
const dbName = "school";
const collectionName = "students";
const client = new MongoClient(url);
client.connect().then(() => {
  console.log("database connected");
});

async function dbConnection() {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const result = await collection.find().toArray();
  console.log(result);
}
dbConnection();
