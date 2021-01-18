const router = require('express').Router();
const { Session, Alignment } = require('../db');
const A_WEEK_IN_SECONDS = 60 * 60 * 24 * 7 * 1000;

// POST /api/sessions
router.post('/', async (req, res, next) => {
  try {
    const newSession = await Session.create();
    res.cookie('sessionId', newSession.id, {
      maxAge: A_WEEK_IN_SECONDS,
      path: '/'
    });
    res.status(201).send(newSession);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/sessions/:sessionId
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
