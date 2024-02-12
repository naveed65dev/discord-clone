import express from 'express';
import {getAllUser, createuser} from '../controllers/userController.js';

const router = express.Router();

// Routes for userController
router.get('/user', getAllUser);
router.post('/user', createuser);

export default router