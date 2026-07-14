import mongoose, { Schema } from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";
const app = express();
app.use(express.json());
await mongoose.connect("mongodb://127.0.0.1:27017/school").then(() => {});

app.get("/", async (req, res) => {
  const studentData = await studentModel.find();
  res.send(studentData);
});

app.post("/save", async (req, res) => {
  const { name, email, age } = req.body;
  if (!req.body || !name || !age || !email) {
    res.send({
      message: "not save data",
      success: false,
      storedData: null,
    });
  }
  const saveData = await studentModel.create(req.body);
  res.send({
    message: "save data",
    success: true,
    storedData: saveData,
  });
});

app.put("/update/:id", async (req, res) => {
  if (!req.params.id) {
    return res.send({
      message: "Id Required",
      success: false,
    });
  }

  const updateData = await studentModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );

  res.send({
    message: "Data Updated",
    success: true,
    updatedData: updateData,
  });
});

app.delete("/delete/:id", async (req, res) => {
  if (!req.params.id) {
    return res.send({
      message: "Id Required",
      success: false,
    });
  }

  const deleteData = await studentModel.findByIdAndDelete(req.params.id);

  res.send({
    message: "Data Deleted",
    success: true,
    deletedData: deleteData,
  });
});

app.listen(3000);
