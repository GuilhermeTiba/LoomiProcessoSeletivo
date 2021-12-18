import { Router } from 'express';
import { authPasswordController } from '../controllers/User/authPasswordControler';

const router = Router();

router.post('/', authPasswordController);

module.exports = router
