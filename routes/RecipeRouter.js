const router = require('express').Router()
const recipeCtrl = require('../controllers/recipeCtrl')
const middleware = require('../middleware')

router.get('/', recipeCtrl.getAllRecipes)
router.get('/:recipeId', recipeCtrl.getOneRecipe)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  recipeCtrl.createRecipe
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  recipeCtrl.deleteRecipe
)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  recipeCtrl.updateRecipe
)
module.exports = router
