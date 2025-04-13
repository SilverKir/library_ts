import fs from "fs";
import path from "path";
import { Book } from "../model/Book";

export const deleteBookFile = (book: Book) => {
  if (book.fileBook) {
    const filePath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "books",
      book.fileBook
    );
    fs.unlinkSync(filePath);
  }
};
