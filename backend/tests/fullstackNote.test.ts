import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import noteRoutes from '../routes/note.routes';
import { connect, disconnect } from '../repository/database';

dotenv.config({ path: '.env.test' });

const app = express();
app.use(express.json());
app.use('/api/notes', noteRoutes);

const token = process.env.TEST_USER_TOKEN!;

beforeAll(async () => {
  await connect();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('🧪 Fullstack Note Creation Test', () => {
  it('should create and retrieve a note for authenticated user', async () => {
    const testNote = {
      title: 'Integration Note',
      content: 'Created via fullstack test',
      category: 'Test',
      color: 'bg-blue-400',
      tags: ['e2e'],
      pinned: false
    };

    const createRes = await request(app)
      .post('/api/notes')
      .set('Authorization', `Bearer ${token}`)
      .send(testNote);

    console.log('❌ Create response body:', createRes.body); // Helpful during debugging
    expect(createRes.statusCode).toBe(201);
    expect(createRes.body.title).toBe(testNote.title);

    const getRes = await request(app)
      .get('/api/notes')
      .set('Authorization', `Bearer ${token}`)

    expect(getRes.statusCode).toBe(200);
    const found = getRes.body.find((n: any) => n.title === testNote.title);
    expect(found).toBeDefined();
  });
});
