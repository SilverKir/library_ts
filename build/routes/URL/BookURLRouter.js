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
const router = express_1.default.Router();
const BookFile_1 = __importDefault(require("../../middleware/BookFile"));
const BookRepository_1 = __importDefault(require("../../repository/BookRepository"));
const bookController_1 = require("../../controller/bookController");
const counter_1 = require("../../controller/counter");
const container_1 = require("../../service/container");
const store = container_1.container.get(BookRepository_1.default);
router.get("/create", (req, res) => {
    res.render("../src/views/book/create", {
        title: "Book | create",
        book: new Book_1.Book(),
    });
});
router.post("/create", BookFile_1.default.single("bookFile"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
    const book = new Book_1.Book(title, description, authors, favorite, fileCover, fileName);
    if (req.file) {
        book.fileBook = req.file.filename;
    }
    try {
        yield store.addBook(book);
        res.redirect("/");
    }
    catch (error) {
        res.status(500).send("Internal Server Error" + error);
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield store.getAll();
        res.render("../src/views/book/index", { title: "Books", books: books });
    }
    catch (error) {
        res.status(500).send("Internal Server Error" + error);
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield store.getBookById(req.params.id);
    if (book) {
        (0, counter_1.setCounter)(req.params.id);
        const count = yield (0, counter_1.getCount)(req.params.id);
        res.render("../src/views/book/view", {
            title: "Book | view",
            book: book,
            count: count,
        });
    }
    else {
        res.status(404).send("Book not found");
    }
}));
router.get("/update/:id/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield store.getBookById(req.params.id);
        res.render("../src/views/book/update", {
            title: "Book | edit",
            book: book,
        });
    }
    catch (error) {
        res.status(404).send(error);
    }
}));
router.post("/update/:id", BookFile_1.default.single("bookFile"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            (0, bookController_1.deleteBookFile)(book);
            book.fileBook = req.file.filename;
        }
        yield store.updateBook(req.params.id, book);
        res.redirect("/url/books");
    }
    else {
        res.status(404).send("Book not found");
    }
}));
router.post("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield store.getBookById(req.params.id);
    if (book) {
        (0, bookController_1.deleteBookFile)(book);
        yield store.deleteBook(req.params.id);
        res.redirect("/url/books");
    }
    else {
        res.status(404).send("Book not found");
    }
}));
exports.default = router;
