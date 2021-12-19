import { Router } from 'express';
import { createProductController } from '../controllers/Product/createProductController';
import { deleteProductController } from '../controllers/Product/deleteProductController';
import { getAllProductsBetweenAValueController, getSameCharacteristicProductsController, getSingleProductController } from '../controllers/Product/getProductController';
import { updateProductController } from '../controllers/Product/updateProductController';
import { authenticateToken } from '../middlewares/authenticateToken';

const router = Router();

router.get('/single-user/:id', authenticateToken, getSingleProductController);
router.get('/price-filter', authenticateToken, getAllProductsBetweenAValueController);
router.get('/characteristics', authenticateToken, getSameCharacteristicProductsController);

router.post('/', authenticateToken, createProductController);

router.put('/:id', authenticateToken, updateProductController);

router.delete('/:id', authenticateToken, deleteProductController);

module.exports = router
