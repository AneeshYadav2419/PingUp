// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         mongoose.connection.on('connected', () => console.log('Database Connected'))
//         await mongoose.connect(`${process.env.MONGODB_URL}/pingup`)
        
//     } catch (error) {
//         console.log(error.message)
        
//     }
// }
// export default connectDB


import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;
    mongoose.connection.on("connected", () => console.log("Database Connected"));
    await mongoose.connect(`${process.env.MONGODB_URL}/pingup`);
  } catch (error) {
    console.error("DB error:", error);
  }
};

export default connectDB;