import express from 'express';
import {conversation, getChannel, getAllChannel, createChannel, createNewMessage} from '../controllers/userController.js';

const router = express.Router();

// Routes for userController
router.get('/get/conversation', conversation);
router.get('/get/channel', getChannel);
router.get('/get/channelList', getAllChannel);
router.post('/new/channel', createChannel);
router.post('/new/message', createNewMessage)
export default router