import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_EMAIL_PASSWORD
  },
});

export const checkIfEmailIsWorking  = transporter.verify((error, success) => {
  if(error) {
    console.log(error);
  } else {
    console.log("Ready for messages");
    console.log(success);
  };
});
