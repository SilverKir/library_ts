import express from "express";
import mongoose from "mongoose";
import indexRouter from "./routes";
const app = express();

const start = async (port: number, dbUrl: string) => {
  app.use(express.json());
  app.use(express.urlencoded());
  app.set("view engine", "ejs");
  app.use(indexRouter);
  try {
    await mongoose.connect(dbUrl);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

export default start;
