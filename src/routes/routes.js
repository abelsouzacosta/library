const router = require('express').Router();

const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const authorRouter = require('./author.routes');


router.use("/users", userRouter);

router.use("/login", authRouter);

router.use("/authors", authorRouter);

module.exports = router;
