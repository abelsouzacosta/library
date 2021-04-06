const router = require('express').Router();
const authentication = require('../middlewares/auth');
const CategoryController = require('../controllers/CategoryController');
const AssociationController = require('../controllers/AssociationController');
const { celebrate, Joi, Segments } = require('celebrate');

router.use(authentication);

router.get("/list", CategoryController.read);

router.post("/create", celebrate({
  [Segments.BODY]: {
    name: Joi.string().required()
  }
}), CategoryController.create);

router.put("/update/:id", celebrate({
  [Segments.BODY]: {
    name: Joi.string()
  },

  [Segments.PARAMS]: {
    id: Joi.number().required()
  }
}), CategoryController.update);

router.delete("/delete/:id", celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required()
  }
}), CategoryController.delete);

router.get("/details/:id", celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required()
  }
}), CategoryController.details);

router.post("/associate", AssociationController.associate_book_category);

module.exports = router;
