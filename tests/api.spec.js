const { test, expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../server/index');

let sessionId;

describe('Create a new session ID', () => {
  test('It should response the POST method with 201 and data', async () => {
    const response = await request(app).post('/api/sessions');
    expect(response.statusCode).toBe(201);
    sessionId = response.body.id;
    console.log('session in first post', sessionId);
    expect(response.body.id).toBeTruthy;
  });
});

describe('Create a new alignment', () => {
  let response;
  console.log('session in post',sessionId);
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

// GET /api/sessions/:sessionId/alignments
// Retrieves the alignments history of a given sessionId.
// describe('Get all alignments for a give sessionId', () => {
//   let response;
//   console.log(sessionId);
//   test('It should response the GET method with 200', async () => {
//     response = await request(app).get(`api/sessions/${sessionId}/alignments`);
//     expect(response.statusCode).toBe(200);
//   });
// })
