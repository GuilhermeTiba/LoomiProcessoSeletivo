import { Router } from 'express';
import { createUserController } from '../controllers/User/createUserController';
import { deleteUserController } from '../controllers/User/deleteUserController';
import { getSingleUserController, getUsersWithSameEmailProviderController } from '../controllers/User/getUserController';
import { updateUserPasswordController } from '../controllers/User/updateUserController';
import { authenticateToken } from '../middlewares/authenticateToken';

const router = Router();

router.get('/:idOrEmail', authenticateToken, getSingleUserController);
router.get('/get-users-with-same-email-provider/:emailProvider', authenticateToken, getUsersWithSameEmailProviderController);

router.post('/register', createUserController);

router.put('/:id', authenticateToken, updateUserPasswordController);

router.delete('/:id', authenticateToken, deleteUserController);

module.exports = router
