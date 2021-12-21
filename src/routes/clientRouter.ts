import { Router } from 'express';
import { createClientController } from '../controllers/Client/createClientController';
import { deleteClientController } from '../controllers/Client/deleteClientController';
import { getClientController } from '../controllers/Client/getClientController';
import { updateClientController } from '../controllers/Client/updateClientController';
import { createClientSchema, updateClientSchema } from '../formValidation/schemas/clientSchema';
import { authenticateToken } from '../middlewares/authenticateToken';
import { formValidation } from '../middlewares/validationFormMiddleware';

const router = Router();

router.get('/:id', authenticateToken, getClientController);

router.post('/', authenticateToken, formValidation(createClientSchema) ,createClientController);

router.put('/:id', authenticateToken, formValidation(updateClientSchema) ,updateClientController);

router.delete('/:id', authenticateToken, deleteClientController);

module.exports = router;
