"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authPasswordControler_1 = require("../controllers/Auth/authPasswordControler");
const router = (0, express_1.Router)();
router.post('/', authPasswordControler_1.authPasswordController);
module.exports = router;
