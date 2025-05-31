import request from 'supertest';
import express from 'express';
import noteRoutes from '../routes/note.routes';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'ci') {
  dotenv.config({ path: '.env.test' });
}

// ✅ Create a minimal Express app instance for isolated testing
const app = express();
app.use(express.json());
app.use('/api/notes', noteRoutes);

let token: string;

describe('Notes API', () => {
  // ✅ Load token once before tests
  beforeAll(() => {
    token = process.env.TEST_USER_TOKEN || '';
    if (!token) {
      throw new Error("❌ TEST_USER_TOKEN is missing from .env.test");
    }
  });

  // ✅ Test 1: GET request without a token should return 401
  it('should return 401 if user is not authenticated', async () => {
    const res = await request(app).get('/api/notes');
    expect(res.statusCode).toBe(401);
  });

  // ✅ Test 2: POST request without token should return 401
  it('should fail to create note without token', async () => {
    const res = await request(app).post('/api/notes').send({
      title: 'Test Note',
      content: 'This is a test note',
    });
    expect(res.statusCode).toBe(401);
  });

  // ✅ Test 3: GET request with a valid token should return 200 or 204
  it('should return 200 or 204 when authenticated', async () => {
    const res = await request(app)
  .get('/api/notes')
  .set('Authorization', `Bearer ${token}`)

    
    expect([200, 204]).toContain(res.statusCode);
  });
});
