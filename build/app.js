"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const loginRouter = require('./routes/loginRouter.ts');
const userRouter = require('./routes/userRouter.ts');
const clientRouter = require('./routes/clientRouter.ts');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/client', clientRouter);
app.listen(process.env.PORT || 3000, () => {
    console.log('Server Listening...');
});
