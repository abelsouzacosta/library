const router = require('express').Router();
const authentication = require('../middlewares/auth');
const PublisherController = require('../controllers/PublisherController');

router.use(authentication);

router.get("/list", PublisherController.read);

router.post("/create", PublisherController.create);

router.put("/update/:id", PublisherController.update);

router.delete("/delete/:id", PublisherController.delete);

module.exports = router;
