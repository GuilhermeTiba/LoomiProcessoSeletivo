import 'dotenv/config';
import express from 'express';
import { checkIfEmailIsWorking } from './configs/email/emailVerification';

const cors = require('cors');

const userRouter = require('./routes/userRouter.ts');
const clientRouter = require('./routes/clientRouter.ts');
const productRouter = require('./routes/productRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/client', clientRouter);
app.use('/product', productRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Listening...');
})