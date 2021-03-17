const router = require('express').Router();
const authentication = require('../middlewares/auth');
const CategoryController = require('../controllers/CategoryController');

router.use(authentication);

router.get("/list", CategoryController.read);

router.post("/create", CategoryController.create);

router.put("/update/:id", CategoryController.update);

router.delete("/delete/:id", CategoryController.delete);

router.get("/details/:id", CategoryController.details);

module.exports = router;
