import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/index.js";
connectDB();

// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/{DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`APP IS LISTENING ON PORT ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error : ", error);
//     throw error;
//   }
// })(); // iss syntax se function turant call ho jata hai
