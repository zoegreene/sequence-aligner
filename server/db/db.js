const pg = require('pg');
pg.defaults.ssl = true;

const Sequelize = require('sequelize');

const db = new Sequelize ({
  connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/sequence_aligner',
  ssl: {
    rejectUnauthorized: false
  }
  // { logging: false }
});

module.exports = db;
