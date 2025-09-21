// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectDB from './configs/db.js';
// import { serve } from "inngest/express";
// import {inngest, functions} from './inngest/inde.js'
// import { clerkMiddleware } from '@clerk/express'
// import userRouter from './routes/userRoutes.js';

// const app = express();

// await connectDB();

// app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));
// app.use(clerkMiddleware());
// // app.use(express.json({ limit: "10mb" }));
// // app.use(express.urlencoded({ extended: true }));




// app.get('/', (req, res)=> res.send('server is running'))
// app.use('/api/inngest', serve({ client: inngest, functions }))

// app.use('/api/user',userRouter)

// const PORT = process.env.PORT || 4000;


// app.listen(PORT, ()=> console.log(`Server is runnning on port ${PORT}`))


import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { serve } from "inngest/express";
import { inngest, functions } from './inngest/inde.js';
import { clerkMiddleware } from '@clerk/express';
import userRouter from './routes/userRoutes.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));
app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('server is running'));
app.use('/api/inngest', serve({ client: inngest, functions }));
app.use('/api/user', userRouter);

// Do NOT use app.listen() in Vercel serverless
export default async function handler(req, res) {
  try {
    if (!mongoose.connection.readyState) await connectDB();
    app(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
