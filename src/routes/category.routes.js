const router = require('express').Router();
const authentication = require('../middlewares/auth');
const CategoryController = require('../controllers/CategoryController');
const AssociationController = require('../controllers/AssociationController');

router.use(authentication);

router.get("/list", CategoryController.read);

router.post("/create", CategoryController.create);

router.put("/update/:id", CategoryController.update);

router.delete("/delete/:id", CategoryController.delete);

router.get("/details/:id", CategoryController.details);

router.post("/associate", AssociationController.associate_book_category);

module.exports = router;
