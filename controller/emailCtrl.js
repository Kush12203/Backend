const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MP,
    },
  });

  async function main() {
    try {
      const info = await transporter.sendMail({
        from: '"Hey 👻" <abc@gmail.com>',
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.htm,
      });
      console.log("Message sent: %s", info.messageId);
    } catch (error) {
      console.error("Error occurred while sending email: ", error);
    }
  }
  main();

});

module.exports = sendEmail;