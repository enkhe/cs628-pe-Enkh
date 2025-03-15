import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, List, ListItem } from '@mui/material';
import recipeService from '../services/recipeService';

function RecipeDetails() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the recipe details from the backend
    recipeService
      .getRecipeById(id)
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipe:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
        <Typography>Loading recipe details...</Typography>
      </Container>
    );
  }

  if (!recipe) {
    return (
      <Container>
        <Typography variant="h5" color="error">
          Recipe not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {recipe.name}
      </Typography>
      <Typography variant="body1">
        <strong>Category:</strong> {recipe.category}
      </Typography>
      <Typography variant="body1">
        <strong>Cooking Time:</strong> {recipe.cookingTime} mins
      </Typography>
      <Typography variant="body1">
        <strong>Servings:</strong> {recipe.servings}
      </Typography>
      <Typography variant="body1">
        <strong>Difficulty:</strong> {recipe.difficulty}
      </Typography>
      <Typography variant="body1">
        <strong>Ingredients:</strong>
      </Typography>
      <List>
        {recipe.ingredients.map((ingredient, index) => (
          <ListItem key={index}>
            {ingredient.name} - {ingredient.quantity || 'N/A'} {ingredient.unit || ''}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1">
        <strong>Instructions:</strong> {recipe.instructions}
      </Typography>
    </Container>
  );
}

export default RecipeDetails;