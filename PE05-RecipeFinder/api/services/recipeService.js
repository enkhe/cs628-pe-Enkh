const Recipe = require('../models/Recipe');

// Fetch all recipes
exports.getAllRecipes = async () => {
  return await Recipe.find();
};

// Fetch a recipe by ID
exports.getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

// Create a new recipe
exports.createRecipe = async (recipeData) => {
  const recipe = new Recipe(recipeData);
  return await recipe.save();
};

// Update a recipe by ID
exports.updateRecipe = async (id, recipeData) => {
  return await Recipe.findByIdAndUpdate(id, recipeData, { new: true });
};

// Delete a recipe by ID
exports.deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};

// Delete all recipes
exports.deleteAllRecipes = async () => {
  return await Recipe.deleteMany();
};