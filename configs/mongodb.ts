import mongoose from "mongoose";
import Env from "./env";

const connectUrl = Env().DB_URL;

export const connectMongoose = async () => {
  try {
    await mongoose.connect(connectUrl);
    console.log("Database connected");
  } catch (error) {
    console.error(error);
    throw new Error("Database failed to connect");
  }
};
