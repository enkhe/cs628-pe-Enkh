const recipeService = require('../services/recipeService');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeService.getAllRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await recipeService.getRecipeById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions } = req.body;
    const newRecipe = await recipeService.createRecipe({ name, ingredients, instructions });
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add recipe' });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions } = req.body;
    const updatedRecipe = await recipeService.updateRecipe(req.params.id, { name, ingredients, instructions });
    if (!updatedRecipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update recipe' });
  }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await recipeService.deleteRecipe(req.params.id);
    if (!deletedRecipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
};

// Delete all recipes
exports.deleteAllRecipes = async (req, res) => {
  try {
    await recipeService.deleteAllRecipes();
    res.json({ message: 'All recipes deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete all recipes' });
  }
};