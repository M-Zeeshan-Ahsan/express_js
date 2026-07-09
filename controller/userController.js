import { userList } from "../model/userModel.js";

export function handleUserRequest(req, res) {
  const userData = userList();

  res.render("user", { users: userData });
}
