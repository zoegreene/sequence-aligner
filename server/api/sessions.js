const router = require('express').Router();
const { Session, Alignment } = require('../db');
const A_WEEK_IN_MSECONDS = 60 * 60 * 24 * 7 * 1000;

// GET /api/sessions
// Gets all sessions, used in test suite
router.get('/', async (req, res, next) => {
  try {
    const results = await Session.findAll();
    res.status(200).send(results);
  } catch (err) {
    next(err);
  }
});

// POST /api/sessions
// Creates a new sessionId and stores it in the browser's cookies.
router.post('/', async (req, res, next) => {
  try {
    const newSession = await Session.create();
    res.cookie('sessionId', newSession.id, {
      maxAge: A_WEEK_IN_MSECONDS,
      path: '/'
    });
    res.status(201).send(newSession);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/sessions/:sessionId
// Currently unused, but can be used to clear the results history of a given sessionId.
router.delete('/:sessionId', async (req, res, next) => {
  try {
    await Session.destroy({
      where: {
        id: req.params.sessionId
      }
    });
    res.sendStatus(205);
  } catch (err) {
    next(err);
  }
});

// GET /api/sessions/:sessionId/alignments
// Retrieves the alignments history of a given sessionId.
router.get('/:sessionId/alignments', async (req, res, next) => {
  try {
    const results = await Alignment.findAll({
      where: { sessionId: req.params.sessionId }
    });
    res.status(200).send(results);
  }
  catch (err) {
    next(err);
  }
});

// POST /api/sessions/:sessionId/alignments
// Adds a new alignment result to the sessionId's history.
router.post('/:sessionId/alignments', async (req, res, next) => {
  try {
    const session = await Session.findOne({ where: { id: req.params.sessionId }});
    const alignment = await Alignment.create(req.body);
    alignment.setSession(session);
    res.status(201).send(alignment);
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;
