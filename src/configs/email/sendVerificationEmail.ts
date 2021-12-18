import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';


const sendVerificationEmail = (id: string, email: string) => {
  const currentUrl = 'http://localhost:3000/';
  const uniqueString = uuidV4() + id;
  const saltrounds = 10
  const hashedUniqueString = hash(uniqueString, saltrounds)

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Verify your email",
    html: `<p>Verify your email address to complete the login into your account.</p><p>This link <b>expires in 6 hours</b>.
    </p><p>Press <a href=${currentUrl + "user/verify/" + id + "/" + hashedUniqueString}> here</a> to proceed </p>`,
  };

  

};