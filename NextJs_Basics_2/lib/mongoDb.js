import mongoose from "mongoose";

export const mongoDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected.....");
  } catch (error) {
    console.log("Error : ", error);
  }
};
