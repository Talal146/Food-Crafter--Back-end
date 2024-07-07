const { Category } = require('../models');

const getAllCategories = async (req, res) => {
	try {
		let categories = await Category.find({});
		res.send(categories);
	} catch (error) {
		console.error('Error fetching categories', error);
	}
};

module.exports = {
	getAllCategories,
};
