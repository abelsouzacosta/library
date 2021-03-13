const router = require('express').Router();

const UserController = require('../controllers/UserController');

router.get("/list", UserController.read);

router.post("/create", UserController.create);

router.put("/update/:id", UserController.update);

router.delete("/delete/:id", UserController.delete);

module.exports = router;
