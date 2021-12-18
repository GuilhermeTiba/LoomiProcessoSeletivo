import 'dotenv/config';
import express from 'express';
import { checkIfEmailIsWorking } from './configs/email/emailVerification';

const cors = require('cors');

const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Listening...')
})