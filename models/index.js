const mongoose = require('mongoose');
const userSchema = require('./User');
const CategorySchema = require('./Category');
const RecipeSchema = require('./recipe');

const User = mongoose.model('User', userSchema);
const Category = mongoose.model('Category', CategorySchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {
	User,
	Category,
	Recipe,
};
