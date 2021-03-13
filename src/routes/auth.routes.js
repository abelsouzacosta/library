const router = require('express').Router();
const AuthController = require('../controllers/AuthController');

router.post("/sign_up", AuthController.sign_up);

module.exports = router;
