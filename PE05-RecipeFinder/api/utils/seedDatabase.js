const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
const { loadRecipes } = require('./dataLoader'); // Load recipes dynamically from the data directory
require('dotenv').config({ path: './config.env' }); // Load environment variables

const MONGO_URI = process.env.ATLAS_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Validate and clean the recipes
const validateRecipes = (recipes) => {
  return recipes.filter((recipe) => {
    return recipe.ingredients.every((ingredient) => ingredient.name);
  });
};

// Seed the database
const seedDatabase = async () => {
  try {
    let recipes = loadRecipes(); // Load all recipes from the data directory
    console.log(`Loaded ${recipes.length} recipes from the data directory.`);

    recipes = validateRecipes(recipes); // Validate and clean the recipes
    console.log(`Validated ${recipes.length} recipes.`);

    await Recipe.deleteMany(); // Clear existing data
    console.log('Existing recipes removed.');

    await Recipe.insertMany(recipes); // Insert recipes into the database
    console.log('Database seeded with recipes from the data directory.');

    mongoose.connection.close(); // Close the connection
  } catch (err) {
    console.error('Error seeding the database:', err);
    mongoose.connection.close();
  }
};

seedDatabase();