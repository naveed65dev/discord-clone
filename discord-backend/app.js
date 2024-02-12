import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose'; 
import userRoute from './api/routes/userRoute.js'


const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;  

  
const app = express();

app.use(express.json());

// api
app.use('/api', userRoute);

// MongoDB connection
mongoose.connect(MONGO_URL).then(() => {
        console.log('Connected to MongoDB');

        // Server is running after MongoDB connection

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
          });
          
    })
    .catch((error) => {
        console.error(error);
    });