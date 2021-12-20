import { Router } from 'express';
import { createProductController } from '../controllers/Product/createProductController';
import { deleteProductController } from '../controllers/Product/deleteProductController';
import { getAllProductsBetweenAValueController, getSameCharacteristicProductsController, getSingleProductController } from '../controllers/Product/getProductController';
import { updateProductController } from '../controllers/Product/updateProductController';
import { createProductSchema, updateProductSchema } from '../formValidation/schemas/productSchema';
import { authenticateToken } from '../middlewares/authenticateToken';
import { formValidation } from '../middlewares/validationFormMiddleware';

const router = Router();

router.get('/single-user/:id', authenticateToken, getSingleProductController);
router.get('/price-filter', authenticateToken, getAllProductsBetweenAValueController);
router.get('/characteristics', authenticateToken, getSameCharacteristicProductsController);

router.post('/', authenticateToken, formValidation(createProductSchema), createProductController);

router.put('/:id', authenticateToken, formValidation(updateProductSchema),updateProductController);

router.delete('/:id', authenticateToken, deleteProductController);

module.exports = router
