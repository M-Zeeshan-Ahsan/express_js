function login() {
  return ` <form action="/submit" method="POST">
      <input type="text" name="username" placeholder="Enter username" />
      <input type="password" name="password" placeholder="Enter password" />
      <button type="submit">Submit</button>
    </form>`;
}
export default login;
