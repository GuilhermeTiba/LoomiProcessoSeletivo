"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationEmail = void 0;
const emailVerification_1 = require("./emailVerification");
const sendVerificationEmail = (id, email, uniqueString) => {
    const currentUrl = 'https://desafio-loomi-app.herokuapp.com/';
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Verify your email",
        html: `<p>Verify your email address to complete the login into your account.</p><p>This link <b>expires in 6 hours</b>.
    </p><p>Press <a href=${currentUrl + "user/verify/" + id + "/" + uniqueString}> here</a> to proceed </p>`,
    };
    emailVerification_1.transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return err;
        }
        else {
            return data;
        }
        ;
    });
};
exports.sendVerificationEmail = sendVerificationEmail;
