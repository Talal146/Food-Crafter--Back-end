const { Review } = require('../models')

const getRecipeReviews = async (req, res) => {
  try {
    let recipeId = req.params.recipeId
    let reviews = await Review.find({ recipeId: recipeId })
    res.send(reviews)
  } catch (error) {
    console.error('Error fetching reviews', error)
  }
}

const getOneReview = async (req, res) => {
  const reviewId = req.params.reviewId
  const review = await Review.findById(reviewId)
  res.send(review)
}

const createReview = async (req, res) => {
  console.log('Request Body:', req.body)
  try {
    const review = await Review.create({
      comment: req.body.comment,
      recipeId: req.body.recipeId,
      userId: res.locals.payload.id
    })
    res.send(review)
  } catch (error) {
    console.error('Error creating review:', error)
    res.status(400).send({ error: 'Error creating review' })
  }
}


const updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id)
  if (review && review.userId == res.locals.payload.id) {
    await Review.findByIdAndUpdate(req.params.id, {
      comment: req.body.comment
    })
    res.send({
      msg: 'Review updated',
      payload: req.params.id,
      status: 'Ok'
    })
  } else {
    res
      .status(402)
      .json({ error: 'other users cannot update reviews by other users' })
  }
}

const deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id)
  if (review && review.userId == res.locals.payload.id) {
    await Review.deleteOne({
      _id: req.params.id
    })
    res.send({
      msg: 'Review deleted',
      payload: req.params.id,
      status: 'Ok'
    })
  } else {
    res
      .status(402)
      .json({ error: 'other users cannot delete reviews by other users' })
  }
}

module.exports = {
  getRecipeReviews,
  createReview,
  deleteReview,
  updateReview,
  getOneReview
}
