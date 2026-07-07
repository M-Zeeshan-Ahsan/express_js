// const express = require("express");
import express from "express";
import home from "./pages/home.js";
import login from "./pages/login.js";
import dataSubmit from "./pages/dataSubmit.js";
import path from "path";
const app = express();
// app.get("", (req, res) => {
//   res.send(home());
// });
// app.get("/login", (req, res) => {
//   res.send(login());
// });
// app.post("/submit", (req, res) => {
//   res.send(dataSubmit());
// });
app.get("/", (req, res) => {
  const absPath = path.resolve("view/home.html");
  res.sendFile(absPath);
});
app.get("/login", (req, res) => {
  const absPath = path.resolve("view/login.html");
  res.sendFile(absPath);
});
app.post("/submit", (req, res) => {
  const absPath = path.resolve("view/dataSubmit.html");
  res.sendFile(absPath);
});
app.use("", (req, res) => {
  const absPath = path.resolve("view/404.html");
  res.status(404).sendFile(absPath);
});
app.listen(3000);
