const express = require('express');
const recipeController = require('../controllers/recipeController');

const router = express.Router();

// Define routes and map them to controller methods
router.get('/', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipeById);
router.post('/', recipeController.createRecipe);
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);

// Route to delete all recipes
router.delete('/', recipeController.deleteAllRecipes);

// API Documentation Route
router.get('/api-docs', (req, res) => {
  res.send(`
    <h1>Recipe Finder API Documentation</h1>
    <p>Below are the available endpoints for interacting with the Recipe Finder API:</p>
    <ul>
      <li><strong>GET /recipes</strong> - Retrieve all recipes.</li>
      <li><strong>GET /recipes/:id</strong> - Retrieve a specific recipe by its ID.</li>
      <li><strong>POST /recipes</strong> - Create a new recipe. <br>
        <strong>Body:</strong> JSON object with <code>name</code>, <code>category</code>, <code>cookingTime</code>, <code>servings</code>, <code>difficulty</code>, <code>ingredients</code>, <code>instructions</code>, <code>notes</code>, <code>images</code>, and <code>cookwares</code>.
      </li>
      <li><strong>PUT /recipes/:id</strong> - Update an existing recipe by its ID. <br>
        <strong>Body:</strong> JSON object with updated fields.
      </li>
      <li><strong>DELETE /recipes/:id</strong> - Delete a specific recipe by its ID.</li>
      <li><strong>DELETE /recipes</strong> - Delete all recipes.</li>
    </ul>
    <p>For more details, refer to the API documentation or contact the developer.</p>
  `);
});

module.exports = router;