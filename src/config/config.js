import { config } from "dotenv";

config();

export const port = process.env.PORT;
export const dbUrl = process.env.DB_URL || "mongodb://0.0.0.0:27017/DB_URL";
