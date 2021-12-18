"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserPasswordController = void 0;
const updateUserRepo_1 = require("../../repositories/User/updateUserRepo");
const updateUserPasswordController = async (req, res) => {
    const { id } = req.params;
    const { lastPassword, newPassword } = req.body;
    const updateUserPassword = await (0, updateUserRepo_1.updateUserPasswordRepo)(id, lastPassword, newPassword);
    if (updateUserPassword === null) {
        res.status(403).send({
            Error: 'Last password is incorrect'
        });
        return;
    }
    res.status(200).send({
        updateUserPassword
    });
};
exports.updateUserPasswordController = updateUserPasswordController;
