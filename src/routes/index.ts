import express from "express";

import mainRouter from "./main";
import apiRouter from "./API/index";
import urlRouter from "./URL/index";
const router = express.Router();

router.use("/", mainRouter);
router.use("/api", apiRouter);
router.use("/url", urlRouter);

export default router;
