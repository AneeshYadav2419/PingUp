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
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    throw error; // important to let the server know
  }
};

export default connectDB;
