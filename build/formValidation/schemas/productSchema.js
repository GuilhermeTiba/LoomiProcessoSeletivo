"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
const Yup = __importStar(require("yup"));
exports.createProductSchema = Yup.object({
    name: Yup.string()
        .required(),
    price: Yup.number()
        .required(),
    characteristics: Yup.string()
        .required(),
    image: Yup.mixed()
        .optional(),
});
exports.updateProductSchema = Yup.object({
    name: Yup.string()
        .optional(),
    price: Yup.number()
        .optional(),
    characteristics: Yup.string()
        .optional(),
    image: Yup.mixed()
        .optional(),
});
