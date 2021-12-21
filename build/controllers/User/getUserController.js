"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersWithSameEmailProviderController = exports.getSingleUserController = void 0;
const getUserRepo_1 = require("../../repositories/User/getUserRepo");
const getSingleUserController = async (req, res) => {
    const { idOrEmail } = req.params;
    try {
        const getSingleUser = await (0, getUserRepo_1.getSingleUserRepo)(idOrEmail);
        if (getSingleUser === null) {
            res.status(404).send('No User found with this email or id');
            return;
        }
        ;
        res.status(200).send({
            getSingleUser,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.getSingleUserController = getSingleUserController;
const getUsersWithSameEmailProviderController = async (req, res) => {
    const { emailProvider } = req.params;
    const getUsersWithSameEmailProvider = await (0, getUserRepo_1.getUsersWithSameEmailProviderRepo)(emailProvider);
    if (getUsersWithSameEmailProvider === null) {
        res.status(404).send({
            error: `No user found with this "${emailProvider}.com" email provider`
        });
        return;
    }
    ;
    res.status(200).send({
        getUsersWithSameEmailProvider,
    });
};
exports.getUsersWithSameEmailProviderController = getUsersWithSameEmailProviderController;
