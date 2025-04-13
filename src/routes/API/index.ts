import express from "express";
import bookRouter from "./BookAPIRouter";
import userRouter from "./UserAPIRouter";

const router = express.Router();

router.use("/books", bookRouter);
router.use("/user", userRouter);

export default router;
