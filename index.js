import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  let cookieData = req.get("cookie");
  cookieData = cookieData.split(";");
  cookieData = cookieData[1];
  cookieData = cookieData.split("=");
  cookieData = cookieData[1];
  console.log(cookieData);
  res.render("home", { name: cookieData });
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/profile", (req, res) => {
  res.setHeader("Set-Cookie", "login=true");
  res.setHeader("Set-cookie", "name=" + req.body.name);
  res.render("profile");
});

app.listen(3200);
