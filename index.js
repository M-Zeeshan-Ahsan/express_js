import express from "express";
import morgan from "morgan";

const app = express();

// Morgan middleware
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send1("About Page");
});
function errorHandler(err, req, res, next) {
  res.status(err.status || 500).send("Something went wrong!");
}
app.use(errorHandler);
app.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log("Server running on port 3000");
});
