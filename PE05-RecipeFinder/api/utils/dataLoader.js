const fs = require('fs');
const path = require('path');

/**
 * Load all recipe data from the data directory.
 * @returns {Array} An array of all recipes from all JSON files.
 */
const loadRecipes = () => {
  const dataDir = path.join(__dirname, '../data'); // Corrected path to the data directory
  const recipeFiles = fs.readdirSync(dataDir); // Read all files in the data directory
  let allRecipes = [];

  recipeFiles.forEach((file) => {
    if (file.endsWith('.json')) {
      const filePath = path.join(dataDir, file);
      const fileData = fs.readFileSync(filePath, 'utf-8'); // Read the file content
      const recipes = JSON.parse(fileData); // Parse the JSON content
      allRecipes = allRecipes.concat(recipes); // Merge recipes into the array
    }
  });

  return allRecipes;
};

module.exports = { loadRecipes };