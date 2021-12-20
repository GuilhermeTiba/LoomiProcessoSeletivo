"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductController = void 0;
const createProductRepo_1 = require("../../repositories/Product/createProductRepo");
const createProductController = async (req, res) => {
    const { name, price, characteristics, image } = req.body;
    try {
        const createProduct = await (0, createProductRepo_1.createProductRepo)(name, price, characteristics, image);
        res.status(200).send({
            createProduct,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.createProductController = createProductController;
