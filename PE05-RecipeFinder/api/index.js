const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');
require('dotenv').config({ path: './config.env' }); // Explicitly specify the path

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.ATLAS_URI; // Use ATLAS_URI from config.env
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.get('/', (req, res) => {
  res.send(`
    <h1>Recipe Finder API Documentation</h1>
    <p>Below are the available endpoints for interacting with the Recipe Finder API:</p>
    <ul>
      <li><a href="/recipes" target="_blank">GET /recipes</a> - Retrieve all recipes.</li>
      <li><a href="/recipes/:id" target="_blank">GET /recipes/:id</a> - Retrieve a specific recipe by its ID.</li>
      <li><a href="/recipes" target="_blank">POST /recipes</a> - Create a new recipe. <br>
        <strong>Body:</strong> JSON object with <code>name</code>, <code>category</code>, <code>cookingTime</code>, <code>servings</code>, <code>difficulty</code>, <code>ingredients</code>, <code>instructions</code>, <code>notes</code>, <code>images</code>, and <code>cookwares</code>.
      </li>
      <li><a href="/recipes/:id" target="_blank">PUT /recipes/:id</a> - Update an existing recipe by its ID. <br>
        <strong>Body:</strong> JSON object with updated fields.
      </li>
      <li><a href="/recipes/:id" target="_blank">DELETE /recipes/:id</a> - Delete a specific recipe by its ID.</li>
      <li><a href="/recipes" target="_blank">DELETE /recipes</a> - Delete all recipes.</li>
    </ul>
    <h2>Example Recipe Object</h2>
    <pre>
{
  "name": "Spaghetti Bolognese",
  "category": "Italian",
  "cookingTime": 45,
  "servings": 4,
  "difficulty": "Easy",
  "ingredients": [
    { "name": "spaghetti", "quantity": "400", "unit": "g" },
    { "name": "ground beef", "quantity": "500", "unit": "g" },
    { "name": "onion", "quantity": "1", "unit": "medium" },
    { "name": "garlic cloves", "quantity": "2", "unit": "" },
    { "name": "tomato sauce", "quantity": "400", "unit": "ml" }
  ],
  "instructions": "1. Cook the spaghetti. 2. Prepare the sauce. 3. Combine and serve.",
  "notes": "You can add Parmesan cheese for extra flavor.",
  "images": ["https://example.com/spaghetti.jpg"],
  "cookwares": ["pot", "pan", "spatula"]
}
    </pre>
    <p>For more details, refer to the API documentation or contact the developer.</p>
  `);
});

app.post('/recipes', async (req, res) => {
  try {
    const { name, category, cookingTime, servings, difficulty, ingredients, instructions } = req.body;

    // Validate required fields
    if (!name || !category || !cookingTime || !servings || !difficulty || !ingredients || !instructions) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Validate data types
    if (isNaN(cookingTime) || isNaN(servings)) {
      return res.status(400).json({ error: 'Cooking time and servings must be numbers.' });
    }

    // Validate ingredients
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
      return res.status(400).json({ error: 'Ingredients must be a non-empty array.' });
    }

    // Create the recipe
    const newRecipe = new Recipe({
      name,
      category,
      cookingTime: Number(cookingTime),
      servings: Number(servings),
      difficulty,
      ingredients,
      instructions,
    });

    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/recipes', recipeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});