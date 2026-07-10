import express from "express";
import { MongoClient } from "mongodb";
const app = express();

const dbName = "school";
const dbUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbUrl);

async function connectToDatabase() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("students");
  const result = await collection.find().toArray();
  console.log("Connected to the database and retrieved data:", result);
}
connectToDatabase();
app.listen(3000);
