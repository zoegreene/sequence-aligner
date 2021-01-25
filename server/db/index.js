const db = require('./db');
const Session = require('./models/Session');
const Alignment = require('./models/Alignment');

Session.hasMany(Alignment);
Alignment.belongsTo(Session);

const syncDB = async (forceSeed = true) => {
  await db.sync({ force: forceSeed });
}

module.exports = {
  db,
  Session,
  Alignment,
  syncDB
};
