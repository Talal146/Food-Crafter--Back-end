const mongoose = require('mongoose');
const userSchema = require('./User');
const CategorySchema = require('./Category');
const RecipeSchema = require('./Recipe');
const ReviewSchema = require('./Review');

const User = mongoose.model('User', userSchema);
const Category = mongoose.model('Category', CategorySchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);
const Review = mongoose.model('Review', ReviewSchema);

module.exports = {
	User,
	Category,
	Recipe,
	Review,
};
