"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductController = void 0;
const createProductRepo_1 = require("../../repositories/Product/createProductRepo");
const createProductController = async (req, res) => {
    const { name, price, code, characteristics, image } = req.body;
    const createProduct = await (0, createProductRepo_1.createProductRepo)(name, price, characteristics, image);
    res.status(200).send({
        createProduct
    });
};
exports.createProductController = createProductController;
