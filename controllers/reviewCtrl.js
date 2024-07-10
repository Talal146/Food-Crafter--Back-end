const { Review } = require('../models')

const getRecipeReviews = async (req, res) => {
  try {
    let recipeId = req.params.recipeId
    let reviews = await Review.find({ recipeId: recipeId })
    res.send(reviews)
  } catch (error) {
    console.error('Erorr fetching reviews', error)
  }
}

const getOneReview = async (req, res) => {
  const reviewId = req.params.reviewId
  const review = await Review.findById(reviewId)
  res.send(review)
}

const createReview = async (req, res) => {
  try {
    await Review.create({ ...req.body, userId: res.locals.payload.id })
    res.send(req.body)
  } catch (error) {
    console.error('Erorr creating review', error)
  }
}

const updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id)
  if (review && review.userId == res.locals.payload.id) {
    await Review.findByIdAndUpdate(req.params.id, {
      comment: req.body.comment,
      rating: req.body.rating
    })
    res.send({
      msg: 'Review updated',
      payload: req.params.review_id,
      status: 'Ok'
    })
  } else {
    res
      .status(402)
      .json({ error: 'other users cant update reviews by other users' })
  }
}

const deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id)
  if (review && review.userId == res.locals.payload.id) {
    await Review.deleteOne({
      review_id: req.params.id
    })
    res.send({
      msg: 'Review deleted',
      payload: req.params.review_id,
      status: 'Ok'
    })
  } else {
    res
      .status(402)
      .json({ error: 'other users cant delete reviews by other users' })
  }
}
module.exports = {
  getRecipeReviews,
  createReview,
  deleteReview,
  updateReview,
  getOneReview
}
