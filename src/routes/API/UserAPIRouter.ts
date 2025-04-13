import express from "express";
const userRouter = express.Router();

userRouter.post("/login", (req, res) => {
  res.json({
    id: 1,
    mail: "test@mail.ru",
  });
});

export default userRouter;
