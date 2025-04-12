import { Schema, model } from "mongoose";

const bookSchema = new Schema({
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

export default model("Book", bookSchema);
