const { Recipe } = require('../models')

const getAllRecipes = async (req, res) => {
  try {
    let recipes = await Recipe.find({})
    res.send(recipes)
  } catch (error) {
    console.error('Erorr fetching recipes', error)
  }
}

const createRecipe = async (req, res) => {
  try {
    await Recipe.create({ ...req.body, userId: res?.locals?.payload?.id })
    res.send(req.body)
  } catch (error) {
    console.error('Erorr creating recipe', error)
  }
}

const updateRecipe= async (req,res)=>{
	const recipe = await Recipe.findById(req.params.id)
	if (recipe && recipe.userId == res.locals.payload.id) {
    await Recipe.findByIdAndUpdate(
      req.params.id, 
			{
				name: req.body.name,
				categoryId: req.body.categoryId,
				ingredients: req.body.ingredients,
				steps: req.body.steps,
				image: req.body.image
			}
  )
    res.send({
      msg: 'Recipe Deleted',
      payload: req.params.recipe_id,
      status: 'Ok'
    })
  } else {
    res
      .status(402)
      .json({ error: 'other users cant delete recipes by other users' })
  }
}


const deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  if (recipe && recipe.userId == res.locals.payload.id) {
    await Recipe.deleteOne({
      recipe_id: req.params.id
    })
    res.send({
      msg: 'Recipe updated',
      payload: req.params.recipe_id,
      status: 'Ok'
    })
  } else {
    res
      .status(402)
      .json({ error: 'other users cant updated recipes by other users' })
  }
}
module.exports = {
  getAllRecipes,
  createRecipe,
  deleteRecipe,
	updateRecipe
}
