const router = require('express').Router();

const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');

router.use("/users", userRouter);

router.use("/login", authRouter);

module.exports = router;
