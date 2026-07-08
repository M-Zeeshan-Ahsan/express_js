import express from "express";
const app = express();
function checkAgeRouteMiddleware(req, res, next) {
  if (!req.query.age || req.query.age < 18) {
    res.send("You are not allowed to access this page");
  }
  next();
}

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/login", (req, res) => {
  res.send("Login Page");
});
app.get("/users", checkAgeRouteMiddleware, (req, res) => {
  res.send("Users Page");
});
app.get("/products", checkAgeRouteMiddleware, (req, res) => {
  res.send("Products Page");
});
app.listen(3000);
