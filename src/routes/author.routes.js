const router = require('express').Router();
const authentication = require('../middlewares/auth');
const AuthorController = require('../controllers/AuthorController');
const AssociationController = require('../controllers/AssociationController');
const { celebrate, Joi, Segments } = require('celebrate');

router.use(authentication);

router.get("/list", AuthorController.read);

router.post("/create", celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    date_of_birth: Joi.date().required(),
    date_of_death: Joi.date()
  }
}), AuthorController.create);

router.put("/update/:id", celebrate({
  [Segments.BODY]: {
    name: Joi.string(),
    description: Joi.string(),
    date_of_birth: Joi.date(),
    date_of_death: Joi.date()
  },

  [Segments.PARAMS]: {
    id: Joi.number().required()
  }
}), AuthorController.update);

router.delete("/delete/:id", celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required()
  }
}), AuthorController.delete);

router.get("/details/:id", celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required()
  }
}), AuthorController.details);

router.post("/associate", AssociationController.associate_book_author);

module.exports = router;
