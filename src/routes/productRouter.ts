import { Router } from 'express';
import { createProductController } from '../controllers/Product/createProductController';
import { deleteProductController } from '../controllers/Product/deleteProductController';
import { getAllProductsBetweenAValueController, getSameCharacteristicProductsController, getSingleProductController } from '../controllers/Product/getProductController';
import { updateProductController } from '../controllers/Product/updateProductController';
import { authenticateToken } from '../middlewares/authenticateToken';

const router = Router();

router.get('/singleUser/:id', authenticateToken, getSingleProductController);
router.get('/valueFilter', authenticateToken, getAllProductsBetweenAValueController);
router.get('/characteristics', authenticateToken, getSameCharacteristicProductsController);

router.post('/', authenticateToken, createProductController);

router.put('/:id', authenticateToken, updateProductController);

router.delete('/:id', authenticateToken, deleteProductController);

module.exports = router
