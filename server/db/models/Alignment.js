const Sequelize = require('sequelize');
const { STRING, FLOAT, INTEGER } = Sequelize;
const db = require('../db');

const Alignment = db.define('alignment', {
  seq1: {
    type: STRING
  },
  seq2: {
    type: STRING
  },
  newSeq: {
    type: STRING
  },
  match: {
    type: FLOAT,
    validate: {
      min: 0,
      max: 1
    }
  },
  numMutations: {
    type: INTEGER
  }
});

module.exports = Alignment;
