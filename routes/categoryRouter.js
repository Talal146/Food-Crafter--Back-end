const router = require('express').Router();
const middleware = require('../middleware');
const categoryCtrl = require('../controllers/categoryCtrl');

router.get(
	'/',
	middleware.stripToken,
	middleware.verifyToken,
	categoryCtrl.getAllCategories
);


module.exports = router;
