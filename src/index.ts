import start from "./Server";
const PORT: number = parseInt(<string>process.env.PORT) || 3000;
const DB_URL: string = <string>process.env.DB_URL;

start(PORT, DB_URL);
