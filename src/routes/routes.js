const router = require('express').Router();

const userRouter = require('./user.routes');

router.use("/users", userRouter);

module.exports = router;
