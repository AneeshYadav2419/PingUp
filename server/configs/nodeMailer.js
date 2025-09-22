// import nodemailer from 'nodemailer';
// // create transport 
// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 587,
  
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// const sendEmail = async ({to, subject, body}) => {
//     const response = await transporter.sendMail({
//         from: process.env.SENDER_EMAIL,
//         to,
//         subject,
//         html: body,
//     })
//     return response
// }

// export default sendEmail

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async ({ to, subject, body, from }) => {
  if (!to || !subject || !body) throw new Error("sendEmail requires { to, subject, body }");
  return transporter.sendMail({
    from: from || process.env.SENDER_EMAIL,
    to,
    subject,
    html: body,
  });
};

export default sendEmail;
