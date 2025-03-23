import { Book } from "../model/IBook";

export abstract class BookRepository {
    abstract createBook(book: Book): void;
    abstract getBook(id: string): Book|null;
    abstract updateBook(id: string, updateBook: Book): void;
    abstract deleteBook(id: string): void;
}