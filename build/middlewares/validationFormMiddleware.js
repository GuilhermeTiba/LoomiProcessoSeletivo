"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formValidation = void 0;
const formValidation = (schema) => async (req, res, next) => {
    const body = req.body;
    try {
        await schema.validate(body);
        return next();
    }
    catch (error) {
        return res.status(400).send({
            error: error,
        });
    }
    ;
};
exports.formValidation = formValidation;
