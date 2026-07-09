import express from "express";
import userData from "./user.json" with { type: "json" };
const app = express();
app.get("/", (req, res) => {
  res.send(userData);
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  let filterData = userData.filter((user) => user.id == id);
  res.send(filterData);
});
app.listen(3200);
