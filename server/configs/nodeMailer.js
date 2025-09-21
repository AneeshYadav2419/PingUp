import nodemailer from 'nodemailer';
// create transport 
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (params) => {
    const response = await transporter.sendMail({
        from: process.env.sendEmail,
        to,
        subject,
        html: body,
    })
    return response
}

export default sendEmail