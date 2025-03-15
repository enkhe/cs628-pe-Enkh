const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
  unit: { type: String, required: true },
});

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  servings: { type: Number, required: true },
  difficulty: { type: String, required: true },
  ingredients: { type: [ingredientSchema], required: true },
  instructions: { type: String, required: true },
  notes: { type: String, default: '' },
  images: { type: [String], default: [] },
  cookwares: { type: [String], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);