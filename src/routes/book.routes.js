const router = require('express').Router();
const authentication = require('../middlewares/auth');
const BookController = require('../controllers/BookController');
const { celebrate, Joi, Segments } = require('celebrate');

router.use(authentication);

router.get("/list", BookController.read);

router.post("/create", celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    number_of_pages: Joi.number().required(),
    publisher_id: Joi.number().required()
  }
}), BookController.create);

router.put("/update/:id", celebrate({
  [Segments.BODY]: {
    title: Joi.string(),
    description: Joi.string(),
    number_of_pages: Joi.number(),
    publisher_id: Joi.number()
  },

  [Segments.PARAMS]: {
    id: Joi.number().required()
  }
}), BookController.update);

router.delete("/delete/:id", celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required()
  }
}), BookController.delete);

router.get("/details/:id", celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required()
  }
}), BookController.details);

module.exports = router;
