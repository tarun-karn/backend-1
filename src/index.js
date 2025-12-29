import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/index.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at env ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!", err);
  });

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
