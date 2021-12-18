"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = void 0;
const deleteUserRepo_1 = require("../../repositories/User/deleteUserRepo");
const deleteUserController = async (req, res) => {
    const { id } = req.params;
    const deleteUser = await (0, deleteUserRepo_1.deleteUserRepo)(id);
    res.status(200).send({
        deleteUser
    });
};
exports.deleteUserController = deleteUserController;
