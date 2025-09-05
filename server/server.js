import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { serve } from "inngest/express";
import {inngest, functions} from './inngest/inde.js'

const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> res.send('server is runnoing'))
app.use('/api/inngest', serve({ client: inngest, functions }))

const PORT = process.env.PORT || 4000;


app.listen(PORT, ()=> console.log(`Server is runnning on port ${PORT}`))
