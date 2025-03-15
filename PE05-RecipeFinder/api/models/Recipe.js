const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: false }, // Make quantity optional
  unit: { type: String, required: false } // Unit can be optional
});

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  cookingTime: { type: Number, required: true }, // Time in minutes
  servings: { type: Number, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  ingredients: { type: [IngredientSchema], required: true, default: [
    {
      "name": "salt",
      "quantity": "",
      "unit": "to taste"
    }
  ] },
  instructions: { type: String, required: true },
  notes: { type: String, required: false }, // Optional field for additional notes
  images: { type: [String], required: false }, // Array of image URLs
  cookwares: { type: [String], required: false }, // Optional array of cookware or utensils
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', RecipeSchema);