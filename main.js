const app = require('./server');
const port = process.env.PORT || 3000;

const init = () => {
  try {
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

init();
