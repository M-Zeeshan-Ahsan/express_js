import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const dbName = "school";
const dbUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbUrl);

const app = express();
app.use(express.json());

client.connect().then((connection) => {
  const db = connection.db(dbName);
  app.post("/add-student-api", async (req, res) => {
    const data = req.body;
    if (!data.name || !data.email || !data.age) {
      res.send({ message: "operation failed", success: false });
      return false;
    }
    const collection = db.collection("students");
    const result = await collection.insertOne(data);
    res.send({ message: "success", result: result, success: true });
  });
  app.delete("/delete/:id", async (req, res) => {
    const collection = db.collection("students");
    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    if (result) {
      res.send({ message: "data deleted", success: true });
    } else res.send({ message: "data not deleted", success: false });
  });
  app.put("/update/:id", async (req, res) => {
    const collection = db.collection("students");
    const filter = { _id: new ObjectId(req.params.id) };
    const update = { $set: req.body };
    const result = await collection.updateOne(filter, update);
    if (result) {
      res.send({ message: "data updated", success: true });
    } else res.send({ message: "data not updated", success: false });
  });
});

app.listen(3000);
