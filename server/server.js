import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';

const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> res.send('server is runnoing'))

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> console.log(`Server is runnning on port ${PORT}`))
