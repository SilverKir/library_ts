"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const deleteBookFile = (book) => {
    if (book.fileBook) {
        const filePath = path_1.default.join(__dirname, "..", "..", "public", "books", book.fileBook);
        fs_1.default.unlinkSync(filePath);
    }
};
exports.deleteBookFile = deleteBookFile;
