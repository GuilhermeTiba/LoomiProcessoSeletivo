import 'dotenv/config';
import express from 'express';
import { checkIfEmailIsWorking } from './configs/email/emailVerification';

const cors = require('cors');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', registerRouter);
app.use('/login', loginRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Listening...')
})