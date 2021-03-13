const router = require('express').Router();
const authentication = require('../middlewares/auth');
const AuthorController = require('../controllers/AuthorController');

router.use(authentication);

router.get("/list", AuthorController.read);

router.post("/create", AuthorController.create);

router.put("/update/:id", AuthorController.update);

router.delete("/delete/:id", AuthorController.delete);

module.exports = router;
