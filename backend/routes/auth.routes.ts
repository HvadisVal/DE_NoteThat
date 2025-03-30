import express from 'express';
import { registerUser, loginUser, securityToken } from '../controllers/authController';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected test route (optional)
router.get('/protected', securityToken, (req, res) => {
  res.status(200).json({ message: 'Protected route accessed ✅' });
});

export default router;
