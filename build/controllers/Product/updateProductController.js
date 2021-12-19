"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductController = void 0;
const updateProductRepo_1 = require("../../repositories/Product/updateProductRepo");
const updateProductController = async (req, res) => {
    const { id } = req.params;
    const { name, price, characteristics, image } = req.body;
    const updateProduct = await (0, updateProductRepo_1.updateProductRepo)(id, name, price, characteristics, image);
    res.status(200).send({
        updateProduct,
    });
};
exports.updateProductController = updateProductController;
