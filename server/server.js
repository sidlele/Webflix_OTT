import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, () => console.log('MongoDB Connected'));

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
