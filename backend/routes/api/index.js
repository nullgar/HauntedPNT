const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const locationRouter = require('./location.js')
const reviewRouter = require('./review.js');
const imageRouter = require('./image.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/location', locationRouter);
router.use('/review', reviewRouter);
router.use('/image', imageRouter)
module.exports = router;
