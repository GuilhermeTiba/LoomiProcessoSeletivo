"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmailController = void 0;
const verifyEmail_1 = require("../../configs/email/verifyEmail");
const verifyEmailController = (req, res) => {
    const { id, uniqueString } = req.params;
    try {
        if ((0, verifyEmail_1.verifyEmail)(id, uniqueString)) {
            res.send({
                message: 'User verified, you can use now the application',
            });
        }
        else {
            res.send({
                error: 'Something went wrong on verifying your user',
            });
        }
        ;
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.verifyEmailController = verifyEmailController;
