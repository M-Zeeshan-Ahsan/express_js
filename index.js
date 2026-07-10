import express from "express";
import { MongoClient } from "mongodb";

const dbName = "school";
const dbUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbUrl);

const app = express();
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
    res.send(`<form action="/add-student" method="post">
      <input type="text" name="name" placeholder="Name">
      <input type="email" name="email" placeholder="Email">
      <input type="number" name="age" placeholder="Age">
      <button type="submit">Add Student</button>
    </form>`);
  });
  app.post("/add-student", (req, res) => {
    const collection = db.collection("students");
    const result = collection.insertOne(req.body);
    res.send("data");
  });
});

app.listen(3000);
