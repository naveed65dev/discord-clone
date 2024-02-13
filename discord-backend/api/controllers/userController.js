 
 
import User from '../models/userSchema.js';

// Get channel
export const getChannel = async (req, res) => {
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
        const newMessage = req.body;

        const updatedUser = await User.findOneAndUpdate(
            { _id: req.query.id },
            { $push: { conversation: newMessage } },
            { new: true } // To return the updated user document
        );

        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send(updatedUser);
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};


// Get all channel
export const getAllChannel = async (req, res) => {
    try {
        const user = await User.find({});
         
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get conversation
export const conversation = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findOne({ id: id });
         
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



 