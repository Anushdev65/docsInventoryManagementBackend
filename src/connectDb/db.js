import mongoose from "mongoose";
import { dbUrl } from "../config/config.js";

export let connectDb = async () => {
  mongoose.set("strictQuery", false);

  // const options = {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  // };

  try {
    mongoose.connect(dbUrl);
    console.log(
      `expressApp is connected to mongodb at port ${dbUrl} successfully`
    );
  } catch (error) {
    console.log(error.message);
  }
};
