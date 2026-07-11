import mongoose, { Schema } from "mongoose";
async function dbConnection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/school");
  const studentSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
  });
  const studentModel = mongoose.model("students", studentSchema);
  const result = await studentModel.find();
  console.log(result);
}
dbConnection();
