import nodemailer from 'nodemailer';
export async function sendEmail(to: string, subject: string, template:string) {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_SECRET,
      pass: process.env.PASSWORD_SECRET,
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