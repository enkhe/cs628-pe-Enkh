import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import RecipeForm from '../pages/RecipeForm';
import recipeService from '../services/recipeService';

function RecipeEditDialog({ open, onClose, recipeId, onRecipeUpdated }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (recipeId) {
      recipeService.getRecipeById(recipeId).then((data) => setRecipe(data));
    }
  }, [recipeId]);

  const handleFormSubmit = (updatedRecipe) => {
    recipeService.updateRecipe(recipeId, updatedRecipe).then(() => {
      onRecipeUpdated(); // Notify parent to refresh the recipe list
      onClose(); // Close the dialog
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Edit Recipe</DialogTitle>
      <DialogContent>
        {recipe && (
          <RecipeForm
            recipe={recipe}
            onSubmit={handleFormSubmit}
            onCancel={onClose}
            isDialog
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RecipeEditDialog;