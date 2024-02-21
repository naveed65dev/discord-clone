import express from 'express';
import {conversation, getChannel, getAllChannel, createChannel, createNewMessage, login} from '../controllers/userController.js';
import verifyToken from '../middleware/verifyToken.js';
const router = express.Router();

// Routes for userController
router.post('/login',login);
router.get('/get/conversation', verifyToken, conversation);
router.get('/get/channel', verifyToken, getChannel);
router.get('/get/channelList', verifyToken, getAllChannel);
router.post('/new/channel', verifyToken, createChannel);
router.post('/new/message', verifyToken, createNewMessage);

export default router