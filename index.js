import express from "express";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("", (req, res) => {
  res.render("home");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/submit", (req, res) => {
  res.render("dataDisplay", req.body);
});
app.listen(3200);
