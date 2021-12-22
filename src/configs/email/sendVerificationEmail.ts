import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';
import { transporter } from './emailVerification';


export const sendVerificationEmail = (id: string, email: string, uniqueString: string) => {
  const currentUrl = 'http://localhost:3000/';

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Verify your email",
    html: `<p>Verify your email address to complete the login into your account.</p><p>This link <b>expires in 6 hours</b>.
    </p><p>Press <a href=${currentUrl + "user/verify/" + id + "/" + uniqueString}> here</a> to proceed </p>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if(err){
      return err;
    } else {
      return data;
    };
  });
};