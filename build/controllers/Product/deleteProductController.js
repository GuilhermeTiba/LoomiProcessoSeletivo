"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductController = void 0;
const deleteProductRepo_1 = require("../../repositories/Product/deleteProductRepo");
const deleteProductController = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await (0, deleteProductRepo_1.deleteProductRepo)(id);
        res.status(200).send({
            deleteProduct,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.deleteProductController = deleteProductController;
