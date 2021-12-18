import { Router } from 'express';
import { createUserController } from '../controllers/User/createUserController';

const router = Router();

router.post('/', createUserController);

module.exports = router;
