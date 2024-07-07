const { Recipe } = require('../models');

const getAllRecipes = async (req, res) => {
	try {
		let recipes = await Recipe.find({});
		res.send(recipes);
	} catch (error) {
		console.error('Erorr fetching recipes', error);
	}
};

module.exports = {
	getAllRecipes,
};
