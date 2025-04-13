"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    authors: {
        type: String,
    },
    favorite: {
        type: String,
    },
    fileCover: {
        type: String,
    },
    fileName: {
        type: String,
    },
    fileBook: {
        type: String,
    },
});
exports.default = (0, mongoose_1.model)("Book", bookSchema);
