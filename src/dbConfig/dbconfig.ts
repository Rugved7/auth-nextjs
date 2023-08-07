// To connect to the database :-)
import mongoose from "mongoose";

export async function connect() {
  // wrap everything in try/catch block
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.once("connected", () => {
      console.log("Connected to MongoDB");
    });

    connection.on("error", (err) => {
      console.log("Something went wrong" + err.message);
      process.exit();
    });
    
  } catch (error) {
    console.log("Error connecting to database");
    console.log(error);
  }
}
