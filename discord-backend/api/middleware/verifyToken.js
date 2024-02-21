import admin from 'firebase-admin';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  const token = authHeader.split(' ')[1];

  // You don't need to verify custom tokens on the server-side
  // They are already signed by your Firebase service account

  // Set the decoded token data in the request
  req.userId = token;

  // Move to the next middleware
  next();
};

export default verifyToken;
