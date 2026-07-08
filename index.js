import express from "express";
import path from "path";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const absPath = path.resolve("view/home.html");
  res.sendFile(absPath);
});
app.get("/login", (req, res) => {
  res.send(`<form action="/submit" method="POST">
  <input type="text" name="username" placeholder="Username" />
  <input type="password" name="password" placeholder="Password" />
  <button type="submit">Submit</button>
</form>`);
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Submit Page");
});

app.listen(3000);
