"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSameCharacteristicProductsController = exports.getAllProductsBetweenAValueController = exports.getSingleProductController = void 0;
const getProductRepo_1 = require("../../repositories/Product/getProductRepo");
const getSingleProductController = async (req, res) => {
    const { id } = req.params;
    const getSingleProduct = await (0, getProductRepo_1.getSingleProductRepo)(id);
    res.status(200).send({
        getSingleProduct,
    });
};
exports.getSingleProductController = getSingleProductController;
const getAllProductsBetweenAValueController = async (req, res) => {
    const { lowValue, highValue } = req.query;
    const getProductsBetwenValues = await (0, getProductRepo_1.getAllProductsBetweenAValueRepo)(Number(lowValue), Number(highValue));
    res.status(200).send({
        getProductsBetwenValues,
    });
};
exports.getAllProductsBetweenAValueController = getAllProductsBetweenAValueController;
const getSameCharacteristicProductsController = async (req, res) => {
    const { characteristic } = req.query;
    const getSameCharacteristicProducts = await (0, getProductRepo_1.getSameCharacteristicProductsRepo)(characteristic);
    res.status(200).send({
        getSameCharacteristicProducts,
    });
};
exports.getSameCharacteristicProductsController = getSameCharacteristicProductsController;