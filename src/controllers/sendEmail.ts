import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
export async function sendEmail(to: string, subject: string, template: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.secureserver.net",
    port: 465, // SSL port
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SECRET, // your GoDaddy email address
      pass: process.env.PASSWORD_SECRET, // your GoDaddy email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_SECRET,
    to: to,
    subject: subject,
    html: template,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
}
