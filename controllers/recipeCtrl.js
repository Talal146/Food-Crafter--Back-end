const { Recipe } = require('../models');

const getAllRecipes = async (req, res) => {
	try {
		let recipes = await Recipe.find({});
		res.send(recipes);
	} catch (error) {
		console.error('Erorr fetching recipes', error);
	}
};

const createRecipe = async (req,res)=>{
	try {
		await Recipe.create(req.body);
		res.send(req.body)
	} catch (error) {
		console.error('Erorr creating recipe', error);
	}
}

module.exports = {
	getAllRecipes,
	createRecipe
};
