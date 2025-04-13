import start from "./Server";
const PORT: number = parseInt(<string>process.env.PORT) || 3000;
const DB_URL: string =
  <string>process.env.DB_URL || "mongodb://mongo:27017/library";

start(PORT, DB_URL);
