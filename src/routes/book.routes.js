const router = require('express').Router();
const authentication = require('../middlewares/auth');
const BookController = require('../controllers/BookController');

router.use(authentication);

router.get("/list", BookController.read);

router.post("/create", BookController.create);

router.put("/update/:id", BookController.update);

router.delete("/delete/:id", BookController.delete);

router.get("/details/:id", BookController.details);

module.exports = router;
