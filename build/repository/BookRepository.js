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
const bookSchema_1 = __importDefault(require("../model/bookSchema"));
class BookRepository {
    constructor() {
        this.store = bookSchema_1.default;
        this.store = bookSchema_1.default;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.store.find().select("-__v");
        });
    }
    getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.store.findOne({ id: id }).select("-__v");
        });
    }
    addBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBook = new this.store(book);
            yield newBook.save();
            return newBook;
        });
    }
    updateBook(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.store.findOneAndUpdate({ id: id }, book).select("-__v");
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.store.findOneAndDelete({ id: id }).select("-__v");
        });
    }
}
exports.default = BookRepository;
