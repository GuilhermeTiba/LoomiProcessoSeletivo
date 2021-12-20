import { Router } from 'express';
import { createOrderController } from '../controllers/Order/createOrderController';
import { deleteOrderController } from '../controllers/Order/deleteOrderController';
import { getAllOrdersFromAClientController, getAllOrdersFromACustomTimestampController, getSingleOrderController } from '../controllers/Order/getOrderController';
import { updateOrderController } from '../controllers/Order/updateOrderController';
import { createOrderSchema, updateOrderSchema } from '../formValidation/schemas/orderSchema';
import { authenticateToken } from '../middlewares/authenticateToken';
import { formValidation } from '../middlewares/validationFormMiddleware';

const router = Router();

router.get('/single-order/:id', authenticateToken, getSingleOrderController);
router.get('/all-orders-client', authenticateToken, getAllOrdersFromAClientController);
router.get('/custom-timestamp-filter', authenticateToken, getAllOrdersFromACustomTimestampController);

router.post('/', authenticateToken, formValidation(createOrderSchema), createOrderController);

router.put('/:id', authenticateToken, formValidation(updateOrderSchema), updateOrderController);

router.delete('/:id', authenticateToken, deleteOrderController);

module.exports = router;