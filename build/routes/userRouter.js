"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUserController_1 = require("../controllers/User/createUserController");
const deleteUserController_1 = require("../controllers/User/deleteUserController");
const getUserController_1 = require("../controllers/User/getUserController");
const updateUserController_1 = require("../controllers/User/updateUserController");
const authenticateToken_1 = require("../middlewares/authenticateToken");
const authPasswordControler_1 = require("../controllers/Auth/authPasswordControler");
const validationFormMiddleware_1 = require("../middlewares/validationFormMiddleware");
const userSchema_1 = require("../formValidation/schemas/userSchema");
const verifyEmailController_1 = require("../controllers/Auth/verifyEmailController");
const checkIfUserIsVerified_1 = require("../middlewares/checkIfUserIsVerified");
const router = (0, express_1.Router)();
router.get('/:idOrEmail', authenticateToken_1.authenticateToken, getUserController_1.getSingleUserController);
router.get('/get-users-with-same-email-provider/:emailProvider', authenticateToken_1.authenticateToken, getUserController_1.getUsersWithSameEmailProviderController);
router.get('/verify/:id/:uniqueString', verifyEmailController_1.verifyEmailController);
router.post('/register', (0, validationFormMiddleware_1.formValidation)(userSchema_1.createUserSchema), createUserController_1.createUserController);
router.post('/login', (0, validationFormMiddleware_1.formValidation)(userSchema_1.createUserSchema), checkIfUserIsVerified_1.checkIfUserIsVerified, authPasswordControler_1.authPasswordController);
router.put('/:id', authenticateToken_1.authenticateToken, (0, validationFormMiddleware_1.formValidation)(userSchema_1.updateUserSchema), updateUserController_1.updateUserPasswordController);
router.delete('/:id', authenticateToken_1.authenticateToken, deleteUserController_1.deleteUserController);
module.exports = router;
