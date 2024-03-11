import mongoose from "mongoose";

export async function Connect() {
  try {
    mongoose.connect("mongodb://localhost:27017/mineralusers");
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", () => {
      console.log(
        "MongoDB connection eror.Please make sure MongoDB is running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong");
    console.log(error);
  }
}
