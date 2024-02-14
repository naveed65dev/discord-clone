import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose'; 
import userRoute from './api/routes/userRoute.js'
import cors from 'cors';
import Pusher from 'pusher'

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;  

const pusher = new Pusher({
    appId: "1756430",
    key: "e4dc4f6f941ac0de2ec3",
    secret: "af361de19bfbc0703b8b",
    cluster: "ap2",
    useTLS: true
  });





const app = express();
app.use(cors());
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



    mongoose.connection.once('open', () => {
        console.log('DB connected');
    
        const changeStream = mongoose.connection.collection('conversation').watch();
    
        changeStream.on('change', (change) => {
            if (change.operationType === 'insert') {
                pusher.trigger('channels', 'newChannel', {
                    'change': change
                });
            } else if (change.operationType === 'update') {
                pusher.trigger('conversation', 'newMessage', {
                    'change': change
                });
            } else {
                console.log('err triggering');
            }
        });
    });
    