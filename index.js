import express from "express";
import { config } from "dotenv";
import { port } from "./src/config/config.js";
import { connectDb } from "./src/connectDb/db.js";
import errorHandler from "./src/middleware/errorHandler.js";

let expressApp = express();

config();

expressApp.use(errorHandler);

connectDb();

expressApp.listen(port, () => {
  console.log(`this port is listening at ${port}`);
});
