// const express = require("express");
import express from "express";
const app = express();
app.get("", (req, res) => {
  res.send("Hello from express");
});
app.get("/about", (req, res) => {
  res.send("Hello from about page");
});
app.get("/help", (req, res) => {
  res.send("Hello from help page");
});
app.listen(3000);
