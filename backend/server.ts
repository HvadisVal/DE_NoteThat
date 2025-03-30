import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import DB connection
import { connect } from './repository/database';

// Import routes
import authRoutes from './routes/auth.routes';
import noteRoutes from './routes/note.routes';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // enables req.body parsing

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

// ✅ Connect to MongoDB
connect();

// ✅ Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
