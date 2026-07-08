import express from "express";
import morgan from "morgan";

const app = express();

// Morgan middleware
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
