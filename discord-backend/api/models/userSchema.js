import mongoose from "mongoose";

const discordSchema = mongoose.Schema({
    channelName: {
      type: String,
      required: true,
    },
    conversation: [
      {
        message: String,
        timestamp: {
          type: Date,
          default: Date.now,
        },
        user: {
          displayname: String,
          email: String,
          photo: String,
          uid: String,
        },
      },
    ],
  });
    
export default mongoose.model('conversations', discordSchema)