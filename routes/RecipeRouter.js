const router = require('express').Router();
const recipeCtrl = require('../controllers/recipeCtrl');

router.get('/', recipeCtrl.getAllRecipes);

module.exports = router;
