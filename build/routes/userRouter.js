"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUserController_1 = require("../controllers/User/createUserController");
const deleteUserController_1 = require("../controllers/User/deleteUserController");
const getUserController_1 = require("../controllers/User/getUserController");
const updateUserController_1 = require("../controllers/User/updateUserController");
const authenticateToken_1 = require("../middlewares/authenticateToken");
const router = (0, express_1.Router)();
router.get('/:idOrEmail', authenticateToken_1.authenticateToken, getUserController_1.getSingleUserController);
router.get('/get-users-with-same-email-provider/:emailProvider', authenticateToken_1.authenticateToken, getUserController_1.getUsersWithSameEmailProviderController);
router.post('/register', createUserController_1.createUserController);
router.put('/:id', authenticateToken_1.authenticateToken, updateUserController_1.updateUserPasswordController);
router.delete('/:id', authenticateToken_1.authenticateToken, deleteUserController_1.deleteUserController);
module.exports = router;
