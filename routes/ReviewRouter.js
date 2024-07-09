const router = require('express').Router()
const reviewCtrl = require('../controllers/reviewCtrl')
const middleware = require('../middleware')

router.get('/all_reviews/:recipeId', reviewCtrl.getRecipeReviews)
router.get('/:reviewId', reviewCtrl.getOneReview)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  reviewCtrl.createReview
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  reviewCtrl.deleteReview
)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  reviewCtrl.updateReview
)
module.exports = router
