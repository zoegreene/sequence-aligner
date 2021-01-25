const { expect } = require('@jest/globals');
const { Session, Alignment, syncDB, db } = require('../server/db');

beforeAll(() => {
  return syncDB(false);
});

afterAll(() => {
  db.close();
});

describe('Session and Alignment association', () => {
  let alignment1, alignment2, session;
  beforeEach( async () => {
    alignment1 = await Alignment.create({
      seq1: 'GATTACA',
      seq2: 'CATTACA',
      newSeq: '[G]ATTACA',
      match: 0.14,
      numMutations: 1
    });
    alignment2 = await Alignment.create({
      seq1: 'ZOE',
      seq2: 'ZO',
      newSeq: 'ZO[_]',
      match: 0.67,
      numMutations: 1
    });
    session = await Session.create();
    alignment1.setSession(session);
    alignment2.setSession(session);
  });

  describe('Alignment', () => {
    it('is associated with a session', async () => {
      const result = await alignment1.getSession();
      expect(result.id).toBe(session.id);
    });
  });
  describe('Session', () => {
    it('has many alignments', async () => {
      const result = await Session.findAll({
        include: [{ model: Alignment }]
      });
      expect(result[0].alignments.length).toBe(2);
    });
  });
});
