const { Schema } = require('mongoose');

const ReviewSchema = new Schema({
	comment: {
		type: String,
	},

	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	recipeId: {
		type: Schema.Types.ObjectId,
		ref: 'Recipe',
	},
});
module.exports = ReviewSchema;
