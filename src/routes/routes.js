const router = require('express').Router();

const userRouter = require('./userRouter.routes');

router.use("/users", userRouter);

module.exports = router;
