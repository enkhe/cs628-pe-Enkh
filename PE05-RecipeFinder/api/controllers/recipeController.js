const Recipe = require('../models/Recipe');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    console.error('Error fetching recipe by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    console.log('Incoming request body:', req.body); // Log the incoming request body

    // Validate required fields
    const { name, category, cookingTime, servings, difficulty, ingredients, instructions } = req.body;
    if (!name || !category || !cookingTime || !servings || !difficulty || !ingredients || !instructions) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    // Validate ingredients
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
      return res.status(400).json({ error: 'Ingredients must be a non-empty array.' });
    }

    // Create and save the recipe
    const newRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();

    console.log('Recipe successfully created:', savedRecipe); // Log the saved recipe
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error('Error creating recipe:', error.message); // Log the error message
    console.error('Stack trace:', error.stack); // Log the stack trace for debugging

    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message,
    });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete all recipes
exports.deleteAllRecipes = async (req, res) => {
  try {
    await Recipe.deleteMany();
    res.status(200).json({ message: 'All recipes deleted successfully' });
  } catch (error) {
    console.error('Error deleting all recipes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get the most recently added recipe
exports.getLatestRecipe = async (req, res) => {
  try {
    const latestRecipe = await Recipe.findOne().sort({ createdAt: -1 });
    if (!latestRecipe) {
      return res.status(404).json({ error: 'No recipes found' });
    }
    res.status(200).json(latestRecipe);
  } catch (error) {
    console.error('Error fetching the latest recipe:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};