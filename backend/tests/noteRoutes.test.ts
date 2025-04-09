import request from 'supertest';
import express from 'express';
import noteRoutes from '../routes/note.routes';
import dotenv from 'dotenv';

// ✅ Load environment variables from .env (especially TEST_USER_TOKEN)
dotenv.config(); 

// ✅ Create a minimal Express app instance for isolated testing
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api/notes', noteRoutes); // Mount the note routes for testing


describe('Notes API', () => {
   // ✅ Load a valid token from .env to simulate a logged-in user
   const token = process.env.TEST_USER_TOKEN;

   // ✅ Test 1: GET request without a token should be unauthorized
  it('should return 401 if user is not authenticated', async () => {
    const res = await request(app).get('/api/notes');
    expect(res.statusCode).toBe(401);
  });

  // ✅ Test 2: POST request without a token should also be unauthorized
  it('should fail to create note without token', async () => {
    const res = await request(app).post('/api/notes').send({
      title: 'Test Note',
      content: 'This is a test note',
    });
    expect(res.statusCode).toBe(401);
  });

  // ✅ Test 3: GET request with a valid token should succeed
  it('should return 200 and notes for valid token', async () => {
    const res = await request(app)
      .get('/api/notes')
      .set('Authorization', `Bearer ${token}`);
      
    // Expect success — either 200 OK (if notes exist) or 204 No Content (if none)
    expect([200, 204]).toContain(res.statusCode);
  });
});
