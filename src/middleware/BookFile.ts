import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/books");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() +
        "." +
        file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
  },
});

export default multer({ storage: storage });
