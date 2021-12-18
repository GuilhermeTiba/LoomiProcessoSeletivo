"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const uuid_1 = require("uuid");
const sendVerificationEmail = (id, email) => {
    const currentUrl = 'http://localhost:3000/';
    const uniqueString = (0, uuid_1.v4)() + id;
    const saltrounds = 10;
    const hashedUniqueString = (0, bcrypt_1.hash)(uniqueString, saltrounds);
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Verify your email",
        html: `<p>Verify your email address to complete the login into your account.</p><p>This link <b>expires in 6 hours</b>.
    </p><p>Press <a href=${currentUrl + "user/verify/" + id + "/" + hashedUniqueString}> here</a> to proceed </p>`,
    };
};
