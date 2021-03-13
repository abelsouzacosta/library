const router = require('express').Router();

const UserController = require('../controllers/UserController');

router.get("/list", UserController.read);

router.post("/create", UserController.create);

module.exports = router;
