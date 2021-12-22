import 'dotenv/config';
import express from 'express';

const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const { swaggerDocument } = require('./swagger');
const userRouter = require('./routes/userRouter.ts');
const clientRouter = require('./routes/clientRouter.ts');
const productRouter = require('./routes/productRouter.ts');
const orderRouter = require('./routes/orderRouter.ts');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/user', userRouter);
app.use('/client', clientRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Listening...');
})