import { Book } from "../model/Book";
import bookSchema from "../model/bookSchema";

export default class BookRepository {
  store = bookSchema;
  constructor() {
    this.store = bookSchema;
  }

  async getAll() {
    return await this.store.find().select("-__v");
  }

  async getBookById(id: string) {
    return await this.store.findOne({ id: id }).select("-__v");
  }

  async addBook(book: Book) {
    const newBook = new this.store(book);
    await newBook.save();
    return newBook;
  }

  async updateBook(id: string, book: Book) {
    await this.store.findOneAndUpdate({ id: id }, book).select("-__v");
  }

  async deleteBook(id: string) {
    await this.store.findOneAndDelete({ id: id }).select("-__v");
  }
}
