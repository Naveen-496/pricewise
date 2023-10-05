import mongoose from "mongoose";

let isConnected = false;
export async function connectToDb() {

  mongoose.set("strictQuery", true);

  if (isConnected) {
    return console.log("Using connection from before");
  }

  try {
    if (!process.env.MONGODB_URI) {
      return console.log(`No uri found from the env`);
    }

    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
     console.log("mongodb connected");
  } catch (error: any) {
    console.log(`Failed to connect to mongodb ${error.message}`);
  }
}
