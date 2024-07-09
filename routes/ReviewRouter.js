const router = require('express').Router()
const reviewCtrl = require('../controllers/reviewCtrl')
const middleware = require('../middleware')

router.get('/:recipeId', reviewCtrl.getReviewReviews)
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
