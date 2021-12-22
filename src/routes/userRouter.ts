import { Router } from 'express';
import { createUserController } from '../controllers/User/createUserController';
import { deleteUserController } from '../controllers/User/deleteUserController';
import { getSingleUserController, getUsersWithSameEmailProviderController } from '../controllers/User/getUserController';
import { updateUserPasswordController } from '../controllers/User/updateUserController';
import { authenticateToken } from '../middlewares/authenticateToken';
import { authPasswordController } from '../controllers/Auth/authPasswordControler';
import { formValidation } from '../middlewares/validationFormMiddleware';
import { createUserSchema, updateUserSchema } from '../formValidation/schemas/userSchema';
import { verifyEmailController } from '../controllers/Auth/verifyEmailController';
import { checkIfUserIsVerified } from '../middlewares/checkIfUserIsVerified';

const router = Router();

router.get('/:idOrEmail', authenticateToken, getSingleUserController);
router.get('/get-users-with-same-email-provider/:emailProvider', authenticateToken, getUsersWithSameEmailProviderController);
router.get('/verify/:id/:uniqueString', verifyEmailController)

router.post('/register', formValidation(createUserSchema), createUserController);
router.post('/login', formValidation(createUserSchema), checkIfUserIsVerified, authPasswordController);

router.put('/:id', authenticateToken, formValidation(updateUserSchema), updateUserPasswordController);

router.delete('/:id', authenticateToken, deleteUserController);

module.exports = router
