import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Grid, IconButton, MenuItem } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import recipeService from '../services/recipeService';

function RecipeForm({ recipe: initialRecipe, onSubmit, onCancel, isDialog }) {
  const { id } = useParams(); // Get the recipe ID from the URL (if editing)
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(
    initialRecipe || {
      name: '',
      category: '',
      cookingTime: '',
      servings: '',
      difficulty: '',
      ingredients: [{ name: '', quantity: '', unit: '' }],
      instructions: '',
      notes: '',
      images: [],
      cookwares: [],
    }
  );

  const unitOptions = ['g', 'kg', 'ml', 'l', 'cup', 'tbsp', 'tsp', 'oz', 'lb', 'piece', 'to taste'];

  useEffect(() => {
    if (id) {
      recipeService.getRecipeById(id).then((data) => setRecipe(data));
    }
  }, [id]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index][field] = value;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const handleAddIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [{ name: '', quantity: '', unit: '' }, ...recipe.ingredients],
    });
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const handleAddCookware = () => {
    setRecipe({ ...recipe, cookwares: [...recipe.cookwares, ''] });
  };

  const handleCookwareChange = (index, value) => {
    const updatedCookwares = [...recipe.cookwares];
    updatedCookwares[index] = value;
    setRecipe({ ...recipe, cookwares: updatedCookwares });
  };

  const handleRemoveCookware = (index) => {
    const updatedCookwares = recipe.cookwares.filter((_, i) => i !== index);
    setRecipe({ ...recipe, cookwares: updatedCookwares });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure cookingTime and servings are numbers
    const formattedRecipe = {
      ...recipe,
      cookingTime: Number(recipe.cookingTime),
      servings: Number(recipe.servings),
      ingredients: recipe.ingredients.map((ingredient) => ({
        name: ingredient.name,
        quantity: ingredient.quantity,
        unit: ingredient.unit,
      })),
    };

    if (id) {
      recipeService.updateRecipe(id, formattedRecipe).then(() => navigate('/recipes'));
    } else {
      recipeService.createRecipe(formattedRecipe).then(() => navigate('/recipes'));
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {id ? 'Edit Recipe' : 'Add Recipe'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Category"
          name="category"
          value={recipe.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cooking Time (mins)"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Servings"
          name="servings"
          value={recipe.servings}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Difficulty"
          name="difficulty"
          value={recipe.difficulty}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Grid container alignItems="center" spacing={2} style={{ marginBottom: '16px' }}>
          <Grid item>
            <Typography variant="h6">Ingredients</Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" onClick={handleAddIngredient}>
              <Add />
            </IconButton>
          </Grid>
        </Grid>
        {recipe.ingredients.map((ingredient, index) => (
          <Grid container spacing={2} key={index} alignItems="center">
            <Grid item xs={4}>
              <TextField
                label="Name"
                value={ingredient.name}
                onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Quantity"
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Unit"
                value={ingredient.unit}
                onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                select
                fullWidth
              >
                {unitOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              {recipe.ingredients.length > 1 && (
                <IconButton color="secondary" onClick={() => handleRemoveIngredient(index)}>
                  <Remove />
                </IconButton>
              )}
            </Grid>
          </Grid>
        ))}
        <TextField
          label="Instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          label="Notes"
          name="notes"
          value={recipe.notes}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={2}
        />
        <Typography variant="h6" gutterBottom>
          Cookwares
        </Typography>
        {recipe.cookwares.map((cookware, index) => (
          <Grid container spacing={2} key={index} alignItems="center">
            <Grid item xs={10}>
              <TextField
                label={`Cookware ${index + 1}`}
                value={cookware}
                onChange={(e) => handleCookwareChange(index, e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton color="secondary" onClick={() => handleRemoveCookware(index)}>
                <Remove />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Button variant="contained" color="primary" onClick={handleAddCookware}>
          Add Cookware
        </Button>
        <Grid container spacing={2} style={{ marginTop: '16px' }}>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              {id ? 'Update Recipe' : 'Add Recipe'}
            </Button>
          </Grid>
          {isDialog && (
            <Grid item>
              <Button onClick={onCancel} variant="outlined" color="secondary">
                Cancel
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Container>
  );
}

export default RecipeForm;