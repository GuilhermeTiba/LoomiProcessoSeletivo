import { Router } from 'express';
import { createOrderController } from '../controllers/Order/createOrderController';
import { deleteOrderController } from '../controllers/Order/deleteOrderController';
import { getAllOrdersFromAClientController, getAllOrdersFromACustomTimestampController, getSingleOrderController } from '../controllers/Order/getOrderController';
import { updateOrderController } from '../controllers/Order/updateOrderController';
import { authenticateToken } from '../middlewares/authenticateToken';

const router = Router();

router.get('/single-order/:id', authenticateToken, getSingleOrderController);
router.get('/all-orders-client', authenticateToken, getAllOrdersFromAClientController);
router.get('/custom-timestamp-filter', authenticateToken, getAllOrdersFromACustomTimestampController);

router.post('/', authenticateToken, createOrderController);

router.put('/:id', authenticateToken, updateOrderController);

router.delete('/:id', authenticateToken, deleteOrderController);

module.exports = router;