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
const absPath = path.resolve("view");
app.get("/", (req, res) => {
  res.sendFile(absPath + "/home.html");
});
app.get("/login", (req, res) => {
  res.sendFile(absPath + "/login.html");
});
app.post("/submit", (req, res) => {
  res.sendFile(absPath + "/dataSubmit.html");
});
app.use("", (req, res) => {
  res.status(404).sendFile(absPath + "/404.html");
});
app.listen(3000);
