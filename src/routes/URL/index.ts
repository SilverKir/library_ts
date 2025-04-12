import express from "express";
import bookRouter from "./BookURLRouter";

const router = express.Router();
router.use("/books", bookRouter);

export default router;
