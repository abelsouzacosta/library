const router = require('express').Router();

const UserController = require('../controllers/UserController');

router.get("/list", UserController.read);

module.exports = router;
