const app = require('./server');
const { syncDB } = require('./server/db');
const port = process.env.PORT || 3000;

const init = () => {
  try {
    syncDB();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

init();
