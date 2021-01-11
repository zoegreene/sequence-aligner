const router = require("express").Router()

//routes go here
router.get('/route', async (req, res, next) => {
  try {}
  catch(err) {
    next(err)
  }
})

module.exports = router
