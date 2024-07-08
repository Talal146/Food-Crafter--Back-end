const { Schema } = require('mongoose')

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  ingredients: [{ itemName: String, amount: String }],
  steps: { type: String },
  image: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})
module.exports = RecipeSchema
