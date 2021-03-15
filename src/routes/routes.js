const router = require('express').Router();

const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const authorRouter = require('./author.routes');
const categoryRouter = require('./category.routes');
const bookRouter = require('./book.routes');
const publisherRouter = require('./publisher.routes');

router.use("/users", userRouter);

router.use("/login", authRouter);

router.use("/authors", authorRouter);

router.use("/categories", categoryRouter);

router.use("/books", bookRouter);

router.use("/publishers", publisherRouter);

module.exports = router;
