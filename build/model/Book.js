"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const uuid_1 = require("uuid");
class Book {
    constructor(title = "", description = "", authors = "", favorite = "", fileCover = "", fileName = "", fileBook = "", id = (0, uuid_1.v4)()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
    }
}
exports.Book = Book;
