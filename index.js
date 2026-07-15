import express from "express";
const app = express();
import session, { Session } from "express-session";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "apple",
  }),
);
app.get("/", (req, res) => {
  const sessionData = req.session.data;
  console.log(sessionData);
  res.render("home", { sessionData });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/profile", (req, res) => {
  req.session.data = req.body;
  res.render("profile");
});

app.listen(3200);
