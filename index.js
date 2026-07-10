import express from "express";
import { MongoClient } from "mongodb";

const dbName = "school";
const dbUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbUrl);

const app = express();
app.set("view engine", "ejs");
client.connect().then((connection) => {
  const db = connection.db(dbName);
  app.get("/api", async (req, res) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    res.send(students);
  });
  app.get("/ui", async (req, res) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    res.render("student", { students });
  });
});

app.listen(3000);
