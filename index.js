import express from "express";
import { MongoClient } from "mongodb";

const dbName = "school";
const dbUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbUrl);

const app = express();
app.set("view engine", "ejs");
app.get("/", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("students");
  const students = await collection.find().toArray();
  console.log("Connected to the database and retrieved data:", students);
  res.render("student", { students });
});
app.listen(3000);
