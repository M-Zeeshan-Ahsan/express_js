import express from "express";
import nodemailer from "nodemailer";
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ahsansahi6@gmail.com",
    pass: "purd vlcz hnoj czcc",
  },
});

app.get("/mail", (req, res) => {
  res.render("mail");
});
app.post("/submit-email", (req, res) => {
  console.log(req.body);
  const mailOption = {
    from: "ahsansahi6@gmail.com",
    to: "zeeshanahsan8181@gmail.com",
    subject: req.body.subject,
    text: req.body.mail,
  };
  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      res.send("mail not send");
    } else {
      res.send("mail send");
    }
  });
});

app.listen(3200);
