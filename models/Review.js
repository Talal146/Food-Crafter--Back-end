const { Schema } = require('mongoose')

const ReviewSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipeId: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  }
})

module.exports = ReviewSchema
