// GET /api/session.. responds with XYZ
const { test, expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../server/index');

describe('Create a new session ID', () => {
  test('It should response the POST method with 201', async () => {
    const response = await request(app).post('/api/sessions');
    expect(response.statusCode).toBe(201);
    expect(response.data).toBeTruthy;
  });
});
