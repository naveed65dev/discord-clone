import express from 'express';
import {conversation, getChannel, getAllChannel, createChannel, createNewMessage} from '../controllers/userController.js';

const router = express.Router();

// Routes for userController
router.get('/conversation', conversation);
router.get('/channel', getChannel);
router.get('/channellist', getAllChannel);
router.post('/channel', createChannel);
router.post('/new/message', createNewMessage)
export default router