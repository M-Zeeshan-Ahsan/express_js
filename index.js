import express from "express";
import { MongoClient } from "mongodb";

const dbName = "school";
const dbUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbUrl);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
  app.get("/add", (req, res) => {
    res.render("addStudent");
  });
  app.post("/add-student", (req, res) => {
    const collection = db.collection("students");
    const result = collection.insertOne(req.body);
    res.send("data");
  });
  app.post("/add-student-api", async (req, res) => {
    const data = req.body;
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      res.send({ message: "operation failed", success: false });
      return false;
    }
    const collection = db.collection("students");
    const result = await collection.insertOne(data);
    res.send({ message: "data store", result: result, success: true });
  });
});

app.listen(3000);
