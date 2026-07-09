import express from "express";

const app = express();

app.get("/", (req, res) => {
  const users = ["zeeshan", "ahsan"];
  let data = `<ul>`;
  for (let i = 0; i < users.length; i++) {
    data += `<a href="/user/${users[i]}"><li>${users[i]}</li></a>`;
  }
  data += `</ul>`;
  res.send(data);
});
app.get("/user/:name", (req, res) => {
  res.send(`<h1>Hello ${req.params.name.toUpperCase()}</h1>`);
});
app.listen(3200);
