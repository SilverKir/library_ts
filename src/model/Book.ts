import { v4 as uuid } from "uuid";

export class Book {
  private id: string;
  private title: string;
  private description: string;
  private authors: string;
  private favorite: string;
  private fileCover: string;
  private fileName: string;
  private fileBook: string;

  constructor(
    title = "",
    description = "",
    authors = "",
    favorite = "",
    fileCover = "",
    fileName = "",
    fileBook = "",
    id = uuid()
  ) {
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
