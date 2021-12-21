"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserPasswordController = void 0;
const updateUserRepo_1 = require("../../repositories/User/updateUserRepo");
const updateUserPasswordController = async (req, res) => {
    const { id } = req.params;
    const { lastPassword, newPassword } = req.body;
    try {
        const updateUserPassword = await (0, updateUserRepo_1.updateUserPasswordRepo)(id, lastPassword, newPassword);
        if (updateUserPassword === null) {
            return res.status(403).send({
                Error: 'Last password is incorrect',
            });
        }
        ;
        res.status(200).send({
            updateUserPassword,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.updateUserPasswordController = updateUserPasswordController;
