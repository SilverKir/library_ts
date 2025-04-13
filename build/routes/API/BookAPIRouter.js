"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("../../model/Book");
const express_1 = __importDefault(require("express"));
const BookFile_1 = __importDefault(require("../../middleware/BookFile"));
const BookRepository_1 = __importDefault(require("../../repository/BookRepository"));
const bookController_1 = require("../../controller/bookController");
const path_1 = __importDefault(require("path"));
const container_1 = require("../../service/container");
const store = container_1.container.get(BookRepository_1.default);
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield store.getAll();
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield store.getBookById(req.params.id);
        res.json(book);
    }
    catch (error) {
        res.status(404).json(error);
    }
}));
router.get("/:id/download", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield store.getBookById(req.params.id);
    if (book && book.fileBook) {
        const filePath = path_1.default.join(__dirname, "..", "..", "..", "public", "books", book.fileBook);
        res.download(filePath, book.title + "." + book.fileBook.split(".")[1]);
    }
    else {
        res.status(404).send("Book not found");
    }
}));
router.post("/", BookFile_1.default.single("bookFile"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
    const book = new Book_1.Book(title, description, authors, favorite, fileCover, fileName);
    if (req.file) {
        book.fileBook = req.file.filename;
    }
    try {
        yield store.addBook(book);
        res.status(201).json(book);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
router.put("/:id", BookFile_1.default.single("bookFile"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
    const book = yield store.getBookById(req.params.id);
    if (book) {
        book.title = title;
        book.description = description;
        book.authors = authors;
        book.favorite = favorite;
        book.fileCover = fileCover;
        book.fileName = fileName;
        if (req.file) {
            book.fileBook = req.file.filename;
        }
        yield store.updateBook(req.params.id, book);
        res.json(book);
    }
    else {
        res.status(404).send("Book not found");
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield store.getBookById(req.params.id);
    if (book) {
        (0, bookController_1.deleteBookFile)(book);
        yield store.deleteBook(req.params.id);
        res.send("OK");
    }
    else {
        res.status(404).send("Book not found");
    }
}));
exports.default = router;
