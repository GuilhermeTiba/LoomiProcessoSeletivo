import { Router } from 'express';
import { createClientController } from '../controllers/Client/createClientController';
import { deleteClientController } from '../controllers/Client/deleteClientController';
import { getClientController } from '../controllers/Client/getClientController';
import { updateClientController } from '../controllers/Client/updateClientController';
import { authenticateToken } from '../middlewares/authenticateToken';

const router = Router();

router.get('/:id', authenticateToken, getClientController);

router.post('/', authenticateToken, createClientController);

router.put('/:id', authenticateToken, updateClientController);

router.delete('/:id', authenticateToken, deleteClientController);

module.exports = router;
