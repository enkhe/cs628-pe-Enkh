import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import RecipeEditDialog from '../components/RecipeEditDialog';
import recipeService from '../services/recipeService';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  useEffect(() => {
    refreshRecipes();
  }, []);

  const refreshRecipes = () => {
    recipeService.getAllRecipes().then((data) => setRecipes(data));
  };

  const handleOpenEditDialog = (id) => {
    setSelectedRecipeId(id);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
    setSelectedRecipeId(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Recipes
      </Typography>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe._id}>
            <ListItemText primary={recipe.name} secondary={recipe.category} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpenEditDialog(recipe._id)}
            >
              Edit
            </Button>
          </ListItem>
        ))}
      </List>
      <RecipeEditDialog
        open={editDialogOpen}
        onClose={handleCloseEditDialog}
        recipeId={selectedRecipeId}
        onRecipeUpdated={refreshRecipes}
      />
    </Container>
  );
}

export default RecipeList;