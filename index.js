// const express = require("express");
import express from "express";
import home from "./pages/home.js";
import login from "./pages/login.js";
import dataSubmit from "./pages/dataSubmit.js";
const app = express();
app.get("", (req, res) => {
  res.send(home());
});
app.get("/login", (req, res) => {
  res.send(login());
});
app.post("/submit", (req, res) => {
  res.send(dataSubmit());
});

app.listen(3000);
