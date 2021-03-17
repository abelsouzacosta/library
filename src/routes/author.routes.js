const router = require('express').Router();
const authentication = require('../middlewares/auth');
const AuthorController = require('../controllers/AuthorController');
const AssociationController = require('../controllers/AssociationController');

router.use(authentication);

router.get("/list", AuthorController.read);

router.post("/create", AuthorController.create);

router.put("/update/:id", AuthorController.update);

router.delete("/delete/:id", AuthorController.delete);

router.get("/details/:id", AuthorController.details);

router.post("/associate", AssociationController.associate_book_author);

module.exports = router;
