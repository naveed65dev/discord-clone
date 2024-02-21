import User from '../models/userSchema.js';

import dotenv from 'dotenv';
dotenv.config();
import admin from 'firebase-admin';
const serviceAccount = {
    "type": "service_account",
    "project_id": "discord-clone-15794",
    "private_key_id": "bc214dd6a82b090061ea780d36eaa71431cf32bc",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4pJbI+9MSFgJQ\n+1a2mGtEXH9E59jjp5G7iAcanV/RRU7i6h5exPhe/vU1NIQvvS8hQG/6+Jv5vKaY\n+smJM7I7RZFHujFt8el3sOo5J+NUnnw8vJ4dFWTbxhGnzIynqmw9/RU1IXv3Dy6s\nIiS4nOvqA+LKCI9T+/NFq+K6sOy5w4Y9tIxEGhKIBFLff9JdaaFHx44n7PIgTSth\nIogSciwZ7Gf5DGD1awmhuTkICpVgRbTxRDOlJCI5uSnJGwAXMgg4hKoqbr1QGgjk\nvaCHHMEaC4IU6E4c7fimZAEiIHn3QI4X+kdGouWcYqVakkkcwWsJApBt3hO99CcW\nO9OzWfBzAgMBAAECggEAAJWThJL9lOuH/H/FQ2YKiXiI2GlvtuFStpSW/+8tF60N\nZLMLa7ZGUHffTYnzxg35+NGUnNOfCEW9edXWP+Nb1kG3o1uy3FgNKp5Bn3ytv8ng\nmYk34LcRO0DObrodvzZi2K9ezEV5UMu/z5ksD6cIFZ64mtiZoG63XSB2Hfr3f+Fx\ncDZrqMBR3DT54ES/DUI4VwnslOmYGSpuhpTPCbJp5g/mtbX32SO968Ew8UsLFAuH\na0qI2Il89htAPKut9bLM3tu2SbEuWiuQxkubCFPLaxreCJiiGQBCu3D9H/HO/O8m\ncR97epznM7C5+c0yERk1k7494vk4jW7fHgg1uLXpwQKBgQDvN/8l+7bNOJdG87Zm\n2pGTKQrzJLhOPCqNoaAt2gYM9iu7jRNsf2/TJ5DcXDKsHh+vWdViGwODWOTNnYnQ\nR6pfVi6DMSrDMJz42L4F6d5kkdwEvzA+t/0hQeyvdns4ZcxfI8uTCsVfk8yB30Nv\nuEGQXUhhTLTt8sJNauy4QI90FwKBgQDFmH570MUUbDWuFoIXwRWDEhEDwpvX8DR4\nCOBy2ravpPL/IdR3dhuElRTj3Bkpbyrcgge3t90PzlYGbWEe6rLTp+JpOn2nvips\ntIzHIt6UlbJDH+kmcfttB8EQtVF+X1YwIs3dtO/LMC0mcC01IuyZTiKFv4I7NLyQ\nxHK8Hcg0BQKBgQCVFCaT+zw+xIeyFeuUSZ3zQd6rDDU3vFMglJsIOBkRNtCmPxLd\nyMVdqAik62hAzz0bwDY0v3T/BAUDBqx9+kt4wnKWG6v0nHUWt6wkb0zDDAs7ghKE\n45CCi1z/NC0yRm6I0/voFQxPtgH65bJXC1MArsGOsYkHyQPBz2LaqJE93QKBgFlg\nnPXMfRi7yZwxOi8ce2qKJYAZ6vxF/rW87imFnNTeO7wDxWMz3UafWI+o4wjG7BBK\nEMudMzUPFAJcP24Io1LxwYvvlR7m+bGqCXOZ5iw3eia6rG9jZ2Lt+vpfybjrzsR/\nObdrPHwgEowseYZrgbHmkd8FvRaiyBiDg5Jrtj8xAoGAKhbcRxfcL7prZni64kAT\nf+UIUT36s3nes83DhBvqPnBqt2vF9r11FMmHlQLeYGR50s8j+qrWTFwAIguqTR6w\nTP52x6CR9IXTr5pcMcxU+bMHT2HSfqgoSY3y6go6GX5+48tu5qg+8rlHATgygbFS\nP07YI4RiIYg4mxGUfa/rwCY=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-n6fe5@discord-clone-15794.iam.gserviceaccount.com",
    "client_id": "104604482464514145839",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n6fe5%40discord-clone-15794.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://console.firebase.google.com/u/0/project/discord-clone-15794/settings/general/web:MWViYzcyZjctZWYxMC00ZjM5LThhNDItYzA0Y2RiZjhhZjRk',
});
export const login = async (req, res) => {
    try {
        const {uid} = req.body;

        const customToken = await admin.auth().createCustomToken(uid, { expiresIn: '15d' }, process.env.JWT_SECRET
        );
        res.status(200).json({ token: customToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: `Authentication failed: ${error.message}` });
    }
};


// Get channel
export const getAllChannel = async (req, res) => {
    try {
        const user = await User.find({});
        //get channel id and name 
        let channels = []
        user.map((channelData)=>{
            const channelInfo = {
                id: channelData._id,
                name: channelData.channelName
            }
            channels.push(channelInfo)
        })
        console.log(channels)
        res.status(200).json(channels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Create a new channel

export const createChannel = async (req, res) => {
    try {
    
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};



//create new message
export const createNewMessage = async (req, res) => {
    try {
        console.log('Request received:', req.body);

        const newMessage = req.body;
if(newMessage === ''){
    console.log('message is empty')
} else{
        // Assuming req.query.id contains a valid ObjectId string
        const userId = req.query.id;

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { conversation: newMessage } },
            { new: true } // To return the updated user document
        );

        console.log('Updated User:', updatedUser);

        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send(updatedUser);
    }
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).send({ error: 'Internal Server Error', details: error.message });
    }
};


// Get all channel with conversation
export const getChannel = async (req, res) => {
    try {
        const user = await User.find({});
         
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get conversation
export const conversation = async (req, res) => {
    const id = req.query.id;

    try {
        const user = await User.find({ _id: id });
         
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



 