const db = require('./db');
const Session = require('./models/Session');
const Alignment = require('./models/Alignment');

Session.hasMany(Alignment);
Alignment.belongsTo(Session);

const syncDB = async () => {
  await db.sync({ force: true });
}

module.exports = {
  db,
  Session,
  Alignment,
  syncDB
};
