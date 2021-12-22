import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_EMAIL_PASSWORD
  },
});

export const checkIfEmailIsWorking  = transporter.verify((error, success) => {
  if(error) {
    console.log(error);
    return false;
  } else {
    return true;
  };
});
