// windows+.
// console.log("❤️");
// import chalk from "chalk";
// import os from "os";
// import path from "path";
// import validator from "validator";

// console.log(os.arch());
// console.log(path.parse("E:/upload/view/rahul.txt"));

// const status = validator.isEmail("ra1001@gmail.com");
// if (status) {
//   console.log(chalk.blue.underline("valid email"));
// } else {
//   console.log(chalk.blue.bgRed("not valid email"));
// }

//module wrapper function
// (function (exports, require, module, __filename, __dirname) {
// let name1 = "rahul";
// console.log(name1);
// console.log(__dirname);
// console.log(__filename);
// })();

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "okey.okon84@ethereal.email",
      pass: "dSYjEV6MZy9tvATvGn",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo" <foo@example.com>', // sender address
    to: "ra10011996@gmail.com", // list of receivers
    subject: "Hello from nodejs", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log(info);
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
