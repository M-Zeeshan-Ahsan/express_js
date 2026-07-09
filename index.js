import express from "express";
import { handleUserRequest } from "./controller/userController.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/users", handleUserRequest);
app.listen(3200);
