const { expect, afterAll } = require('@jest/globals');
const request = require('supertest');
const app = require('../server/index');

describe('Create a new session ID', () => {
  test('It should response the POST method with 201 and data', async () => {
    const response = await request(app).post('/api/sessions');
    expect(response.statusCode).toBe(201);
    expect(response.body.id).toBeTruthy;
  });
});

describe('Create a new alignment', () => {
  let response;
  let sessionId;

  afterAll(() => {
    app.close();
  });

  test('It should response the POST method with 201', async () => {
    sessionId = await request(app).get('/api/sessions');
    sessionId = sessionId.body[sessionId.body.length - 1].id;
    const data = {
      seq1: 'abc',
      seq2: 'abd',
      newSeq: 'ab[c]',
      match: 0.67,
      numMutations: 1
    };
    response = await request(app).post(`/api/sessions/${sessionId}/alignments`).send(data);
    expect(response.statusCode).toBe(201);
  });
  it('Adds the passed in data for the given session Id', () => {
    expect(response.body.newSeq).toBe('ab[c]');
    expect(response.body.sessionId).toBe(sessionId);
  });
  test('It should response the GET method with 200 and array of alignments', async () => {
    const getResponse = await request(app).get(`/api/sessions/${sessionId}/alignments`);
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.body.length).toBe(1);
  });
});
