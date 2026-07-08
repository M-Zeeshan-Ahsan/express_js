import express from "express";
const app = express();
function checkAge(req, res, next) {
  if (!req.query.age || req.query.age < 18) {
    res.send("You are not allowed to access this page");
  }
  next();
}
app.use(checkAge);
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/login", (req, res) => {
  res.send("Login Page");
});
app.get("/admin", (req, res) => {
  res.send("Admin Page");
});
app.listen(3000);
