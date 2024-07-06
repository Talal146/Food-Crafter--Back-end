const mongoose = require('mongoose');
const userSchema = require('./User');
const CategorySchema = require('./Category');

const User = mongoose.model('User', userSchema);
const Category = mongoose.model('Category', CategorySchema);

module.exports = {
	User,
	Category,
};
