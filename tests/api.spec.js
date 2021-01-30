const { test, expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../server/index');

let sessionId;

describe('Create a new session ID', () => {
  test('It should response the POST method with 201 and data', async () => {
    const response = await request(app).post('/api/sessions');
    expect(response.statusCode).toBe(201);
    sessionId = response.body.id;
    expect(response.body.id).toBeTruthy;
  });
});

// POST /api/sessions/:sessionId/alignments
describe('Create a new alignment', () => {
  let response;
  test('It should response the POST method with 201', async () => {
    const data = {
      seq1: 'abc',
      seq2: 'abd',
      newSeq: 'ab[c]',
      match: 0.67,
      numMutations: 1
    };
    response =  await request(app).post(`/api/sessions/${sessionId}/alignments`).send(data);
    expect(response.statusCode).toBe(201);
  });
  it('Adds the passed in data for the given session Id', () => {
    expect(response.body.newSeq).toBe('ab[c]');
    expect(response.body.sessionId).toBe(sessionId);
  });
});
