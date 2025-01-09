const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
const menuController = require('../controllers/menuControl');
const {validationSchema} = require('../middleWares/validationSchema');

router.route('/')
      .get(menuController.getAllMenuItems)
      .post(validationSchema(),menuController.addMenuItem)

router.route('/:itemId')
      .get(menuController.getSingleMenuItem)
      .patch(menuController.updateMenuItem)
      .delete(menuController.deleteMenuItem)

module.exports = router;