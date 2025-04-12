import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.render("../src/views/index", { title: "Main" });
});

export default router;
