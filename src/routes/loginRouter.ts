import { Router } from 'express';
import { authPasswordController } from '../controllers/Auth/authPasswordControler';

const router = Router();

router.post('/', authPasswordController);

module.exports = router
